function launchTimeoutWarning() {
    console.log("timeout started");

    localStorage.setItem('keepAlive', 'logout' + Math.random());

    launchTimeoutPop();
}

function setPagesTimeout(timeNeeded) {

    //keep other pages engaged
    // localStorage.setItem('keepAlive', 'logout' + Math.random());
    console.log("adding counter");
    setTimeout(launchTimeoutWarning, timeNeeded);
}

function lsTest() {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}


function addBlankItem(s) {
    s.InsertItem(0, "", null);

}

window.addEventListener('storage', function(event) {
    // do what you want on logout-event
    if (event.key == 'logout-event') {
        console.log('console timeout event logged');
        window.location.href = "/SignedOut.aspx";
        //  sessionTimedOut();
        // $('#console').html('Received logout event! Insert logout script here.');
        // window.location = "logout.php";
    } else if (event.key == "keepAlive") {

        // console.log('console timeout cancelled event logged in');
        timeoutCallBack.PerformCallback();
        // keepSessionAlive('s', 'e');
    }
}, false);

function quoteSelect(s, e) {
    QuoteMainGV.PerformCallback();
    e.processOnServer = false; //Prevent Postback
}

function quoteDblClick(s, e) {
    // var index = e.visibleIndex;
    // var key = s.GetRowKey(index);
    // window.location.href = "Quote.aspx?id=" + key;

    s.StartEditRow(e.visibleIndex);

}

function hidegrid(s, e) {
    s.SetVisible(s.GetVisibleRowsOnPage() != 0);
}


function showFullSize(s, e) {
    var selectedText = s.GetText();
    fullSize.SetText(selectedText);
    popup.Show();
}

function showHideLoadingSpinner(holderDivName) {
    //checks if spinner is being shown, hides or shows 
    var spinnerStatus = document.getElementById(holderDivName).style.display;
    if (spinnerStatus == 'none') {
        document.getElementById(holderDivName).style.display = 'block';
    } else {
        document.getElementById(holderDivName).style.display = 'none'
    }
}

function showHide(divToActOn) {
    //if div is visible, hide it. If div is not visible, show it 
    var status = document.getElementById(divToActOn).style.display;
    console.log(status);
    if (status == 'none') {
        status = 'block';
    } else {
        status = 'none';
    }
}

function showHideGrid(divToActOn) {
    //if div is visible, hide it. If div is not visible, show it 
    var status = document.getElementById(divToActOn).style.display;

    console.log(status);
    if (status == 'none') {
        document.getElementById(divToActOn).style.display = 'grid';
    } else {
        document.getElementById(divToActOn).style.display = 'none';
    }
}

function closeScanner() {
    console.log('closed');
    const codeReader = new ZXing.BrowserBarcodeReader();
    document.getElementById('scanner-container').style.display = "none";

    codeReader.reset();
}


function newnavigate(page) {
    console.log(page);
    window.open('/' + page, "_blank");

    return false;
}

function closeModal(modalName) {
    document.getElementById(modalName).style.display = "none";
}




//var states = [];
//var dragRows = {};
//var droppedI = null;
//var removeIntent = false;
//function InitalizejQuery() {

//    $('.draggable').draggable({
//        helper: 'clone'
//    });

//    $('.gridholder').droppable({

//        hoverClass: "ui-state-hover",

//        drop: function (event, ui) {
//            var dropped = $(this),
//                droppedRow = dropped.closest('tr');

//            droppedI = droppedRow.index();
//            droppedCallback();
//        }

//    });

//    $('.divv').droppable({
//        drop: function (event, ui) {
//            console.log("Dropped out");
//            voidItem();
//        }
//    });



//}
//function droppedCallback() {
//    var senderString = item + "&EndRow:" + droppedI;
//    BOIgrid.PerformCallback(senderString);
//    item = null;
//    droppedI = null;

//}
//function voidItem() {
//    console.log("void: " + item);
//    var senderString = item + "&Voided";
//    console.log("senderString " + senderString);
//    BOIgrid.PerformCallback(senderString);
//    item = null;
//    droppedI = null;

//}

//function UpdatedGridViewButtonsState(grid) {
//    btMoveUp.SetEnabled(grid.cpbtMoveUp_Enabled);
//    btMoveDown.SetEnabled(grid.cpbtMoveDown_Enabled);
//}
//function gridView_Init(s, e) {
//    UpdatedGridViewButtonsState(s);
//}
//function gridView_EndCallback(s, e) {
//    NextAction();
//}
//function btMoveUp_Click(s, e) {
//    MakeAction("MOVEUP");
//}
//function btMoveDown_Click(s, e) {
//    MakeAction("MOVEDOWN");
//}
//function MakeAction(action) {
//    if (gridview.InCallback())
//        states.push(action)
//    else
//        gridview.PerformCallback(action)
//}
//function NextAction() {
//    if (states.length != 0) {
//        var currentState = states.shift();
//        if (currentState == "MOVEUP" && gridView.cpbtMoveUp_Enabled)
//            BOIgrid.PerformCallback(currentState);
//        else if (currentState == "MOVEDOWN" && gridView.cpbtMoveDown_Enabled)
//            BOIgrid.PerformCallback(currentState);
//        else if (currentState.indexOf("DRAGROW") != -1)
//            BOIgrid.PerformCallback(currentState);
//        else
//            NextAction();
//    }
//}
//var item = "failed to get row";

//function getClickedRow(s, e) {
//    var index = e.visibleIndex;
//    item = s.GetRowKey(index);
//}

//function workQEditOrders(s, e) {
//    //gets clicked row index, evaluates if user is the note author. if yes, then edit, else, no edit
//    var index = e.visibleIndex
//    var authorName = BOIgrid.GetRowValues(index, 'User_ID');
//    if (userNameCookie() == authorName) {
//        s.StartEditRow(index);
//    } else {
//        alert("Can't edit note made by another user");
//    }
//}


//function workQEdit(s, e) {
//    //gets clicked row index, evaluates if user is the note author. if yes, then edit, else, no edit
//    var index = e.visibleIndex
//    var authorName = s.GetRowValues(index, 'User_ID');
//    if (getUserName() == authorName) {
//        s.StartEditRow(index);
//    } else {
//        e.cancel = true;
//        const errorLabel = document.getElementById('Errormessage');
//        errorLabel.innerHTML = "Cannot edit another user's note, please start a new note."
//    }
//}

function getUserName() {
    const loggedInUserName = document.getElementById('lblName').innerHTML.split('-')[0];
    return loggedInUserName;
}


var val;

function mainMenuBClick(s, e) {
    var nm = e.item.name;
    if (nm == "back") {
        backBPress();
    }
}

function backBPress() {

    //window.location.href = "/QuoteSearch.aspx";
}

function getAccountID(s, e) {
    var tst = s.GetText();
    var title = prodcodeCS.GetSelectedItem().GetColumnText("Product_Title_Line");


}

function ExpandForEdit(s, e) {
    console.log(s);
    document.getElementById(s).style.height = "120%";
}

function ReturnToNormal(s, e) {
    document.getElementById(s).style.height = "100%";
}




function popup_CloseButtonClick(s, e) {
    e.popup.close();
}

function popup_launchButtonClick(s, e) {
    pcCS.showatposition
}




function onShowHideInfoClick(s, e) {

    var x = document.getElementById("AM2holder");


    if (x.style.display === "none") {
        x.style.display = "block";
        csShowHidelnk.SetVisible(false);
    } else {
        x.style.display = "none";
        csShowHidelnk.SetVisible(true);

    }

}


function onCheckbox(s, e) {
    var x = document.getElementById("addContact");

    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('existingContacts').style.display = "none";
        // csShowHideShip.SetVisible(false);
    } else {
        x.style.display = "none";
        document.getElementById('existingContacts').style.display = "block";
        //csShowHideShip.SetVisible(true);
    }
}

function onShowHideShipClick(s, e) {
    var x = document.getElementById("ShowHideShip");

    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('mainShipToDetails').style.display = "none";
        // csShowHideShip.SetVisible(false);
        //clearShipInputs();
    } else {
        x.style.display = "none";
        document.getElementById('mainShipToDetails').style.display = "block";
        //csShowHideShip.SetVisible(true);

    }
}

function clearShipInputs() {
    //clears ship to textbox for easy entry
    document.getElementById('txtShipToAddress1').innerHTML = ' ';
    document.getElementById('txtShipToAddress2').innerHTML = ' ';
    document.getElementById('txtShipToCity').innerHTML = ' ';
    document.getElementById('txtShipToState').innerHTML = ' ';
    document.getElementById('txtShipToZip').innerHTML = ' ';
}


//quote
//assembly
function onShowHideWorkQNotes(s, e) {
    var x = document.getElementById("workQHider");
    if (x.style.display === "none") {
        x.style.display = "block";
        s.SetText("Hide Work Queue Notes");
        // csShowHideShip.SetVisible(false);
    } else {
        x.style.display = "none";
        s.SetText("Show Work Queue Notes");
    }


}

//not used
function onShowHideShipClick2(s, e) {
    var x = document.getElementById("ShowHideShip");
    x.style.display = "none";
    csShowHideShip.SetVisible(true);
}

function custcombocall(s) {
    // alert(cscboCustomer.GetSelectedItem().value.toString());  
    cscboShipTo.PerformCallback(cscboCustomer.GetSelectedItem().value.toString());
}

//function onSelectedMFGChangedOrders(s, e) {
//    //  alert(s.GetValue());
//    BOIgrid.PerformCallback(s.GetValue().concat(" mfg"));
//    clearModel();

//}

//function onSelectedMFGChanged(s, e) {
//    //  alert(s.GetValue());
//    CSQIGV.PerformCallback(s.GetValue().concat(" mfg"));
//    clearModel();
//    console.lof(s.GetValue());
//    yokogawaChecker(s.GetValue());

//}

//function clearModelOrders() {
//    BOIgrid.GetEditor("Product Code").SetValue(" ");
//    BOIgrid.GetEditor("Product Description").SetValue(" ");
//    BOIgrid.GetEditor("List Price Ea").SetValue(" ");
//    BOIgrid.GetEditor("Product Title").SetValue(" ");
//}


//function clearModel() {
//    CSQIGV.GetEditor("Product_Code").SetValue(" ");
//    CSQIGV.GetEditor("Product_Description").SetValue(" ");
//    CSQIGV.GetEditor("List_Price_Ea").SetValue(" ");
//    CSQIGV.GetEditor("Product_Title").SetValue(" ");
//}

//function onSelectedModelNoChanged(s, e) {
//    var mod = s.GetValue();
//    var selIndex = s.GetSelectedIndex();
//    if (selIndex > -1) {
//        changeGridviewValues(mod);
//    } else {

//        CSQIGV.GetEditor("Product_Code").SetValue(" ");
//        CSQIGV.GetEditor("Product_Title").GetInputElement().readOnly = false;
//        CSQIGV.GetEditor("Product_Description").GetInputElement().readOnly = false;
//        CSQIGV.GetEditor("List_Price_Ea").GetInputElement().readOnly = false;
//        CSQIGV.GetEditor("Product_Code").GetInputElement().readOnly = false;
//    }


//}

//function removeProductCode() {
//    //if index didn't change but the text did, remove product code
//    CSQIGV.GetEditor("Product_Code").SetValue(" ");
//}

//    function onSelectedModelNoChangedOrders(s, e) {
//        var mod = s.GetValue();
//        var selIndex = s.GetSelectedIndex();
//        if (selIndex > -1) {
//            changeGridviewValues(mod);
//        } else {

//            clearModel();
//            CSQIGV.GetEditor("Product_Title").GetInputElement().readOnly = false;
//            CSQIGV.GetEditor("Product_Description").GetInputElement().readOnly = false;
//            CSQIGV.GetEditor("List_Price_Ea").GetInputElement().readOnly = false;
//            CSQIGV.GetEditor("Product_Code").GetInputElement().readOnly = false;
//        }

//        // modelUpdate();

//    }



//    function setUpInventoryTab(invDict) {
//        if (Object.keys(invDict).length > 0) {
//            cscboLocation.ClearItems();
//            for (var key in invDict) {
//                //Add locations and their enventory to item inventory tab
//                cscboLocation.AddItem(key, invDict[key]);


//            }
//            //select the first item 
//            //cscboLocation.SelectedIndex = 0;
//            cstxtReqQty.SetText(cscboQty.GetValue());

//        } else {
//            cscboLocation.SetText("Not in stock in any location");
//        }


//}
//function onQtyChange(s, e) {
//    //when quantity changes, updat the qty required on the inventory tab

//    const qty = s.GetText();
//    cstxtReqQty.SetText(cscboQty.GetValue());

//}



//    function onInventoryLocationChange() {
//        var invStrings = cscboLocation.GetValue().split(",");
//        console.log(invStrings);

//        cstxtTotalAvail.SetText(invStrings[0]);

//        cstxtPend.SetText(invStrings[1]);

//        cstxtReqQty.SetText(cscboQty.GetValue());
//        //avail qty , pending qty

//}

//function onMFGIndexChange(s, e) {
//    var mfg = s.GetValue();
//    onMFGChnage(mfg, true);
//}

//function onMFGChnage(mfg, clearModel) {
//    var editingIndex = CSQIGV.GetFocusedRowIndex(); // getting the editing row

//    const qUID = CSQIGV.GetRowKey(editingIndex);
//    $.ajax({
//        type: "POST",
//        url: ajaxVersioner("MfgResponse"),
//        data: JSON.stringify({ mfg: mfg, UID: qUID }),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (msg) {

//            msg = JSON.parse(msg.d);
//            console.log(msg);
//            for (let i = 0; i < msg.ModelNos.length; i++) {
//                csqiqvcboModel.AddItem(msg.ModelNos[i], msg.ModelNos[i]);
//            }




//        },
//        error: function (xhr, status, error) {
//            console.log(xhr);  // to see the error message
//            showError(xhr.responseText);
//        }
//    }
//    );
//    if (clearModel === true) {
//        //if a new mfg, clear the model
//        //if opening an existing line and refreshin gthe model ddl, keep existing model
//        CSQIGV.SetEditValue("Model", " ");
//    }
//     yokogawaChecker(mfg);
//}


//    function changeGridviewValues(mod) {
//        $.ajax({
//            type: "POST",
//            url: ajaxVersioner("ModelResponse"),
//            data: JSON.stringify({ modelNo: mod }),
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (msg) {

//                msg = JSON.parse(msg.d);
//                console.log(msg);
//                setUpInventoryTab(msg.selectedModelInventory);
//                CSQIGV.SetEditValue("Product_Code", msg.ProductCode);
//                CSQIGV.SetEditValue("List_Price_Ea", msg.ListPrice);
//                CSQIGV.SetEditValue("Product_Description" , msg.ProductDetail);
//                CSQIGV.SetEditValue("Product_Title", msg.ProductTitle);
//                CSQIGV.SetEditValue("Purchase_Multiplier", msg.PurchaseMulti);
//                CSQIGV.SetEditValue("Cost2", msg.NetCost);

//                // setUpInventoryTab(msg.selectedModelInventory);
//            },
//            error: function (xhr, status, error) {
//                console.log(xhr);  // to see the error message
//            }
//        }
//        )
//}




function onCBOChange(s, e) {
    unsaved = true;
    //    alert("CBO Changed");
}

function modelUpdateOrders() {
    BOIgrid.PerformCallback();
}

function modelUpdate() {
    CSQIGV.PerformCallback();
}



function hidegrid(s, e) {
    s.SetVisible(s.GetVisibleRowsOnPage() != 0);
}


function navigateAssembly(s, e) {
    var asmNo = workCell.GetFocusedRowIndex();
    window.location.href = '/Operations/Manufacturing.aspx?id=' + asmNo;
}

//quick quote
function PopToast(mssg) {
    var x = document.getElementById("snackbar");

    x.innerHTML = mssg;

    x.style.backgroundColor = 'red';
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 5000);
}


var accountID = null;

function setSQLParams(s, e) {
    cscboCustomer.PerformCallback(s.GetValue());
    accountID = s.GetValue();
}

function setCBOCustomer(s, e) {
    s.SetValue(accountID);
}



//document.addEventListener("keypress", function (event) {
//    // Number 13 is the "Enter" key on the keyboard
//    //don't do anything on enter
//    if (event.keyCode === 13) {
//        console.log("Should be preventing page refresh");
//        event.preventDefault();
//    }
//}
//);


function addEvent(event, id) {
    //if enter, enters the dorp down, doesn't refresh page
    focusedItem = document.getElementById(id);
    if (event.keyCode === 13) {
        event.preventDefault();
        focusedItem.submit();
    }
}

function allowEnter(s) {
    //Underscore I is for the input element of the drop down
    var id = s.GetMainElement().id + "_I";
    var focusedItem = document.getElementById(id);
    focusedItem.addEventListener("keyup", addEvent(event, id));
}

function onBlur_AllowEnter(s) {
    var id = s.GetMainElement().id + "_I";
    document.getElementById(id).removeEventListener("keyup", addEvent(event, id));
}

function QuoteUpdatePTo() {
    document.getElementById('lblAddress1').innerHTML = cstxtShipToAddress.GetText();
    document.getElementById('lblAddress2').innerHTML = cstxtShipToAddress2.GetText();
    document.getElementById('lblCity').innerHTML = cstxtShipToCity.GetText();
    document.getElementById('lblState').innerHTML = cstxtShipToState.GetText();
    document.getElementById('lblZip').innerHTML = cstxtShipToZip.GetValue();



    document.getElementById('ShowHideShip').style.display = 'none';
    document.getElementById('mainShipToDetails').style.display = 'block';

}




function showHide(divToActOn) {
    //if div is visible, hide it. If div is not visible, show it 
    if (document.getElementById(divToActOn).style.display == "none") {
        document.getElementById(divToActOn).style.display = "block";
    } else {
        document.getElementById(divToActOn).style.display = "none";
    }
    // csGVSalesNotes.PerformCallback();
}

function showHideLinkTextChange(s, divTOActOn) {
    showHide(divTOActOn);
    var currentText = s.GetText();
    if (currentText.includes("Show")) {
        var newText = currentText.replace("Show", "Hide");
        s.SetText(newText);
    } else {
        var newText = currentText.replace("Hide", "Show");
        s.SetText(newText);
    }
}

function quoteDblClick(s, e) {
    var index = e.visibleIndex;
    var key = s.GetRowKey(index);
    selectednote = key;
}




/*
 * ---------------------
 * GENERAL USE FUNCTIONS
 * ---------------------
 */

//toggles visibility of element
function toggleDisplay(element) {
    if (document.getElementById(element).style.display == "none") {
        document.getElementById(element).style.display = "block";
    } else {
        document.getElementById(element).style.display = "none";
    }
    return false;
}

//toggles visibility of element
//toggles visibility of link text
function togglePlusText(link, element) {
    //if div is visible, hide it. If div is not visible, show it 
    const linkText = document.getElementById(link).innerHTML;

    if (document.getElementById(element).style.display == "none") {
        document.getElementById(element).style.display = "block";
        document.getElementById(link).style.display = "none";
    } else {
        document.getElementById(element).style.display = "none";
        document.getElementById(link).style.display = "block";
    }
    return false;
}

//toggles visibility of element
//toggles show/hide in link text
function togglePlusShowHide(link, div) {
    //if div is visible, hide it. If div is not visible, show it 
    var linkText = document.getElementById(link).innerHTML;

    if (document.getElementById(div).style.display == "none") {
        document.getElementById(div).style.display = "grid";
        document.getElementById(link).innerHTML = linkText.replace("Show", "Hide");
    } else {
        document.getElementById(div).style.display = "none";
        // document.getElementById(link).innerHTML = linkText.replace("Hide", "Show");
    }
    return false;
}

function togglePlusShowHide2(link, element, element2) {
    //if div is visible, hide it. If div is not visible, show it 
    const linkText = document.getElementById(link).innerHTML;

    if (document.getElementById(element).style.display == "none") {
        document.getElementById(element).style.display = "grid";
        document.getElementById(link).innerHTML = linkText.replace("Show", "Hide");
    } else {
        document.getElementById(element).style.display = "none";
        document.getElementById(element2).style.display = "none";
        document.getElementById(link).innerHTML = linkText.replace("Hide", "Show");
    }
    return false;
}

//sets element display to none
function hideElement(element) {
    document.getElementById(element).style.display = "none";
    return false;
}

//sets element display to block
function showElement(element) {
    document.getElementById(element).style.display = "block";
    return false;
}

function openNav() {
    if (screen.width > 600) {
        document.getElementById("mySidebar").style.width = "20%";
        document.getElementById("navbar").style.marginLeft = "20%";
    } else {
        document.getElementById("mySidebar").style.width = "40%";
        document.getElementById("navbar").style.marginLeft = "40%";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
}


/*
 * ---------------------
 * ORDERS - QUOTES - ASSEMBLY SHARED FUNCTIONS
 * ---------------------
 */

//auto calculate acct manager / salesman percentage on input
let total;

function autoCalculatePercent() {

    let am1 = Math.abs(parseInt(cstxtAM1.GetText())) || 0;
    let am2 = Math.abs(parseInt(cstxtAM2.GetText())) || 0;
    let am3 = Math.abs(parseInt(cstxtAM3.GetText())) || 0;


    if (cscboAM1.GetSelectedIndex() > -1) {
        if (cscboAM2.GetSelectedIndex() > -1) {
            //three salesmen
            if (cscboAM3.GetSelectedIndex() > -1) {
                cstxtAM1.SetText(100 - cstxtAM2.GetText() - cstxtAM3.GetText());

                am1 = Math.abs(parseInt(cstxtAM1.GetText())) || 0;
                am2 = Math.abs(parseInt(cstxtAM2.GetText())) || 0;
                am3 = Math.abs(parseInt(cstxtAM3.GetText())) || 0;

                total = am1 + am2 + am3;
            } else {
                //two salesmen
                cstxtAM1.SetText(100 - cstxtAM2.GetText());

                am1 = Math.abs(parseInt(cstxtAM1.GetText())) || 0;
                am2 = Math.abs(parseInt(cstxtAM2.GetText())) || 0;
                am3 = Math.abs(parseInt(cstxtAM3.GetText())) || 0;

                total = am1 + am2 + am3;
            }
        } else {
            //one salesman
            cstxtAM1.SetText(100);

            am1 = Math.abs(parseInt(cstxtAM1.GetText())) || 0;
            am2 = Math.abs(parseInt(cstxtAM2.GetText())) || 0;
            am3 = Math.abs(parseInt(cstxtAM3.GetText())) || 0;

            total = am1 + am2 + am3;
        }
    }

    if (total < 0 || total > 100) {
        validatorDiv.style.display = "block";
        cstxtAM1.SetText(0);
        cstxtAM2.SetText(0);
        cstxtAM2.SetText(0);
    } else {
        validatorDiv.style.display = "none";
    }
}




/*
 * ---------------------
 * QUOTES - ASSEMBLY SHARED FUNCTIONS
 * ---------------------
 */

//assembly
function onShowHideInfoClick3(s, e) {
    var x = document.getElementById("AM3holder");

    x.style.display = "none";
    csshowhidelink2.SetVisible(true);
    csshowhidelink22.SetVisible(true);
}

//toggle am3holder
//hide cssshowhidelink2 & 22
function onShowHideInfoClick2(s, e) {

    var x = document.getElementById("AM3holder");

    if (x.style.display === "none") {
        x.style.display = "block";
        csshowhidelink2.SetVisible(false);
        csshowhidelink22.SetVisible(false);
    } else {
        x.style.display = "none";
        csshowhidelink2.SetVisible(true);
        csshowhidelink22.SetVisible(true);
    }
}

function launchQuoteReport() {
    //assembles the url to open the quote report in a new window
    const quoteNumber = new URLSearchParams(window.location.search).get('id');
    const pageName = "DocumentViewer.aspx";
    const parameters = "rType=Quote&p=" + quoteNumber;
    openPageInNewTab(pageName, parameters);
}

function openPageInNewTab(pageName, parameters) {
    //gets the current base url, ConfirmShipmentSelection a url to navigate to and opens in a new tab
    //parameters is the premade querystring for the page
    //pagename is the page we are naviating to 
    //https:baseurl/pagename?parameters
    const baseURL = window.location.origin;
    var newURL = baseURL + '/' + pageName + '?' + parameters;
    window.open(newURL);

}


function updateContact(s, e) {
    //takes selected item and populates the contact label
    var selectedContact = s.GetText();
    selectedContact = selectedContact.split(';')[0];
    var email = s.GetValue();
    lblAttention.SetText(selectedContact);
    txtAttention.SetText(selectedContact);
    lblContactEmail.SetText(email);
    txtEmail.SetText(email);
    togglePlusShowHide('lnkContact', 'existingContacts');
    cscboContact.PerformCallback();

}

function updateWithUserContact() {
    //takes user inputted contact and updates the contact label
    var contact = txtAttention.GetText();
    var email = txtEmail.GetText();
    lblAttention.SetText(contact);
    lblContactEmail.SetText(email);
    togglePlusShowHide('lnkEnterContact', 'addContact');
    togglePlusShowHide('lnkContact', 'existingContacts');
    if (chkAddContact.GetCheckState() == 'Checked') {
        if (contact != null && email != null) {

        } else {
            showError("Must enter Name and Email to add to Directory");


        }

    }

}

function addContactToDirectory(contact, email) {
    //adds the contact to the directory table
    const customerAccountID = cscboCustomer.GetValue()
    $.ajax({
        type: "POST",
        url: ajaxVersioner("AddContactToDirectory"),
        data: JSON.stringify({
            contactName: contact,
            emailAddress: email,
            accountID: customerAccountID
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            if (msg.d != "Added") {
                showError(xhr.responseText);
            }
        },
        error: function(xhr, status, error) {
            showError(xhr.responseText);

        }
    });



}

function hideComboWithoutOptions(s, e) {
    //if no items in drop down, do not show it 
    if (s.GetItemCount() > 0) {
        s.SetVisible(true);
    } else {
        s.SetVisible(false);
    }
}

function removeError() {
    setTimeout(function() {
        document.getElementById("Errormessage").innerText = null;
    }, 1500);
}

function preventCommentEdit(s, e) {
    //
    if (e.cellInfo.column.fieldName == "Note") {
        checkUserEditPermissions(s, e);
    }

}




function loadCustomers(s, e) {

    $.ajax({
        type: "POST",
        url: "Quote.aspx/setupCustomers",

        data: JSON.stringify({
            Hello: "Yes"
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            console.log(msg);
            addressDictionary = msg.d;
            for (item in addressDictionary) {
                s.AddItem(item, addressDictionary[item]);
            }
        },
        error: function(xhr, status, error) {
            showError(xhr.responseText);
        }
    });



}


function showContactEntry(divToShowHide) {
    //shows contact entry form
    //if div is not yet shown, clear out the existing text
    var x = document.getElementById(divToShowHide);

    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('existingContacts').style.display = "none";
        //clear textboxes for easy entry
        txtEmail.SetText(null);
        txtAttention.SetText(null);
        cslinkContact.SetVisible(false);
    } else {
        x.style.display = "none";
        document.getElementById('existingContacts').style.display = "block";
        cslinkContact.SetVisible(true);
        //csShowHideShip.SetVisible(true);
    }


}

function setDateNow(s, e) {
    //sets datet ime dropdown edit default value to now 
    var timeEditor = s.GetTimeEdit();
    timeEditor.SetValue(new Date());
}




function validateFreeTypedAddress() {
    //takes input from user's inputting a new ship to address, checks against UPS Address Validator API 
    //UPSAddressValidation(string address1, string address2, string state, string city, string zip)

    var STaddress1 = cstxtShipToAddress.GetText();
    var STAddress2 = cstxtShipToAddress2.GetText();
    var ct = cstxtShipToCity.GetText();
    var st = cstxtShipToState.GetText();
    var zipp = cstxtShipToZip.GetText();
    document.getElementById('btnSubmitShipTO').disabled = true;
    document.getElementById('btnSubmitShipTO').style.backgroundColor = "yellow";
    $.ajax({
        type: "POST",
        url: ajaxVersioner("UPSAddressValidation"),
        data: JSON.stringify({
            address1: STaddress1,
            address2: STAddress2,
            state: st,
            city: ct,
            zip: zipp
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msd) {
            msd = JSON.parse(msd.d);
            document.getElementById('btnSubmitShipTO').disabled = false;
            document.getElementById('btnSubmitShipTO').style.backgroundColor = "";
            //{"streetAddress1":"11555 Southfork Ave","streetAddress2":"Apt 3059","city":"Baton Rouge","state":"LA","zipCode":"70816"}
            //check response vs input, if different, launch address val modal
            if (msd.zipCode.toLowerCase() == zipp.toLowerCase() &&
                msd.state.toLowerCase() == st.toLowerCase() &&
                ct.toLowerCase() == msd.city &&
                STaddress1.toLowerCase() == msd.streetAddress1.toLowerCase() &&
                STaddress2.toLowerCase() == msd.streetAddress2.toLowerCase()) {
                console.log('Address valid!');
                QuoteUpdateShipTo();
            } else {
                //launch modal
                popupShipValidate.Show();
                document.getElementById('popupShipValidate_upsAddress1').innerHTML = msd.streetAddress1;
                document.getElementById('popupShipValidate_upsAddress2').innerHTML = msd.streetAddress2;
                document.getElementById('popupShipValidate_upsCity').innerHTML = msd.city;
                document.getElementById('popupShipValidate_upsState').innerHTML = msd.state;
                document.getElementById('popupShipValidate_upsZip').innerHTML = msd.zipCode;

                document.getElementById('popupShipValidate_ogAddress1').innerHTML = STaddress1;
                document.getElementById('popupShipValidate_ogAddress2').innerHTML = STAddress2;
                document.getElementById('popupShipValidate_ogCity').innerHTML = ct;
                document.getElementById('popupShipValidate_ogState').innerHTML = st;
                document.getElementById('popupShipValidate_ogZip').innerHTML = zipp;

                // document.getElementById('ShipValidatemodal').style.display = "block";
            }


        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText); // to see the error message
            showError(xhr.responseText);
        }
    });
}



function cancelClick(divToClose, divToOpen) {
    //on click, sets the display of the specified div to none
    document.getElementById(divToClose).style.display = "none";
    if (divToOpen != null) {
        document.getElementById(divToOpen).style.display = "block";
    }


}

function updateOffice(s, e) {
    //updates office drop down to ne in sync with the selected account manager
    console.log("Updating office");
    var office = s.GetValue();
    csCBOOffice.SetText(office);
}



function launchModal(divName) {
    //

    if (divName == 'Customermodal') {
        if (cscboCustomer.GetValue() != null) {
            csGVSalesNotes.PerformCallback();
            document.getElementById('lblCustNotesName').innerHTML = cscboCustomer.GetText();
        }

    }
    document.getElementById(divName).style.display = "block";
}

function ajaxVersioner(functionName) {
    //gets the name of the page we are on and reutrns it for ajax functions. Eliminates the need for multiple of the same ajax calls on different pages
    const currURL = window.location.href;
    if (currURL.includes('Quote')) {
        return "Quote.aspx/" + functionName;
    } else if (currURL.includes('Assembly')) {
        return "Assembly.aspx/" + functionName;
    } else if (currURL.includes('OrderItems')) {
        return "OrderItems.aspx/" + functionName;
    } else if (currURL.includes('Order')) {
        return "Orders.aspx/" + functionName;
    } else {
        var page = window.location.pathname.split('/');
        var index = page.length - 1;

        return page[index] + '/' + functionName;
    }
}




function showSaved() {
    document.getElementById('check').style.display = "block";
    //after 10 seconds, hide the saved checkmark 
    setTimeout(function() {
        document.getElementById('check').style.display = "none";
    }, 10000);
}

function popSaved() {

    var successDiv = document.getElementById('toast');
    successDiv.className = "show";
    setTimeout(function() {
        successDiv.className = successDiv.className.replace("show", "");
    }, 20000);

}

function saveOrderHeader() {
    var status = orderStatus.GetText();
    if (status.includes("OPEN") || status.includes('Open')) {
        // document.getElementById('HeadersveBtn').click();
        sendVals();
    } else {

        if (Object.keys(savedValues).length > 0) {
            document.getElementById('errorLabel').innerHTML = "Order Status is not Open, cannot save changes";
            document.getElementById('error').style.visibility = "visible";

        }



    }
}


function saveAddressAndHeader() {
    //saves address and clicks the save header button to update Quote
    if (ajaxVersioner("SaveAddress").includes("Order")) {
        var status = orderStatus.GetText();
        if (status.includes("OPEN") || status.includes('Open')) {
            // document.getElementById('HeadersveBtn').click();
            sendVals();
            document.getElementById('check').style.display = "block";
            const address1 = lblAddress1.GetText();
            const address2 = lblAddress2.GetText();
            const city = lblCity.GetText();
            const state = lblState.GetText();
            const zip = lblZip.GetText();
            const entityNumber = new URLSearchParams(window.location.search).get('id');

            $.ajax({
                type: "POST",
                url: ajaxVersioner("SaveAddress"),
                data: JSON.stringify({
                    a1: address1,
                    eNumber: entityNumber,
                    a2: address2,
                    cty: city,
                    st: state,
                    z: zip
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(msg) {

                    setTimeout(function() {
                        document.getElementById('check').style.display = "none";
                    }, 10000);


                },
                error: function(xhr, status, error) {
                    console.log(xhr);
                    showError(xhr.responseText);
                }
            });
        }
    } else {
        document.getElementById('HeadersveBtn').click();
        document.getElementById('check').style.display = "block";
        const address1 = lblAddress1.GetText();
        const address2 = lblAddress2.GetText();
        const city = lblCity.GetText();
        const state = lblState.GetText();
        const zip = lblZip.GetText();
        const entityNumber = new URLSearchParams(window.location.search).get('id');

        $.ajax({
            type: "POST",
            url: ajaxVersioner("SaveAddress"),
            data: JSON.stringify({
                a1: address1,
                eNumber: entityNumber,
                a2: address2,
                cty: city,
                st: state,
                z: zip
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {

                setTimeout(function() {
                    document.getElementById('check').style.display = "none";
                }, 10000);


            },
            error: function(xhr, status, error) {
                console.log(xhr);
                showError(xhr.responseText);
            }
        });
    }




}

function checkboxTOSQL(checkboxValue) {
    //accepts checkbox value, returns sanitized SQL representation

    if (checkboxValue == true) {
        return 1;
    } else {
        return 0;
    }

}


function setCalendarDateNow(s, e) {
    //sets datet ime dropdown edit default value to now 

    s.SetValue(new Date());
}



function copyItemSetButton(s, e) {
    //sets the button text to reflect the selected quote number
    var quoteNumber = s.GetText().split(';')[0];

    document.getElementById('btnCopyItems').innerText = "Copy selected items to " + quoteNumber;
}

function showButton() {
    //if an item is selected and the copy button is not shown then 
    const btn = document.getElementById('copyBtnHolder').style.display;
    if (btn == 'none') {
        showHide('copyBtnHolder');
    }

}

function makeCopyMenuItemAvailable() {
    //makes the copy item menu item selectable when a quote is selected
    if (document.getElementById('copyQuoteMenuItem').style.display == "none") {
        document.getElementById('copyQuoteMenuItem').style.display = "block";
    }

}

function Expand() {
    if (document.getElementById("fullMenu").style.width != '50px') {
        document.getElementById("fullMenu").style.width = "50px";
        document.getElementById("wholePageHolder").style.marginLeft = "50px";
        hideWords();
    } else {
        document.getElementById("fullMenu").style.width = "100px";
        document.getElementById("wholePageHolder").style.marginLeft = "100px";
        showWords();
    }


}

function ExpandOps() {
    if (document.getElementById("fullMenu").style.width != '75px') {
        document.getElementById("fullMenu").style.width = "75px";
        document.getElementById("contentGrid").style.marginLeft = "75px";
        document.getElementById("JobID").style.marginLeft = "75px";
        hideWords();
    } else {
        document.getElementById("fullMenu").style.width = "100px";
        document.getElementById("contentGrid").style.marginLeft = "100px";
        document.getElementById("JobID").style.marginLeft = "100px";
        showWords();
    }


}

function expandLookup() {

    if (document.getElementById("lookupMenu").style.display != "none") {

        document.getElementById("lookupMenu").style.display = "none";
        document.getElementById("wholePageHolder").style.marginLeft = "50px";

    } else {
        document.getElementById("lookupMenu").style.display = "block";
        document.getElementById("wholePageHolder").style.marginLeft = "200px";

    }

}

function expandDocs() {
    if (document.getElementById("previewMenu").style.display != "none") {

        document.getElementById("previewMenu").style.display = "none";
        document.getElementById("wholePageHolder").style.marginLeft = "50px";

    } else {
        document.getElementById("previewMenu").style.display = "block";
        document.getElementById("wholePageHolder").style.marginLeft = "200px";

    }


}

function expandPrintDocs() {
    if (document.getElementById("printMenu").style.display != "none") {

        document.getElementById("printMenu").style.display = "none";
        document.getElementById("wholePageHolder").style.marginLeft = "100px";

    } else {
        document.getElementById("printMenu").style.display = "block";
        document.getElementById("wholePageHolder").style.marginLeft = "200px";

    }


}

function expandClear() {

    document.getElementById("lookupMenu").style.display = "none";

    if (document.getElementById("clearMenu").style.display != "none") {

        document.getElementById("clearMenu").style.display = "none";
        document.getElementById("wholePageHolder").style.marginLeft = "50px";

    } else {
        document.getElementById("clearMenu").style.display = "block";
        document.getElementById("wholePageHolder").style.marginLeft = "200px";

    }


}

function expandMemoPopup() {

    document.getElementById("lookupMenu").style.display = "none";

    if (document.getElementById("memoHolder").style.display != "none") {

        document.getElementById("memoHolder").style.display = "none";
        document.getElementById("wholePageHolder").style.marginLeft = "50px";

    } else {
        document.getElementById("memoHolder").style.display = "block";
        document.getElementById("wholePageHolder").style.marginLeft = "200px";

    }


}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function showWords() {
    var all = document.getElementsByClassName('menuExpanded');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'block';
    }
}

function hideWords() {
    var all = document.getElementsByClassName('menuExpanded');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
}

function showError(errorText) {
    document.getElementById("snackbarlbl").innerHTML = errorText;
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 7000);
}




function move(percent) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var checks = document.getElementById("parentdiv1").children;
        var checkIndex = 1

        var elem = document.getElementById("barFilled");

        //for (int i = 1; i < checks.length; i++) {
        //    checks[i].style.left = "75%"
        //}
        console.log(percent);
        var width = 1;
        console.log(checkIndex);
        var check = checks[checkIndex];
        var left = parseInt(check.style.left.replace('%', ''));
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= percent) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";

                if (width >= left) {
                    check.className = "checkpointReached";
                    if (checkIndex + 1 < checks.length) {
                        checkIndex++;
                        check = checks[checkIndex];
                        left = parseInt(check.style.left.replace('%', ''));
                    }

                }
            }
        }
    }
}