//function setItems() {
//    //gets UID and the model or product code 
//    //sends to backend for saving item in Update Quote Item 
//    var editingIndex = CSQIGV.GetFocusedRowIndex();
//    var uuid = CSQIGV.GetRowKey(editingIndex);
//    var modelNo = CSQIGV.GetEditValue('Model');
//    var prodCode = CSQIGV.GetEditValue('Product_Code');
//    var inputCode;
//    if (prodCode.length > 1) {

//        inputCode = modelNo + ':' + prodCode;
//    } else {
//        inputCode = modelNo;
//    }


//        //(string model, string UID)
//    $.ajax({
//        type: "POST",
//        url: ajaxVersioner("modelUpdate"),
//        data: JSON.stringify({
//            model: inputCode,
//            UID: uuid
            

//        }),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (msg) {
//            console.log(msg.d);


//        },
//        error: function (xhr, status, error) {
//            console.log(xhr);

//        }
//    });



        function savePriceCheck(s, e) {
            saveForm.PerformCallback();
            priceCheckClick.PerformCallback();
            grid1.Refresh();
            callbackPanel.PerformCallback(keyValue);
            
        }


function setUIDText(text) {

}

function productCodeAdd(s, e) {
    console.log(e);
    var newProdCode = e.result;
    txtProdCode.SetText(newProdCode);
}


function showWhichGridTags() {
    //on tagfs, if preworkgrid length is 0 then is sub item ir white utem , do not need to select
    //if tag grid
    subItems.Refresh();
    gridTags.Refresh();
    var subItemsCount = subItems.GetVisibleRowsOnPage();
    var tagsCount = gridTags.GetVisibleRowsOnPage();
    console.log("sub item lines: ", subItemsCount);
    console.log("tag item count: ", tagsCount);
    if (subItemsCount > 0 && tagsCount > 0) {
        //item has already been selected, go right to tags
        tabsPreworkTags.GetTabByName("subItem").SetVisible(false);
        tabsPreworkTags.GetTabByName("tagsActions").SetVisible(true);
        importUID.SetText(null);
    } else if (subItemsCount > 0 && tagsCount == 0) {
        //show first page
        tabsPreworkTags.GetTabByName("subItem").SetVisible(true);
        tabsPreworkTags.GetTabByName("tagsActions").SetVisible(false);
    } else {
        //show tags page because no subitems to select from 
        tabsPreworkTags.GetTabByName("subItem").SetVisible(false);
        tabsPreworkTags.GetTabByName("tagsActions").SetVisible(true);
    }
    popTags.Show();
}

function showWhichGridSpan() {
    //on tagfs, if preworkgrid length is 0 then is sub item ir white utem , do not need to select
    //if tag grid
    subItems.Refresh();
    gridTags.Refresh();
    var subItemsCount = subItems.GetVisibleRowsOnPage();
    var tagsCount = gridSpan.GetVisibleRowsOnPage();
    console.log("sub item lines: ", subItemsCount);
    console.log("tag item count: ", tagsCount);
    if (subItemsCount > 0 && tagsCount > 0) {
        //item has already been selected, go right to tags
        tabsPreworkSpan.GetTabByName("subItem").SetVisible(false);
        tabsPreworkSpan.GetTabByName("spanActions").SetVisible(true);
        simportUID.SetText(null);
    } else if (subItemsCount > 0 && tagsCount == 0) {
        //show first page
        tabsPreworkSpan.GetTabByName("subItem").SetVisible(true);
        tabsPreworkSpan.GetTabByName("spanActions").SetVisible(false);
    } else {
        //show tags page because no subitems to select from 
        tabsPreworkSpan.GetTabByName("subItem").SetVisible(false);
        tabsPreworkSpan.GetTabByName("spanActions").SetVisible(true);
    }
    popSpan.Show();
}

function onSubItemSelectedSpan(s, e) {
    var index = e.visibleIndex;
    var key = s.keys[index];
    simportUID.SetText(key);
    tabsPreworkSpan.GetTabByName("subItem").SetVisible(false);
    tabsPreworkSpan.GetTabByName("spanActions").SetVisible(true);

}

function onSubItemSelected(s, e) {
    var index = e.visibleIndex;
    var key = s.keys[index];
    importUID.SetText(key);
    tabsPreworkTags.GetTabByName("subItem").SetVisible(false);
    tabsPreworkTags.GetTabByName("tagsActions").SetVisible(true);

}

function refreshInventory(s, e) {
    //does callback to bind data if tab is inventory

    if (e.tab.name == "ggInventoryTab") {
        gridInventory.PerformCallback();
    } else if (e.tab.name == "AutoPO") {
        e.cancel = true;
        document.getElementById('gabbyGridTabs_btnAutoPO_CD').click();
    }
}

function closeQuote() {
    //clicks button that clears session and closes window
    document.getElementById('btncloseQuote').click();
    //close window
    window.close();
}

function closeOrder() {
    //clicks button that clears session and closes window
    document.getElementById('btnCloseOrder').click();
    //close window
    window.close();
}

function cboCaster(gridName) {
    //accepts gridname, returns grid
    var grid = ASPxClientComboBox.Cast(gridName);
    return grid;
}


function distributeEmail(s, otherControls) {
    if (s.GetSelectedIndex() > -1) {
        var email = s.GetSelectedItem().GetColumnText(1);

        var emailTxt = cboCaster(otherControls);
        emailTxt.SetText(email);
        savedValues[otherControls] = email;
    }
    
}

function launchImportPop() {
    copyItemsPop.Show();
}


function donwloadQuoteReport() {
    document.getElementById('btnDonwloadQuote').click();
}

function importPopClose() {
    //when import is closed, refresh the items grid 
    grid1.Refresh();
}

//}
var custShown = false;
function custNoteshowHide(s, e) {
   
    var div = document.getElementById('custNoteHolder');
if (div.style.display == "none") {
    div.style.display = "block";
    if (custShown == false) {
       // document.getElementById('showCustomerNotes').click();
        custShown = true;
    }
    
    s.SetText("Hide Customer Notes");
} else {
    div.style.display = "none";
    s.SetText("Show Customer Notes");
}
}

var workQShown = false;
function workQNoteshowHide(s, e) {

    var div = document.getElementById('workQNotesHider');
    if (div.style.display == "none") {
        div.style.display = "block";
        if (workQShown == false) {
            //document.getElementById('btnLoadWorkQ').click();
            workQShown = true;
        }
        
        s.SetText("Hide WorkQNotes");
    } else {
        div.style.display = "none";
        s.SetText("Show WorkQNotes");
    }
}


function ConfirmShipmentSelection() {
    //button is clicked when user is done selecting the UIDs
    //will show column to ask to confirm quantity
    //shows confirm button
    hideUnselectedRows();

    //show next button
    document.getElementById('confirmShip').style.display = "block";

    ///does callback
    shipmentsGrid.PerformCallback('hideCols');


    document.getElementById('selectShip').style.display = "none";


}

function hideUnselectedRows() {
    //loops through grid, if key not in list of selectedUIDs, hides the row
    var keys = shipmentsGrid.GetSelectedKeysOnPage();

  //  var filterCondition = "[Unique ID] in " + keys;
   // shipmentsGrid.ApplyFilter(filterCondition);
}

function doShipmentDetails() {
    //hides selection grid, shows shipment information panel

   
    //swap out grid for shipment input
    document.getElementById("shipmentUpdates").style.display = "flex";
    document.getElementById("shipGridHolder").style.display = "none";

    //swap out button visibility
    document.getElementById("confirmShip").style.display = "none";
    document.getElementById("createShip").style.display = "block";

}

function sendShipment() {
    shipmentsGrid.SelectRows();
    shipmentsGrid.GetSelectedFieldValues("Unique ID; Quantity;", createShipment);
}

function shipSpinEdit(s, e) {
    console.log(s);
    
    currentVisibleIndex = e.visibleIndex;
    shipmentsGrid.batchEditApi.SetCellValue(currentVisibleIndex, 'shipQty', s.number, s.lastValue, true);
    
}

function createShipment(dictionaryOfUIDandQty) {
    console.log(dictionaryOfUIDandQty);
    var cost = txtCost.GetText();
    var SalesOrderNo = txtSONo.GetText();
    var shipmntDate = shipDate.GetDate();
    var shipmentDesc = txtDescription.GetText();
    var tracking = txtTrackingNumbers.GetText();
    var shipType = cboShipType.GetText();

    $.ajax({
        type: "POST",
        url: ajaxVersioner("CreateShipment"),
        data: JSON.stringify({
            trackingNumbers: tracking,
            Cost: cost,
            UIDandQtyDict: dictionaryOfUIDandQty,
            SoNo: SalesOrderNo,
            shipmentDate: shipmntDate,
            description: shipmentDesc,
           shipmentType : shipType


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


function enterContact() {
    var user = getUserName();
    var firstName = txtFirstName.GetText();
    var lastName = txtLastName.GetText();
    var email = txtEmailContact.GetText();
    var jobTitle = txtJobTitle.GetText();
    var workPhone = txtworkPhone.GetText();
    var cellPhone = txtCellPhone.GetText();
    var aID = cscboCustomer.GetValue();
    $.ajax({
        type: "POST",
        url: ajaxVersioner("AddContactToDirectory"),
        data: JSON.stringify({
            fName: firstName,
            lName: lastName,
            emailW: email,
            jobT: jobTitle,
            wPhone: workPhone,
            cPhone: cellPhone, 
            accountID: aID, 
            userName: user


        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);
            
            if (msg.d.includes('E: Email address on this customer already under:') && msg.d != null) {
                responseContact.SetText("Contact Already Exists");
                responseContact.SetVisible(true);
            } else {
                responseContact.SetVisible(false);
                cscboContact1.SetText(firstName + ' ' + lastName);
                contactDetailsCard1_txtemail1.SetText(email);
                popNewCustomer.Hide();

                
            }
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            showError(xhr.responseText);

        }
    });




    //AddContactToDirectory
}


function navigateCustLookup() {
    window.open("/Lookup/CustomerLookup.aspx", '_blank');
}

function navigateConfig() {
    window.open("/Configurator/Configurator.aspx");
}




function hideAccountingTabAndMenu(s, e) {
    //if accounting label is 1 then user is in accounting, and show the accounting grid tab
    //if 0, hide accounting controls 
    var isAccounting = document.getElementById('lblAccounting').innerText;
    if (isAccounting == '1') {
        var AccountingLayoutGroup = CSQIGV.GetEditFormLayoutItemOrGroup("AccountingTab");
       AccountingLayoutGroup.SetVisible(true);
    }
}


//function refreshInventoryTab(model) {
//    ///accepts model number from parent function, gets inventory data from backend, populates tab with inventory 
    
//        $.ajax({
//            type: "POST",
//            url: ajaxVersioner("InventoryRefresh"),
//            data: JSON.stringify({ modelNo: model }),
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (msg) {

//                msg = JSON.parse(msg.d);
//                console.log(msg);
//                setUpInventoryTab(msg);

                
//            },
//            error: function (xhr, status, error) {
//                console.log(xhr);  // to see the error message
//            }
//        }
//        )
    
//}


function revisionUpdated() {
    ///accepts model number from parent function, gets inventory data from backend, populates tab with inventory 
    var thisOrder = new URLSearchParams(window.location.search).get('id');
    $.ajax({
        type: "POST",
        url: ajaxVersioner("revisionIncreased"),
        data: JSON.stringify({ quoteNo: thisOrder }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            console.log(today);
            document.getElementById('txtDate').innerHTML = today;

        },
        error: function (xhr, status, error) {
            showError(xhr.responseText);
        }
    }
    )

}

function updatePOMfg(s, e) {
    ///accepts mfg and PO UID and updates line
    //triggers after mfg selected
    // updateMFGPO(string mfg, string UID)
    var index = mfgPOGrid.GetFocusedRowIndex();
    var thisPO = mfgPOGrid.GetRowKey(index);
    var selectedMFG = s.GetValue();
    console.log(JSON.stringify({ mfg: selectedMFG, UID: thisPO }));
    $.ajax({
        type: "POST",
        url: ajaxVersioner("updateMFGPO"),
        data: JSON.stringify({ mfg: selectedMFG, UID: thisPO }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            mfgPOGrid.UpdateEdit();
            mfgPOGrid.Refresh();

        },
        error: function (xhr, status, error) {
            showError(xhr.responseText);
        }
    }
    )

}

function clickQuoteDone() {
    console.log("should be clicking done");
    document.getElementById('btnDoneQuote').click();
}


var currentCollectAccounts = {}


function CustomerChanged(s, e) {

    console.log("selected index is", s.GetSelectedIndex());
    const quoteNumber = new URLSearchParams(window.location.search).get('id');

    if (s.GetSelectedIndex() > -1) {

    
    var accountID = s.GetValue();
    //refresh customer notes
    custNotesUpdate.PerformCallback();
    console.log("AccountID is ", s);
    $.ajax({
        type: "POST",
        url: ajaxVersioner("CustomerChanged"),
        data: JSON.stringify({ aID: accountID, qNo: quoteNumber }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            msg = JSON.parse(msg.d);
           
            currentCollectAccounts['UPS'] = msg.collectAccount;
            currentCollectAccounts['FEDEX'] = msg.fedexCollect;
            cboSalesman1.SetValue(msg.AccountManager);
            //document.getElementById('cboSalesman1').innerHTML = msg.AccountManager;
            txtIntocomLoc.SetValue(msg.INCOTERMS_LOC);
            cstxtAM1.SetText(100);
            document.getElementById('txtIntocomms').value = msg.INCOTERMS;
            cboTerms.SetValue(msg.Terms);
            lblAddress1.SetText(msg.ShipToAddress1);
            lblAddress2.SetText(msg.ShipToAddress2);
            lblCity.SetText(msg.ShipToCity);
            lblState.SetText(msg.ShipToState);
            lblZip.SetText(msg.ShipToZip);
            csCBOOffice.SetText(msg.Office);

            if (ajaxVersioner("CustomerChanged").includes('Order')) {

                contactDetailsCard1_txtemail1.SetText(null);
                contactDetailsCard2_txtEmail2.SetText(null);
                contactDetailsCard3_txtEmail3.SetText(null);
                cscsboContact2.SetSelectedIndex(-1);
                cscsboContact3.SetSelectedIndex(-1);
                cscsboContact1.SetSelectedIndex(-1);
                lblBillToAddress1.SetText(msg.BillToAddress1);
                lblBillToAddress2.SetText(msg.BillToAddress2);
                lblBillToCity.SetText(msg.BillToCity);
                lblBillToState.SetText(msg.BillToState);
                lblBillToZip.SetText(msg.BillToZip);
                txtCollectAccount.SetText(msg.collectAccount);


            } else {
                cscboContact1.SetSelectedIndex(-1);
                txtContactEmail1.SetText(null);
               // lblAttention.SetText("");
                //lblContactEmail.SetText("");
            }


            if (msg.CreditHold == true) {

                document.getElementById('customerToolTip').style.display = "block";
                document.getElementById('customerCreditHold').innerHTML = "Customer is on credit hold";
                throwError("Customer is on credit hold");
                
            } else {
                document.getElementById('customerToolTip').style.display = "none";
            }

            cstxtAM1.SetText(100);

            if (msg.shipToAddresses.length > 0) {
                //if items exist to populate drop down, populate it
                populateShipToDDL(msg.shipToAddresses);

            } else {
                //else hide the drop down 
                cscboShipTo.SetVisible(false);
                lblAltShipTo.SetVisible(false);
            }
            if (Object.keys(msg.DirectoryDDL).length > 0) {
                if (ajaxVersioner("CustomerChanged").includes('Order')) {
                    populateDirectoryDDLMulti(msg.DirectoryDDL)
                } else {
                    populateDirectoryDDL(msg.DirectoryDDL);
                }

            } else {
                //if (ajaxVersioner("CustomerChanged").includes('Quote')) {
                //    cscboContact.SetVisible(false);
                //}

            }

            cstxtAM1.SetText(100);
        },
        error: function (xhr, status, error) {
            showError(xhr.responseText);  // to see the error message
            csCBOOffice.SetText(" ");
            txtIntocomLoc.SetValue(" ");
            document.getElementById('txtIntocomms').value = " ";
            lblAddress1.SetText("");
            lblAddress2.SetText("");
            lblCity.SetText("");
            lblState.SetText("");
            lblZip.SetText("");
        }
    });

    }
}



function removeBubble() {
    document.getElementById("error").remove();
}


function throwError(errorText) {
    if (errorText.includes(':')) {
        errorText = errorText.split('E:')[1];
    }

    var element = document.createElement('div');
    element.setAttribute("id", "error");
    element.innerHTML = errorText;
    element.addEventListener("click", removeBubble);
    element.title = "Click to dismiss";


    element.style.visibility = "visible";

    document.body.appendChild(element);

}


function shipToChanged(s, e) {

    // csGVSalesNotes.PerformCallback();
    const quoteNumber = new URLSearchParams(window.location.search).get('id');
    var STID = s.GetValue();
    console.log(STID);
    $.ajax({
        type: "POST",
        url: ajaxVersioner('ShipToChanged'), //"Quote.aspx/CustomerChanged",
        data: JSON.stringify({ STid: STID, qNo: quoteNumber }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {


        }, error(xhr) {
            showError(xhr.responseText);}
    });
}


function populateAddress(s, e) {
    //updates the address labels when an alternate ship to address is selected
    //selected te4xt format is concat(a.[Ship to Address 1], ', ', a.[Ship to Address 2], ', ',  a.[Ship to City], ', ',  a.[Ship to State], ', ',  a.[Ship to Zip Code])
    var AddressLine = s.GetSelectedItem();//an array of items betwen commas
    console.log(AddressLine)
    lblAddress1.SetText(AddressLine.GetColumnText(1));
    lblAddress2.SetText(AddressLine.GetColumnText(2));
    lblCity.SetText(AddressLine.GetColumnText(3));
    lblState.SetText(AddressLine.GetColumnText(4));
    lblZip.SetText(AddressLine.GetColumnText(5));
    shipToChanged(s, e);
    //savedValues['lblAddress1'] = AddressLine.GetColumnText(1);
    //savedValues['lblAddress2'] = AddressLine.GetColumnText(2);
    //savedValues['lblCity'] = AddressLine.GetColumnText(3);
    //savedValues['lblState'] = AddressLine.GetColumnText(4);
    //savedValues['lblZip'] = AddressLine.GetColumnText(5);
    
    
    //writes to db the ST address 
    //shipToChanged(s, e);
   
  

}

function populateDirectoryDDLMulti(directoryDict) {
    cscsboContact1.ClearItems();
    cscsboContact2.ClearItems();
    cscsboContact3.ClearItems();
    // cscboContact.SetVisible(true);
    //for each item in directory dict, add email address as key, name and email as visible text
    for (var key in directoryDict) {
        cscsboContact1.AddItem([directoryDict[key], key], key);
        cscsboContact2.AddItem([directoryDict[key], key], key);
        cscsboContact3.AddItem([directoryDict[key], key], key);
    }
}

function clickFlipToOrder() {
    document.getElementById('QuoteMenu_flipToOrder').click();
}


function populateDirectoryDDL(directoryDict) {
    cscboContact1.ClearItems();
    //cscboContact.SetVisible(true);
    //for each item in directory dict, add email address as key, name and email as visible text

    for (var key in directoryDict) {
     
        cscboContact1.AddItem([directoryDict[key], key], key);
    }
}

function populateShipToDDL(listOfShipToAddresses) {
    console.log(listOfShipToAddresses);
    cscboShipTo.ClearItems();
    cscboShipTo.SetVisible(true);
    lblAltShipTo.SetVisible(true);
    //for each item in ship to dict, add ST_ID as key, address as visible text
    for (var i = 0; i < listOfShipToAddresses.length; i++) {
        var key = listOfShipToAddresses[i];
        //key  is a dictionary 
        cscboShipTo.AddItem([key['ShipToName'], key['ShipToAddress1'], key['ShipToAddress2'], key['ShipToCity'], key['ShipToState'], key['ShipToZip']], key['ST_ID']);
    }
}

function addToContactDropDown() {
    //takes input from free-hand entering contact, adds to drop down for data table update
    //selects newly inserted item
    var name = txtAttention.GetText();
    var email = txtEmail.GetText();
    cscboContact1.AddItem([name, email], email);
    //finding the newest item
    var item = cscboContact1.FindItemByValue(email);
    //setting the newest item
    cscboContact1.SetSelectedItem(item);
    //making sure it's visible
    cscboContact1.SetVisible(true);
    //flippping back to front side 
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



//function setUpInventoryTab(invDict) {
//    //accepts dictionary with 
//    if (Object.keys(invDict).length > 0) {
//        cscboLocation.ClearItems();
//        for (var key in invDict) {
//            //Add locations and their enventory to item inventory tab
//            cscboLocation.AddItem(key, invDict[key]);


//        }
//        //select the first item 
//        cscboLocation.SetSelectedIndex(0);
//        //cscboLocation.SelectedIndex = 0;
//        cstxtReqQty.SetText(cscboQty.GetValue());

//    } else {
//        cscboLocation.SetText("Not in stock in any location");
//    }


//}

function checkPOStatus(s, e) {
    ///on lost focus, checks the text in the PO textbox to make sure the PO is not referenced on another order

    var thisPO = s.GetText();
    if (thisPO.length > 0) {
        var thisOrder = new URLSearchParams(window.location.search).get('id');
        $.ajax({
            type: "POST",
            url: ajaxVersioner("POStatus"),
            data: JSON.stringify({ PO: thisPO, orderNo: thisOrder }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                console.log(msg);
                
                
                if (msg.d != "None") {
                    //if already used, show alert 
                    document.getElementById('poToolTip').style.display = "block";
                    document.getElementById('POText').innerHTML = msg.d;
                } else {
                    document.getElementById('poToolTip').style.display = "none";
                    document.getElementById('POText').innerHTML = "";

                }



            },
            error: function (xhr, status, error) {
                console.log(xhr);  // to see the error message
                showError(xhr.responseText);
            }
        }
        )
    }
   
}


///////
//CONTACTS
///////

function addToDirectory() {
    ///adds new contact data to diretory table. After added, rebind the contact drop downs

    //
    //public static string addContact(string accountID, string UserName, string FirstName, string LastName, string Email, string title, string workphone, string cellPhone)
    
    var thisAccountID = cscboCustomer.GetValue();

    if (thisAccountID.length > 0) {
        $.ajax({
            type: "POST",
            url: ajaxVersioner("addContact"),
            data: JSON.stringify({
                accountID: thisAccountID,
                UserName: getUserName(),
                FirstName: txtFirstName.GetText(),
                LastName: txtLastName.GetText(),
                Email: txtEmailContact.GetText(),
                title: txtJobTitle.GetText(),
                workphone: txtworkPhone.GetText(),
                cellPhone: txtCellPhone.GetText()
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                console.log(msg);

                cscsboContact1.PerformCallback();
                
                popNewCustomer.Hide();
            },
            error: function (xhr, status, error) {
                console.log(xhr);  // to see the error message
            }
        }
        )



    }
   



}
function downloadOA() {
    document.getElementById("OrderMenu_btnDownloadOrderAck").click();
}

function downloadOrderEntry() {
    document.getElementById("OrderMenu_btnDownloadOrderEntry").click();
}

function downloadQuote() {
    document.getElementById('btnDonwloadQuote').click();
}




function resetContactLabel(controlName) {
    //if label is blank, add clickable labels
    if (controlName.GetText().length == 0) {
        controlName.SetText("Click to Edit");
    }

}



function editContact(s, editorToDisplay) {
    //on label click, hides label and shows the corresponding label editor
    //can be used on blur from the editor
    var originText = s.GetText();

    var editor = ASPxClientControl.GetControlCollection().GetByName(editorToDisplay);
    editor.SetVisible(true);
    //console.log(originText);
    //if (originText != "Click to Edit") {
    //    editor.SetText(originText);
    //} else if (originText.length == 0) {
    //    console.log("no length");
    //    editor.SetText("Click to Edit");
    //}
    s.SetVisible(false);
}

function applyContactEdit(s, editorToDisplay, emailValue) {
    //takes user input and applies it to the label it is editing, before hiding editor and showing edited label
    var controlName = s.name;
    
    var editor = ASPxClientControl.GetControlCollection().GetByName(editorToDisplay);
    var text = s.GetText();
    var emailLabel = ASPxClientControl.GetControlCollection().GetByName(emailValue);
    if (controlName.includes('cbo')) {
        //if a dropdown, then a contact with name text and email value, to distribute to both contact labels

        if (s.GetSelectedIndex() > -1) {
            //if contact has been chosen then apply it
            
            var value = s.GetValue();
            //get email textbox
            var emailtext = ASPxClientControl.GetControlCollection().GetByName(emailValue.replace('lbl', 'txt'));
            ///set text of name, email labels and textbox
            editor.SetText(text);
            emailLabel.SetText(value);
            emailtext.SetText(value);
        } else {
            
            //set name label to be clickable
           editor.SetText("Click to Edit");
            //set email as clickable
            emailLabel.SetText("Click to Edit");
        }




    } else {
        //else, is a textbox and only updating the email label
        if (text && !text.trim()) {
         
            editor.SetText(text);
        } else {
            
            editor.SetText("Click to Edit");
        }
     

    }
    //swap out of edit mode
    editContact(s, editorToDisplay);
}


function saveContacts(orderNumber) {
    //takes contact label values and passes to serverside to save to order

    //string Contact1, string Contact2, string Contact3, string ContactEmail1, string ContactEmail2, string ContactEmail3, string orderNum
    //$.ajax({
    //    type: "POST",
    //    url: ajaxVersioner("saveContacts"),
    //    data: JSON.stringify({
    //        Contact1: contactCleaner(lblContact1.GetText()),
    //            Contact2: contactCleaner(lblContact2.GetText()),
    //                Contact3: contactCleaner(lblContact3.GetText()),
    //        ContactEmail1: contactCleaner(lblContactEmail1.GetText()),
    //        ContactEmail2: contactCleaner(lblContactEmail2.GetText()),
    //        ContactEmail3: contactCleaner(lblContactEmail3.GetText()),
    //        orderNum: orderNumber
    //    }),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (msg) {
    //        console.log(msg);

    //        cscsboContact1.PerformCallback();
    //        resetContactLabel(lblContact1);
    //        resetContactLabel(lblContact2);
    //        resetContactLabel(lblContact3);
    //        popNewCustomer.Hide();
    //    },
    //    error: function (xhr, status, error) {
    //        console.log(xhr);  // to see the error message
    //        showError(xhr.responseText);
    //    }
    //}
    //)

}

function contactCleaner(string) {
    if (string.includes('Click')) {
        return null;
    } else {
        return string;
    }
}

///Addresses

function cancelAddressInput(divToClose, divToOpen) {
    cancelClick(divToClose, divToOpen);
    //collapses div, makes sure the old address is still in textboxes for sql udpdate
    cstxtShipToAddress.SetText(document.getElementById('lblAddress1').innerHTML);
    cstxtShipToAddress2.SetText(document.getElementById('lblAddress2').innerHTML);
    cstxtShipToCity.SetText(document.getElementById('lblCity').innerHTML);
    cstxtShipToState.SetText(document.getElementById('lblState').innerHTML);
    cstxtShipToZip.SetText(document.getElementById('lblZip').innerHTML);
   
}

function applyUPSAddressValidation() {
    //applies the validated address to the address label and textboxes for upload
    const upsAddress1 = document.getElementById('popupShipValidate_upsAddress1').innerHTML;
    const upsAddress2 = document.getElementById('popupShipValidate_upsAddress2').innerHTML;
    const upsCity = document.getElementById('popupShipValidate_upsCity').innerHTML;
    const upsState = document.getElementById('popupShipValidate_upsState').innerHTML;
    const upsZip = document.getElementById('popupShipValidate_upsZip').innerHTML;



    //update the labels
    lblAddress1.SetText(upsAddress1);
    lblAddress2.SetText(upsAddress2);
    lblCity.SetText(upsCity);
    lblState.SetText(upsState);
    lblZip.SetText(upsZip);

    //reset the drop downs
    document.getElementById('ShowHideShip').style.display = 'none';
    document.getElementById('mainShipToDetails').style.display = 'block';

    //close modal
    popupShipValidate.Hide();


}


/*
 * ---------------------
 * Pricing line item alogrithms
    * price, cost, commm
    * ---------------------
 */



//function calculatePrice(listPrice, multiplier) {
//    //calculates the price and updates the Price
//    var price = parseFloat(listPrice) * parseFloat(multiplier);
//    return price;

//}

//function checkNull(inputValue) {
//    //checks if value is null, if it is, returns a 0 to work with 
//    if (!inputValue)
//    ///Which will check for empty strings (""), null, undefined, false and the numbers 0 and NaN
//    {
//        return 0;
//    } else {
//        return inputValue;
//    }
//}

//function checkNullDiscount(inputValue) {
//    //checks if value is null, if it is, returns a 0 to work with 
//    if (!inputValue)
//    ///Which will check for empty strings (""), null, undefined, false and the numbers 0 and NaN
//    {
//        return 1;
//    } else {
//        return inputValue;
//    }
//}

//function whenListPriceIsUpdated() {
//    //fired when enter is hit on list price
//    const listPriceEntered = checkNull(CSQIGV.GetEditValue('List_Price_Ea'));
//    const discountMultiplier = checkNullDiscount(CSQIGV.GetEditValue('Discount_Multiplier'));
//    //update Price
//    var newPrice = calculatePrice(listPriceEntered, discountMultiplier).toFixed(2);
//    CSQIGV.SetEditValue("Price2", newPrice);

//    //update Comm
//    whenCommUpdated();
//    //update Cost
//    whenCostUpdated();

//}

//function whenPriceOverride() {
//    //when user enters price over calculated price 
//    const listPriceEntered = checkNull(CSQIGV.GetEditValue('List_Price_Ea'));
//    const discountMultiplier = checkNull(CSQIGV.GetEditValue('Discount_Multiplier'));

//    const oldPrice = calculatePrice(listPriceEntered, discountMultiplier);
//    const newPrice = checkNull(CSQIGV.GetEditValue('Price2'));
//    console.log("Old price", oldPrice);
//    console.log("new price", newPrice);
//    if (newPrice != oldPrice) {
       

//        ///if the discount multiplior is 0, then we need to calculate it 
//        var newMulti = newPrice / listPriceEntered;
//        console.log(newMulti);
//        CSQIGV.SetEditValue('Discount_Multiplier', newMulti.toFixed(3));
      

//    }



//}

//function whenCostOverride() {
//    //when user enters a cost over the value, 
//    const listPriceEntered = checkNull(CSQIGV.GetEditValue('List_Price_Ea'));
//    const purchaseMultiplier = checkNull(CSQIGV.GetEditValue('Purchase_Multiplier'));;
//    const oldCost = calculatePrice(listPriceEntered, purchaseMultiplier);
//    const newCost = checkNull(CSQIGV.GetEditValue('Cost2'));
//    if (oldCost != newCost) {
//        console.log("old cost and new cost are not the same");
//        var newDMultiplier = newCost / listPriceEntered;
//        CSQIGV.SetEditValue('Purchase_Multiplier', newDMultiplier.toFixed(3));
//    }

//}

//function whenCostUpdated() {
//    //fired when enter is hit on comm
//    const listPriceEntered = checkNull(CSQIGV.GetEditValue('List_Price_Ea'));
//    const purchaseMultiplier = checkNull(CSQIGV.GetEditValue('Purchase_Multiplier'));
//    //update Cost
//    var newCost = calculatePrice(listPriceEntered, purchaseMultiplier);
//    CSQIGV.SetEditValue("Cost2", newCost.toFixed(2));
//}

//function whenCommUpdated() {
//    //fired when enter is hit on comm
//    const listPriceEntered = checkNull(CSQIGV.GetEditValue('List_Price_Ea'));
//    const commMultiplier = checkNull(CSQIGV.GetEditValue('Commission'));
//    //update comm
//    CSQIGV.SetEditValue("Comm2", calculatePrice(listPriceEntered, commMultiplier));
//}

//function yokogawaChecker(mfg) {
//    //checks if the mfg a yokogawa company, if yes then shows link to call yoko api
//    const yokogawaMfgCodes = ['YCA',
//        'YCC',
//        'YCE',
//        'YCF',
//        'YCL',
//        'YCM',
//        'YCN',
//        'YCS',
//        'YCT',
//        'YKC'];
//    var yokoLink = CSQIGV.GetEditFormLayoutItemOrGroup("lnkyokoCol");
//    if (yokogawaMfgCodes.includes(mfg)) {
//        //set link visible
//        console.log("yoko, should show a link");
//        yokoLink.SetVisible(true);
//    } else {
//        //hide link incase mfg was yoko and then changed
//        yokoLink.SetVisible(false);
//    }


//}

//function CallYokoAPI(s, e) {
//    //gathers and confirms we have the right inputs. If yes, then an ajax call to the API 
//    var modelCombo = CSQIGV.GetEditValue('Model');
//    var responseLabel = CSQIGV.GetEditFormLayoutItemOrGroup('apiResponse');
//    responseLabel.SetVisible(true);
//    lblycaResponse.SetText("Checking with yokogawa...");
//    if (modelCombo.length > 1) {
//        //if a model number has been selected, run the process
//        var editingIndex = CSQIGV.GetFocusedRowIndex(); // getting the editing row

//        const UID = CSQIGV.GetRowKey(editingIndex);


//        $.ajax({
//            type: "POST",
//            url: ajaxVersioner("YokoAPI_PriceCheck"),
//            data: JSON.stringify({ qUID: UID, modelNumber: modelCombo }),
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (msg) {
//                console.log(msg.d);

//                lblycaResponse.SetText(msg.d);

//            },
//            error: function (xhr, status, error) {
                
//                showError(xhr.responseText);
//                lblycaResponse.SetText("An Error Occured");
//            }
//        });
//    } else {
//        lblycaResponse.SetText("Please select a model number");
//    }



//}

function getCollectAccountNumber(s, e) {
    //on ship via changed, check if the selected account has a collect account for shi[ via]
    var shipVia = s.GetValue();

    if (Object.keys(currentCollectAccounts).length === 0) {
        //if nothing is in the dictionary (aka account was selected before this session) then go and search for it 

        getCollect(shipVia);

    } else {

        for (const [key, value] of Object.entries(currentCollectAccounts)) {
            console.log(key);
            console.log(value);
            if (shipVia.includes(key)) {
                console.log(key, ' in ', shipVia);
                var collectAccountNo = currentCollectAccounts[key];
                txtCollectAccount.SetText(collectAccountNo);
            }


        }

    }

   

}


function getCollect(shipVia) {
    var accountNumber = cscboCustomer.GetValue();

    $.ajax({
        type: "POST",
        url: ajaxVersioner("getCollect"),
        data: JSON.stringify({ aID: accountNumber, type: shipVia }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);
            txtCollectAccount.SetText(msg.d);


        },
        error: function (xhr, status, error) {

            showError(xhr.responseText);

        }
    });


}



//function autoPO() {

//    //sends trigger to auto PO all items on order
//    const orderNo = new URLSearchParams(window.location.search).get('id');

//    $.ajax({
//        type: "POST",
//        url: ajaxVersioner("autoPO"),
//        data: JSON.stringify({ orderNumber: orderNo }),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (msg) {

//            CSQIGV.Refresh();

//        },
//        error: function (xhr, status, error) {

//            document.getElementById("Errormessage").innerText = error;
//        }
//    });


//}

////AddAsmItem(string QuoteNumber, string UserName, string ASMNo)
//function addASMItem() {
//    const asmNumb = document.getElementById('assemblyLabel').innerText.split('>')[1].trim();
//    console.log(asmNumb);
//    const urlParams = new URLSearchParams(window.location.search);
//    const quoteNumber = urlParams.get('id');
//    var userName = document.getElementById('lblName').innerHTML;
//    $.ajax({
//        type: "POST",
//        url: ajaxVersioner("AddAsmItem"),
//        data: JSON.stringify({ QuoteNumber: quoteNumber, UserName: userName, ASMNo: asmNumb }),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (msg) {
//            console.log(msg);
//            CSQIGV.Refresh();
//            CSQIGV.SetVisible(true);
//        },
//        error: function (xhr, status, error) {
//            console.log(xhr.responseText);  // to see the error message
//            console.log(error);
//        }
//    });
//}

//function showHideAsmGrids() {
//    //checks if order or quote, shows appropriate grid

//    const urlParams = new URLSearchParams(window.location.search);
//    const entityNumber = urlParams.get('id');
//    if (entityNumber[0] == 'Q') {
//        document.getElementById('gridholder_quote').style.display = "inline-block";
//    } else {
//        document.getElementById('gridholder_orders').style.display = "inline-block";
//    }
//}

function openOrder() {
    document.getElementById('btnOpen').click();
}

function enterOrder() {
   
    document.getElementById('btnEnter').click();
}

function showHideFileOptions(s, e) {
    //if selected text == "inside" then show inside folder options
    if (s.GetText() == 'Inside Only') {
        document.getElementById('insideFolders').style.display = "block";
        document.getElementById('outsideFolders').style.display = "none";
    } else {
        document.getElementById('insideFolders').style.display = "none";
        document.getElementById('outsideFolders').style.display = "block";
    }
}






function resetSelections(s, e) {
    //when files are uploaded, refresh everything 
    DocumentsUploadControl.Upload();
    //cboAccess.SetSelectedIndex(-1);
    //document.getElementById('insideFolders').style.display = "none";
    //document.getElementById('outsideFolders').style.display = "none";
    //cboinsideFolder.SetSelectedIndex(-1);
    //cboOutsideFolder.SetSelectedIndex(-1);
    //cboUploadUID.SetSelectedIndex(-1);
    //fileTags.ClearTokenCollection();
}

function onfilesUploaded() {
    currFiles.Refresh();
    cboAccess.SetSelectedIndex(-1);
    document.getElementById('insideFolders').style.display = "none";
    document.getElementById('outsideFolders').style.display = "none";
    cboinsideFolder.SetSelectedIndex(-1);
    cboOutsideFolder.SetSelectedIndex(-1);
    cboUploadUID.SetSelectedIndex(-1);
    fileTags.ClearTokenCollection();
}

function updateTabWithQty(s, bubbleName) {
    //from sender get number of rows, is the grid on init
    //update tab
    var gridRows = s.GetVisibleRowsOnPage();

    if (gridRows == null || gridRows == 0) {
        document.getElementById(bubbleName).innerHTML = "0";
        var newBubbleName = bubbleName.replace("TTC", "ATTC");
        document.getElementById(newBubbleName).innerHTML = "0";
    }
    else {
        try {
            //tryingfor name is TTC
     
            document.getElementById(bubbleName).innerHTML = gridRows;
            var newBubbleName = bubbleName.replace("TTC", "ATTC");
            document.getElementById(newBubbleName).innerHTML = gridRows;
        } catch {
            //if can't find then try for active tab
            console.log("caught error");

        }
    }


}

function printPackingSlip() {
    //cchecks if grid visible is eligable for packing list, throws error otherwise
    console.log("clicking btn");
    if (shipTabs.GetActiveTabIndex() == 1) {

        showError("No packing lists available for recieved items");

    } else {
        if (shipTabs.GetActiveTabIndex() == 0) {
            if (gridPrelim.GetFocusedRowIndex() == -1) {
                showError("Must select a shipment on the To Be Shipped Grid to Print");
            } else {
                console.log("clicking btn relmin");
                document.getElementById('btnprintPackingSlip').click();
            }
        } else if (shipTabs.GetActiveTabIndex() == 2) {
            if (gridReal.GetFocusedRowIndex() == -1) {
                showError("Must select a shipment on the Shipped Grid to Print");
            } else {
                document.getElementById('btnprintPackingSlip').click();
            }
        }

    }
}

function printYokoID() {
    document.getElementById('OrderMenu_downloadYoko').click();
}

function printOrderSummary() {
    document.getElementById('OrderMenu_lnkDownloadOrderSummary').click();
}

function getShipID() {
    //returns selected ship ID or throws errror if not selected
    if (shipTabs.GetActiveTabIndex() == 1) {

        showError("No packing lists available for recieved items");

    } else {
        if (shipTabs.GetActiveTabIndex() == 0) {
            if (gridPrelim.GetFocusedRowIndex() == -1) {
                showError("Must select a shipment on the To Be Shipped Grid to Print");
            } else {
                console.log("clicking btn relmin");
                var shipID = gridPrelim.batchEditApi.GetCellValue(gridPrelim.GetFocusedRowIndex(), "SHIP_ID");
                return shipID; //gridPrelim.GetRowKey(gridPrelim.GetFocusedRowIndex());
            }
        } else if (shipTabs.GetActiveTabIndex() == 2) {
            if (gridReal.GetFocusedRowIndex() == -1) {
                showError("Must select a shipment on the Shipped Grid to Print");
            } else {
                var shipID = gridRead.batchEditApi.GetCellValue(gridRead.GetFocusedRowIndex(), "SHIP_ID");
                return gridRead.GetRowKey(gridRead.GetFocusedRowIndex());
            }
        }

    }
}

function quoteComboBoxDocuments(s, e) {
    text = s.GetText();
    currenturl = window.location.href;
    url = currenturl.replace("Orders/OrdersDocuments", "Quotes/QuoteDocuments").split("=")[0] + "=" + text;
    QuoteLink.SetNavigateUrl(url);
    QuoteLink.SetVisible(true);
}


function openInNewWindow(s, e) {
    var destinationURL = s.GetNavigateURL();
    window.open(destinationURL, '_blank');
}

function navigatePreview(previewClick) {
    //accepts previewclick, appends the correct parameters for preview
    var url;
    const urlParams = new URLSearchParams(window.location.search);
    const entityNumber = urlParams.get('id');
    if (previewClick == "Quote") {
        url = "/Documents/DocumentViewer.aspx?rType=Quote&p=" + entityNumber;
    } else if (previewClick == "Quality") {
        url = "/Documents/DocumentViewer.aspx?rType=Quality&p=" + entityNumber;
    } else if (previewClick == "PackingList") {
        url = "/Documents/DocumentViewer.aspx?rType=PackingList&p=" + getShipID();
    } else if (previewClick == "OE") {
        url = "/Documents/DocumentViewer.aspx?rType=OE&p=" + entityNumber;
    } else if (previewClick == "OA") {
        url = "/Documents/DocumentViewer.aspx?rType=OA&p=" + entityNumber;
    } else {
        url = "/Documents/DocumentViewer.aspx?rType=" + previewClick + "&p=" + entityNumber;
    }

    window.open(url, '_blank');
}

function refreshCustomers() {
    //on click reset the accounts session
   // document.getElementById('OrderMenu_lnkClearCustomers').click();
    //location.reload();
    clearSessions.PerformCallback('customer');
}
function refreshVendor() {
    //on click reset the accounts session
    //document.getElementById('OrderMenu_lnkClearMfg').click();
    //location.reload();
    clearSessions.PerformCallback('vendor');
}

function refreshCustomersQ() {
    //on click reset the accounts session
    clearSessions.PerformCallback('customer');
}
function refreshVendorQ() {
    //on click reset the accounts session
    clearSessions.PerformCallback('vendor');
}

function closeImportandCleanUp(){
    //on call, close popup and disable sender button, hide grid, clear input
    copyItemsPop.Hide();
    btnCopy.SetEnabled(false);

    TXTiMPORTsEARCH.SetText(null);
    csCopyGrid.SetVisible(false);
}

function enterToSearchImport() {
    //listens for enter, presses search button

    if (event.keyCode === 13) {
        //if enter, hit searxh btn
        document.getElementById('ProductCopyPopup_btnEntitySearch').click();
    }
}


function previewMFGPO() {
    //checks if item selected, if ess then navigates to preview for PO
    console.log("clicking btn");
    {
        var index = mfgPOGrid.GetFocusedRowIndex();
        if (index == -1) {
            showError("Must select a PO on the PO grid to preview");
        } else {
            var PO = mfgPOGrid.GetRowKey(index);
            var url = "/Documents/DocumentViewer.aspx?rType=PO&p=" + PO;
            window.open(url, '_blank');
        }
    }
       

    
}
