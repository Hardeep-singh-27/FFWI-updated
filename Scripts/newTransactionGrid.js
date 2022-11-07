var activeUID;
var activeGrid = "grid1";

function getfocusedUID() {
    if (activeUID == null) {
        console.log("getting neew UID");
        var activeGridName = getActiveGrid();
        var grid = ASPxClientGridView.Cast(activeGridName);
        var UID = grid.GetRowKey(grid.focusedRowIndex);
        return UID;

    } else {
        return activeUID;
    }
}

function productCodeAdd(s, e) {
    console.log(e);
    var newProdCode = e.result;
    txtProdCode.SetText(newProdCode);
}


function setActiveUID(s, e) {
    //gets clicked or focused cell's UID, sets as global
    globalThis.activeUID = s.GetRowKey(s.focusedRowIndex);
    globalThis.activeGrid = s.globalName;
}


function getActiveGrid() {
    return activeGrid;
}

function saveActiveGrid() {
    var grid = gridCaster(getActiveGrid());
    grid.UpdateEdit();
}

function refreshActiveGrid() {
    var grid = gridCaster(getActiveGrid());
    grid.Refresh();
}





function mfgSelectedIndexChanged(s, e) {
    var mfg = s.GetValue();
    onMfgChangeUpdateBackend(mfg);
    onMfgChangeFilterModelSelection(mfg);
}
function onMfgChangeFilterModelSelection(mfg) {
    cbomodel.PerformCallback('filtering&' + mfg);

}

function onMfgChangeUpdateBackend(mfg) {
    const entityID = new URLSearchParams(window.location.search).get('id');
    const qUID = getfocusedUID();
    $.ajax({
        type: "POST",
        url: ajaxVersioner("MfgResponse"),
        data: JSON.stringify({ mfg: mfg, UID: qUID, orderNo: entityID, refresh: false }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

        },
        error: function (xhr, status, error) {
            console.log(xhr);  // to see the error message
        }
    }
    );


}

function gridCaster(gridName) {
    //accepts gridname, returns grid
    var grid = ASPxClientGridView.Cast(gridName);
    return grid;
}


function onModelSelectedIndexChange(s, e) {
    if (s.GetSelectedIndex() > -1) {
        //if an item in the list then distribute what you know
        onModelSelectPopulateMfgandProdTitle(s)
    } else {
        //else clear out propduct code
        clearProdCode(getfocusedUID());
    }
}

function onModelSelectPopulateMfgandProdTitle(s) {
    //sets other values in grid
    var grid = gridCaster(getActiveGrid());
    var UID = getfocusedUID();
    var modl = s.GetSelectedItem();
    grid.batchEditApi.SetCellValueByKey(UID, "Product_Title", modl.GetColumnText(4), null, true);
    grid.batchEditApi.SetCellValueByKey(UID, "List_Price_Ea", modl.GetColumnText(7), null, true);
    grid.batchEditApi.SetCellValueByKey(UID, "Purchase_Multiplier", modl.GetColumnText(6), null, true);
    grid.batchEditApi.SetCellValueByKey(UID, "Manufacturer", modl.GetColumnText(9), null, true);
    var model = s.GetValue();
    var prodCode = modl.GetColumnText(8);
    //updates choice in db
    onModelSelectNoneUpdateProductCode(model, prodCode, UID);
}


function clearProdCode(uid) {
    //if text changes in model but not selected, clear model 
    $.ajax({
        type: "POST",
        url: ajaxVersioner("productCodeClear"),
        data: JSON.stringify({

            UID: uid


        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);


        },
        error: function (xhr, status, error) {
            console.log(xhr);

        }
    });
}

function onModelSelectNoneUpdateProductCode(modelNo, prodCode, uuid) {
    //when user enters something not in the dropdown, send a message to the backened to clear out the product code


    //gets UID and the model or product code 
    //sends to backend for saving item in Update Quote Item 
    var inputCode;
    console.log(prodCode);
    if (prodCode != null && prodCode.length > 1) {

        inputCode = modelNo + ':' + prodCode;
    } else {
        inputCode = modelNo;
    }
    var thisOrder = new URLSearchParams(window.location.search).get('id');


    $.ajax({
        type: "POST",
        url: ajaxVersioner("modelUpdate"),
        data: JSON.stringify({
            model: inputCode,
            UID: uuid,
            orderNo : thisOrder

        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);


        },
        error: function (xhr, status, error) {
            console.log(xhr);

        }
    });


}

function saveGridBeforePopLaunch() {

}

function onListPriceChange(s) {
    var listPrice = checkNull(txtListPrice.GetValue());
    var costMutli = checkNull(txtCostMulti.GetValue());
    var priceMutli = checkNull(txtPriceMulti.GetValue());

    var newCost = listPrice * costMutli;
    var newPrice = listPrice * priceMutli;


    txtCost.SetText(newCost);
    txtPrice.SetText(newPrice);


}


function onCostOverrideCol(s) {
    //update price mutli on change in same row

    var uid = getfocusedUID();
    var grid = gridCaster(activeGrid);
    var listPrice = checkNull(grid.batchEditApi.GetCellValueByKey(uid, 'List_Price_Ea'));
    var newCost = s.GetValue();

    var newMulti = newCost / listPrice;
    if (isFinite(newMulti) === true) {
        console.log(newMulti);
        grid.batchEditApi.SetCellValueByKey(uid, "Purchase_Multiplier", newMulti, null, true);
    }


}

function onPriceOverrideCol(s) {
    //update price mutli on change in same row

    var uid = getfocusedUID();
    var grid = gridCaster(activeGrid);
    var listPrice = checkNull(grid.batchEditApi.GetCellValueByKey(uid, 'List_Price_Ea'));
    var newCost = s.GetValue();

    var newMulti = newCost / listPrice;
    if (isFinite(newMulti) === true) {
        console.log(newMulti);
        grid.batchEditApi.SetCellValueByKey(uid, "Discount_Multiplier", newMulti, null, true);
    }


}

function onCostMultiOverride(s) {
    //update cost col where in same row
    var uid = getfocusedUID();
    var grid = gridCaster(activeGrid);
    var listPrice = checkNull(grid.batchEditApi.GetCellValueByKey(uid, 'List_Price_Ea'));
    var newCost = s.GetValue();

    var newMulti = newCost * listPrice;
    if (isFinite(newMulti) === true) {
        console.log(newMulti);
        grid.batchEditApi.SetCellValueByKey(uid, "Cost2", newMulti, null, true);
    }


}


function onCostOverride(s) {
    //do calculation and update the cost multiplier 
    var listPrice = checkNull(txtListPrice.GetValue());
    var newCost = checkNull(txtCost.GetValue());

    var newCostMulti = newCost / listPrice ;
    if (isFinite(newCostMulti) === true) {
        txtCostMulti.SetText(newCostMulti);
    }
}

function onCostMutlChange(s) {
    //do calc and show change in cost
    var listPrice = checkNull(txtListPrice.GetValue());
    var newCostMult = checkNull(txtCostMulti.GetValue());

    var newCost = listPrice * newCostMult;
    if (isFinite(newCost) === true) {
        txtCost.SetText(newCost);

    }

}

function onPriceMutlChange(s) {
    //update cell to show calulation between price mutli and list price
    var listPrice = checkNull(txtListPrice.GetValue());
    var newPriceMult = checkNull(txtPriceMulti.GetValue());

    var newPrice = listPrice * newPriceMult;
    if (isFinite(newPrice) === true) {
        txtPrice.SetText(newPrice);
    }


}

function onPriceOverrideDetails(s) {
    var listPrice = checkNull(txtListPrice.GetValue());
    var newPrice = checkNull(s.GetValue());

    var newPriceMulti = newPrice / listPrice;
    if (isFinite(newPriceMulti) === true) {
        txtPriceMulti.SetText(newPriceMulti);
    }
}

function checkNull(inputValue) {
    //checks if value is null, if it is, returns a 0 to work with 
    if (!inputValue)
    ///Which will check for empty strings (""), null, undefined, false and the numbers 0 and NaN
    {
        return 0;
    } else {
        if (isFinite(inputValue) === true) {
            //makes surevalue is a number and not infinite, or a string
            return inputValue;
        } else {
            return 0;
        }
       
    }
}


function onPriceOverride(s, e) {
    //when user changes the price, send request to databse with calculated multiplier bc price doesn't get updated in db
    var uid = getfocusedUID();
    var grid = gridCaster(activeGrid);
    var listPrice = checkNull(grid.batchEditApi.GetCellValueByKey(uid, 'List_Price_Ea'));
    var newPrice = s.GetValue();

    var newMulti = newPrice / listPrice;
    if (isFinite(newMulti) === true) {
        console.log(newMulti);
        sendPricingUpdateToDB(uid, "Discount_Mutliplier", newMulti);
    }

}

function commOverride(s, e) {
    var commAmount = s.GetValue();
    var uid = getfocusedUID();

    $.ajax({
        type: "POST",
        url: ajaxVersioner("OnCommOverride"),
        data: JSON.stringify({

            UID: uid,
            value: commAmount

        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);


        },
        error: function (xhr, status, error) {
            console.log(xhr);

        }
    });

}

function sendPricingUpdateToDB(uid, field, multi) {
    //accpets changes and updates in backend bc field is not savable in grid
    $.ajax({
        type: "POST",
        url: ajaxVersioner("pricingUpdate"),
        data: JSON.stringify({
            fieldToUpdate: field,
            UID: uid,
            amount: multi

        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);


        },
        error: function (xhr, status, error) {
            console.log(xhr);

        }
    });


}

function onListPriceChange() {
    //update price and cost to show change


}


function quantityValidator(s, e) {
    var num = s.GetNumber();
    if (num < 1) {
        s.SetNumber(1);
    } 
}




function disablePricingForASMMain(s, e) {
    //if row is ASM, disable  purchase multiplier and cost
    var UID = getfocusedUID();
    var grid = gridCaster(getActiveGrid());
    var asmMain = grid.batchEditApi.GetCellValueByKey(UID, "Asm_Main")
    if (asmMain == true && e.cellInfo.column.fieldName == 'Cost2' || asmMain == true && e.cellInfo.column.fieldName == 'Purchase_Multiplier') {
        e.cancel = true;

    } else if (e.cellInfo.column.name == "Details") {
        e.cancel = true;
    }
}

function disableMoreDetails(e) {
    if (e.cellInfo.column.name == "Details" || e.cellInfo.column.name.includes("details_")) {
        e.cancel = true;
    }
}


function genericPriceCheck(s, e) {
    //gets UID and Model and sends to price check distributor
    var index = e.visibleIndex;
    var UID = grid1.GetRowKey(index);
    var model = grid1.batchEditApi.GetCellValue(index, 'Model');

    var mfgg = grid1.batchEditApi.GetCellValueByKey(UID, "Manufacturer");

    $.ajax({
        type: "POST",
        url: ajaxVersioner("priceCheck"),
        data: JSON.stringify({ mfg: mfgg, UID: UID, modelNo: model }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);  // to see the error message
            console.log(error);
        }
    });

    grid1.Refresh();
}

function GetEntityNumber() {
    //gets order or quote number from URL
    const urlParams = new URLSearchParams(window.location.search);
    const entityNumber = urlParams.get('id');
    return entityNumber;

    //return entityNumber;

}


function autoPO() {
    const orderNo = GetEntityNumber();
    $.ajax({
        type: "POST",
        url: ajaxVersioner("btnAutoPO_Click"),
        data: JSON.stringify({ orderNumber: orderNo }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg);
            if (msg.d == "Success") {
                grid1.Refresh();
                mfgPOGrid.Refresh();
            } else {
                throwError(msg.d);
            }

            


        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);  // to see the error message
            console.log(error);
            showError('something went wrong');
        }
    });

}



function refreshTags() {
    tabsTags.SetActiveTabIndex(0);
    gridTags.Refresh();
}


function createTemplate() {
    const rows = [
        ["TagText"]
    ];

    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach(function (rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "UploadTagTemplate.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); 
}

function ggunDeleteAll(s, e) {
    //unvoids all voided UIDs on entity
    const toDeleteUID = GetEntityNumber();
    $.ajax({
        type: "POST",
        url: ajaxVersioner("undeleteUID"),
        data: JSON.stringify({ UID: toDeleteUID, single: false }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg);

            grid1.Refresh();
            gridVoided.Refresh();


        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);  // to see the error message
            console.log(error);
        }
    });
}


function ggUnDelete(s, e) {
    const toDeleteUID = gridVoided.GetRowKey(gridVoided.focusedRowIndex);
    $.ajax({
        type: "POST",
        url: ajaxVersioner("undeleteUID"),
        data: JSON.stringify({ UID: toDeleteUID, single: true }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg);

            grid1.Refresh();
            gridVoided.Refresh();
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);  // to see the error message
            console.log(error);
        }
    });
    // refreshAllGrids();
}



function onPopupClose() {
    //applieseditChange
    var text;

    if (ajaxVersioner().includes('Order')) {
        text = document.getElementById('gabbyGridTabs_ggOrdersTwo_fullsizePop_fullSize').value;
    } else {
        text = document.getElementById('gabbyGridTabs_ggQuoteTwo_fullsizePop_fullSize').value;
    }
    var homeControl = senderName.GetText();
    document.getElementById(homeControl).innerHTML = text;
    fullsizepopup.Hide();

}


function onEnterHighlightButton() {


}

function disableOtherChoice(s, e, toDisableName) {
    //checks if checked or unckeched, enables or disabled partner appropriately
    if (s.GetChecked() == true) {
        if (toDisableName == 'chkApplyAllMfg') {
            chkApplyAllMfg.SetEnabled(false);
        } else {
            chkapplyAll.SetEnabled(false);
        }
    } else {
        if (toDisableName == 'chkApplyAllMfg') {
            chkApplyAllMfg.SetEnabled(true);
        } else {
            chkapplyAll.SetEnabled(true);
        }
    }
}

function onASMMainCheck(s, e) {
    if (s.GetCheckState() == "Checked") {
        grid1.PerformCallback("NewASM");
    } else {
        s.SetChecked(true);
        showError("Cannot uncheck assembly main, must delete");

    }
}


function ggshowFullSize(controlID) {
   
    var selectedText = document.getElementById(controlID).innerHTML;
    console.log(selectedText);
    fullsizepopup.Show();
    senderName.SetText(controlID);       
    if (ajaxVersioner().includes("Order")) {
        document.getElementById('gabbyGridTabs_ggOrdersTwo_fullsizePop_fullSize').value = selectedText;

        //sets cursor to the memo
        document.getElementById('gabbyGridTabs_ggOrdersTwo_fullsizePop_fullSize').focus();
    } else {
        document.getElementById('gabbyGridTabs_ggQuoteTwo_fullsizePop_fullSize').value = selectedText;


        //sets cursor to the memo
        document.getElementById('gabbyGridTabs_ggQuoteTwo_fullsizePop_fullSize').focus();

    }


}



function setDoubleClickListener(controlID) {
    //sets double clikc listener to launch popup 
    document.getElementById(controlID).addEventListener("dblclick", ggshowFullSize(controlID));
}


function closePop(s, e) {
    //closes enter
    popup.Hide();
}

function clickBtn() {
    //ajaxVersioner("MfgResponse"),
    if (ajaxVersioner().includes('Order')) {
        document.getElementById('gabbyGridTabs_ggOrdersTwo_fullsizePop_btnclosePopup').addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
            
                document.getElementById('gabbyGridTabs_GabbyGrid_orders_ASPxPopupControl1_btnclosePopup').click();
            }
        });
    } else {
        document.getElementById('gabbyGridTabs_ggQuoteTwo_fullsizePop_btnclosePopup').addEventListener("keydown", function (event) {
            if (event.keyCode === 13 && event.shiftKey == false) {
                console.log("Should be closing and applying popup");
                document.getElementById('gabbyGridTabs_ggQuoteTwo_fullsizePop_btnclosePopup').click();


            }
        });
    }

}

function ggpopup_Shown(s, e) {
    callbackPanel.PerformCallback(keyValue);
}

function addNewTagLine() {
    gridTags.AddNewRow();
}

function createSN(s, e) {
 
    //var uid = getfocusedUID();
    //var thisIteration = parseInt(e.visibleIndex) - 1;
    //var newSN = "SN:" + uid + thisIteration;
    //console.log(newSN);
    var index = gridTags.GetFocusedRowIndex();
    console.log(index);
    if (e.htmlEvent.keyCode == 13) {
        if (gridTags.InCallback()) {
            console.log("not creating a new tag");

        } else {
            console.log("the sender index is ", index);
            console.log("The number of rows in the table is ", gridTags.GetVisibleRowsOnPage());
            if (gridTags.GetVisibleRowsOnPage() == index + 1) {
                //if the row sending this command is the last row on the grid, add a new row
                gridTags.UpdateEdit();
                gridTags.PerformCallback("ADD");
                gridTags.SetFocusedRowIndex(index + 1);
                gridTags.batchEditApi.StartEdit(index + 1, 2);
            }


        }
    }
    //gridTags.batchEditApi.SetCellValue(index, "SERIAL_NUMBER", newSN, newSN, true);
   
}

function createSNSpan(s, e) {

    //var uid = getfocusedUID();
    //var thisIteration = parseInt(e.visibleIndex) - 1;
    //var newSN = "SN:" + uid + thisIteration;
    //console.log(newSN);
    var index = gridSpan.GetFocusedRowIndex();
    console.log(index);
    if (e.htmlEvent.keyCode == 13) {
        if (gridSpan.InCallback()) {
            console.log("not creating a new tag");

        } else {
            console.log("the sender index is ", index);
            console.log("The number of rows in the table is ", gridTags.GetVisibleRowsOnPage());
            if (gridSpan.GetVisibleRowsOnPage() == index + 1) {
                //if the row sending this command is the last row on the grid, add a new row
                gridSpan.UpdateEdit();
                gridSpan.PerformCallback("ADD");
                gridSpan.SetFocusedRowIndex(index + 1);
                gridSpan.batchEditApi.StartEdit(index + 1, 2);
            }


        }
    }
    //gridTags.batchEditApi.SetCellValue(index, "SERIAL_NUMBER", newSN, newSN, true);

}

function addBlankSelectableItem(s, e) {
    //on combo init, add first item that is blank
    s.InsertItem(0, null, null);

}