<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Invoice.aspx.cs" Inherits="Accounting_AR_Invoice" %><%@ Register Assembly="DevExpress.Web.v21.2, Version=21.2.6.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title>Invoice</title>
    <link rel="stylesheet" href="/StyleSheet.css" async />
    <script src="../Scripts/transactionsJS.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async></script>
    <script src="/JavaScript.js"></script>
    <style type="text/css">
      .grid .dxgvCSD {
        height: 100%;
      }

      .dxeButtonEditButton {
        background: white;
        border: none;
      }

      .dxbButton div.dxb {
        padding: 3px 8px 4px;
        background-color: #4a4a80;
        border-radius: 12px;
        color: white;
      }

      .dxbButton.dxb-outline {
        border-radius: 12px;
      }

      #wrapper {
        display: grid;
        grid-template-columns: repeat(7, 250px);
        grid-auto-rows: 50px;
        grid-gap: 10px;
        width: 95%;
      }

      .wideDiv {}
    </style>
    <script>
        window.addEventListener('load', (event) => {
            document.title = "Invoice " + new URLSearchParams(window.location.search).get('id');
            move(25);
        });

        function navigate(pageString) {
            window.location.href = '/Quotes/' + pageString + '.aspx?id=' + new URLSearchParams(window.location.search).get('id');
        }

        function addBlankItem(s) {
            s.InsertItem(0, "blank", "blank");
        }
        savedValues = {};

        function jsonListener(senderName) {
            /*var val = document.getElementById(senderName).value;*/
            val = senderName.GetValue();
            if (val == null) {
                console.log('nope');
            } else {
                if (val == true) {
                    val = 1;
                } else if (val == false) {
                    val = 0;
                }
                savedValues[senderName.name] = val;
                // console.log(savedValues);
            }
        }
    </script>
  </head>
  <body class="g-body">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <form id="form1" runat="server"><%--
			<custNotes:timeoutWarning runat="server" ID="timeoutWarning" />--%> <asp:Label ID="lblName" runat="server" Text="Label" class="g-label"></asp:Label>
      <asp:ScriptManager ID="ScriptManager1" runat="server" />
      <div style="height: auto; width: auto;">
        <div class="g-navbar" style="top: -4px">
          <a href="javascript:void(0)" class="closebtn" style="color:grey;">☰</a>
          <div style="display:none;"></div>
        </div>
      </div>
      <div id="pageGrid" class="pageGridHolder">
        <div id="wholePageHolder" style="overflow: hidden; display: grid; grid-auto-flow: column;  transition: margin-left .2s; margin-left:50px;">
          <div id="sectionsHolder" style="grid-auto-flow: column; width: 100%; margin-right: 5%;">
            <div id="quoteHeaderHolder" style="width: 100%; grid-row: 1;">
              <div class="g-div-header" style="width: 100%; display: grid; margin-top: 2%">
                <div style="height: 100%; width: 70%; grid-column: 1;">
                  <dx:ASPxLabel ID="ASPxLabel16" runat="server" Text="Invoice" CssClass="g-label"></dx:ASPxLabel>
                  <br />
                  <dx:ASPxLabel ID="txtInvNoLabel" runat="server" CssClass="g-label"></dx:ASPxLabel>
                </div>
                <div style="height: 100%; width: 30%; float: right; grid-column: 6">
                  <dx:ASPxButton ID="inVoiceBtn" runat="server" CssClass="g-btn" Text="Invoice" ClientInstanceName="invoiceBtn"></dx:ASPxButton>
                </div>
                <div id="showCheck" style="float: right; grid-column: 7;">
                  <div id="check" style="display:none;">
                    <span class="dot">
                      <img style="width:20px;" src="../Images/check_in_circle.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divdivider" style="grid-row: 2;"></div>
          <div id="InvHeaderHolder" style="width: 100%; display: grid; grid-row: 3;"><%--There will be 10 rows and 8 columns maybe?--%> <div id="wrapper"></div>
            <div id="headerholder" style="grid-row: 1; display: grid; justify-content: left" class="divwhite">
              <div style="float: left; height: 100%; display:grid; grid-column: 1; grid-row: 1;">
                <div style="grid-row: 1;">
                  <dx:ASPxLabel ID="orderNoLabel" CssClass="g-label" runat="server" Text="Order Number: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 2;">
                  <dx:ASPxLabel ID="dateLabel" CssClass="g-label" runat="server" Text="Date: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 3;">
                  <dx:ASPxLabel ID="shipDateLabel" CssClass="g-label" runat="server" Text="Ship Date: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 4;">
                  <dx:ASPxLabel ID="poNumLabel" CssClass="g-label" runat="server" Text="PO Number: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 5;">
                  <dx:ASPxLabel ID="shipmentLabel" CssClass="g-label" runat="server" Text="Shipment Via: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 6;">
                  <dx:ASPxLabel ID="fobPointLabel" CssClass="g-label" runat="server" Text="FOB Point: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 7;">
                  <dx:ASPxLabel ID="lastPrefixLabel" CssClass="g-label" runat="server" Text="Last Prefix: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 8;">
                  <dx:ASPxLabel ID="sellLabel" CssClass="g-label" runat="server" Text="Total Sell: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="float: left; display: grid; grid-column: 2; grid-row: 1; padding-right: 5px"><%-- Contact Drop Down --%> <dx:ASPxTextbox ID="ASPxLabel1" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                  <dx:ASPxComboBox ID="ASPxComboBox2" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                  <br />
                  <dx:ASPxComboBox ID="ASPxComboBox3" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                  <br />
                  <dx:ASPxTextbox ID="ASPxLabel4" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                  <dx:ASPxTextbox ID="ASPxLabel5" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                  <dx:ASPxTextbox ID="ASPxLabel6" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                  <dx:ASPxTextbox ID="ASPxLabel7" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                  <dx:ASPxTextbox ID="ASPxLabel8" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                  <div id="addContact" style="display: none;">
                    <span class="close" title="cancel entering contact" onclick="cancelClick('addContact', 'existingContacts'); return false;">x</span>
                    <dx:ASPxTextBox ID="txtAttention" runat="server" CssClass="g-textbox" SelectInputTextOnClick="true" NullText="Name">
                      <ClientSideEvents LostFocus="function(s, e){jsonListener(s)}" />
                    </dx:ASPxTextBox>
                    <dx:ASPxTextBox ID="txtEmail" runat="server" CssClass="g-textbox" SelectInputTextOnClick="true" NullText="Email Address">
                      <ClientSideEvents LostFocus="function(s, e){jsonListener(s)}" />
                    </dx:ASPxTextBox>
                  </div>
                </div>
                <div style="float: left; display: grid; grid-column: 3; grid-row: 1;">
                  <div style="grid-row: 1;">
                    <dx:ASPxLabel ID="ASPxLabel9" CssClass="g-label" runat="server" Text="Salesman: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 2;">
                    <dx:ASPxLabel ID="ASPxLabel10" CssClass="g-label" runat="server" Text="Terms: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 3;">
                    <dx:ASPxLabel ID="ASPxLabel11" CssClass="g-label" runat="server" Text="Due Date: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 4;">
                    <dx:ASPxLabel ID="ASPxLabel12" CssClass="g-label" runat="server" Text="Order Complete: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 5;">
                    <dx:ASPxLabel ID="ASPxLabel13" CssClass="g-label" runat="server" Text="Credit Memo: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 6;">
                    <dx:ASPxLabel ID="ASPxLabel14" CssClass="g-label" runat="server" Text="Last Update: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 7;">
                    <dx:ASPxLabel ID="ASPxLabel15" CssClass="g-label" runat="server" Text="Total Cost/Tax: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 8;">
                    <br />
                  </div>
                </div>
                <div style="float: left; display: grid; grid-column: 4; grid-row: 1; padding-right: 5px">
                  <div style="grid-row: 1;">
                    <dx:ASPxComboBox ID="ASPxComboBox4" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                    <br />
                  </div>
                  <div class="wideDiv" style="grid-row: 2;">
                    <dx:ASPxTextbox ID="ASPxTextbox2" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                    <br />
                  </div>
                  <div style="grid-row: 3;">
                    <dx:ASPxTextbox ID="ASPxTextbox3" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                    <br />
                  </div>
                  <div style="grid-row: 4;">
                    <dx:ASPxTextbox ID="ASPxTextbox4" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                    <br />
                  </div>
                  <div style="grid-row: 5;">
                    <dx:ASPxTextbox ID="ASPxTextbox5" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                    <br />
                  </div>
                  <div style="grid-row: 6;">
                    <dx:ASPxComboBox ID="ASPxComboBox5" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                    <br />
                  </div>
                  <div style="grid-row: 7;">
                    <dx:ASPxTextbox ID="ASPxTextbox7" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                    <br />
                  </div>
                  <div style="grid-row: 8;">
                    <br />
                  </div>
                  <div style="grid-row: 9;">
                    <br />
                  </div>
                </div>
                <div style="grid-column: 5; grid-row: 1;">
                  <div style="grid-row: 1;">
                    <div id="itemContainer" style="display:flex; width:300px;">
                      <dx:ASPxLabel ID="ASPxLabel22" CssClass="g-label" runat="server" Text="Office: "></dx:ASPxLabel>
                      <dx:ASPxComboBox ID="ASPxComboBox1" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                    </div>
                    <br />
                  </div>
                  <div style="grid-row: 2;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 3;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 4;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 5;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 6;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 7;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 8;">
                    <br />
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 9;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 10;">
                    <br />
                    <br />
                  </div>
                </div>
                <div style="grid-column: 6; grid-row: 1;">
                  <div style="grid-row: 1;">
                    <dx:ASPxLabel ID="ASPxLabel17" CssClass="g-label" runat="server" Text="Status: "></dx:ASPxLabel>
                    <br />
                  </div>
                  <div style="grid-row: 2;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 3;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 4;">
                    <dx:ASPxLabel ID="ASPxLabel20" CssClass="g-label" runat="server" Text="Comment: "></dx:ASPxLabel>
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 5;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 6;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 7;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 8;">
                    <br />
                    <dx:ASPxLabel ID="ASPxLabel18" CssClass="g-label" runat="server" Text="Last Email Date: "></dx:ASPxLabel>
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 9;">
                    <dx:ASPxLabel ID="ASPxLabel19" CssClass="g-label" runat="server" Text="Acct Paid Date: "></dx:ASPxLabel>
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 10;">
                    <dx:ASPxLabel ID="ASPxLabel21" CssClass="g-label" runat="server" Text="Acct Bal Rem: "></dx:ASPxLabel>
                    <br />
                    <br />
                  </div>
                </div>
                <div style="float: left; display: grid; grid-column: 7; grid-row: 1; padding-right: 5px"><%-- Contact Drop Down --%> <div style="grid-row: 1;">
                    <dx:ASPxComboBox ID="statusCombo" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                    <br />
                    <asp:TextBox ID="txtComment" runat="server" Height="144px" TextMode="MultiLine" Width="185px"></asp:TextBox>
                    <br />
                  </div>
                  <div style="grid-row: 5;">
                    <br />
                    <br />
                  </div>
                  <div style="grid-row: 6;">
                    <br />
                  </div>
                  <div style="grid-row: 7;">
                    <dx:ASPxComboBox ID="ASPxComboBox6" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                    <br />
                  </div>
                  <div style="grid-row: 8;">
                    <dx:ASPxComboBox ID="ASPxComboBox7" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                    <br />
                  </div>
                  <div style="grid-row: 9;">
                    <dx:ASPxTextbox ID="ASPxTextbox14" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                    <br />
                  </div>
                </div>
              </div>
              <div id="optionalHeader" style="width: 100%; display: grid; justify-content:left; grid-row: 3; grid-gap: 10px; overflow: hidden" class="divwhite">
                <div style="grid-row: 2;">
                  <dx:ASPxLabel ID="ASPxLabel2" CssClass="g-label" runat="server" Text="Shipping Cost: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 3;">
                  <dx:ASPxLabel ID="ASPxLabel3" CssClass="g-label" runat="server" Text="Freight Taxable: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-row: 4;">
                  <dx:ASPxLabel ID="ASPxLabel23" CssClass="g-label" runat="server" Text="Unbilled Freight: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 2; grid-row: 2;">
                  <dx:ASPxTextbox ID="ASPxTextbox1" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 2; grid-row: 3;">
                  <dx:ASPxTextbox ID="ASPxTextbox6" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 2; grid-row: 4;">
                  <dx:ASPxTextbox ID="ASPxTextbox8" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 3; grid-row: 2;">
                  <dx:ASPxLabel ID="ASPxLabel24" CssClass="g-label" runat="server" Text="State: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 3; grid-row: 3;">
                  <dx:ASPxLabel ID="ASPxLabel25" CssClass="g-label" runat="server" Text="County: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 3; grid-row: 4;">
                  <dx:ASPxLabel ID="ASPxLabel26" CssClass="g-label" runat="server" Text="City: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 4; grid-row: 1;">
                  <dx:ASPxLabel ID="ASPxLabel27" CssClass="g-label" runat="server" Text="Tax Code: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 4; grid-row: 2;">
                  <dx:ASPxComboBox ID="ASPxComboBox8" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                  <br />
                </div>
                <div style="grid-column: 4; grid-row: 3;">
                  <dx:ASPxComboBox ID="ASPxComboBox9" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                  <br />
                </div>
                <div style="grid-column: 4; grid-row: 4;">
                  <dx:ASPxComboBox ID="ASPxComboBox10" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                  <br />
                </div>
                <div style="grid-column: 4; grid-row: 5;">
                  <dx:ASPxComboBox ID="ASPxComboBox11" ClientInstanceName="statusComboBox" runat="server"></dx:ASPxComboBox>
                  <br />
                </div>
                <div style="grid-column: 5; grid-row: 1;">
                  <dx:ASPxLabel ID="ASPxLabel28" CssClass="g-label" runat="server" Text="Calculated Tax: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 5; grid-row: 2;">
                  <dx:ASPxTextbox ID="ASPxTextbox9" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 5; grid-row: 3;">
                  <dx:ASPxTextbox ID="ASPxTextbox10" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 5; grid-row: 4;">
                  <dx:ASPxTextbox ID="ASPxTextbox11" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 5; grid-row: 5;">
                  <dx:ASPxTextbox ID="ASPxTextbox12" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 6; grid-row: 2;">
                  <dx:ASPxTextbox ID="ASPxTextbox13" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 6; grid-row: 3;">
                  <dx:ASPxTextbox ID="ASPxTextbox15" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 6; grid-row: 4;">
                  <dx:ASPxTextbox ID="ASPxTextbox16" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 6; grid-row: 5;">
                  <dx:ASPxTextbox ID="ASPxTextbox17" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 7; grid-row: 1;">
                  <dx:ASPxLabel ID="ASPxLabel29" CssClass="g-label" runat="server" Text="Calculated: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 7; grid-row: 2;">
                  <dx:ASPxLabel ID="ASPxLabel30" CssClass="g-label" runat="server" Text="Tax: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 7; grid-row: 3;">
                  <dx:ASPxLabel ID="ASPxLabel31" CssClass="g-label" runat="server" Text="Cost: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 7; grid-row: 4;">
                  <dx:ASPxLabel ID="ASPxLabel32" CssClass="g-label" runat="server" Text="Total: "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="grid-column: 8; grid-row: 2;">
                  <dx:ASPxTextbox ID="ASPxTextbox18" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 8; grid-row: 3;">
                  <dx:ASPxTextbox ID="ASPxTextbox19" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
                <div style="grid-column: 8; grid-row: 4;">
                  <dx:ASPxTextbox ID="ASPxTextbox20" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                  <br />
                </div>
              </div>
              <div id="optionalHeader2" style="width: 100%; display: grid; justify-content:left; grid-row: 4; grid-gap: 10px; overflow: hidden" class="divwhite">
                <div style="grid-row: 1;">
                  <dx:ASPxLabel ID="ASPxLabel33" CssClass="g-label" runat="server" Text="Invoice Items "></dx:ASPxLabel>
                  <br />
                </div>
                <div style="display:flex;justify-content:center;">
                  <dx:ASPxGridView ID="invoiceGrid" runat="server" AutoGenerateColumns="False" KeyFieldName="Unique_ID">
                    <Columns>
                      <dx:GridViewDataTextColumn FieldName="Unique_ID" ReadOnly="True" VisibleIndex="0"></dx:GridViewDataTextColumn>
                      <dx:GridViewDataTextColumn FieldName="Invoice_Item_Number" VisibleIndex="1"></dx:GridViewDataTextColumn>
                      <dx:GridViewDataTextColumn FieldName="column1" VisibleIndex="2"></dx:GridViewDataTextColumn>
                      <dx:GridViewDataTextColumn FieldName="Net_Price_Ea" VisibleIndex="3"></dx:GridViewDataTextColumn>
                      <dx:GridViewDataTextColumn FieldName="Cost" VisibleIndex="4"></dx:GridViewDataTextColumn>
                      <dx:GridViewDataCheckColumn FieldName="Taxable" VisibleIndex="5"></dx:GridViewDataCheckColumn>
                      <dx:GridViewDataTextColumn FieldName="Item_Comment" VisibleIndex="6"></dx:GridViewDataTextColumn>
                    </Columns>
                  </dx:ASPxGridView>
                </div>
              </div>
              <div id="optionalHeader3" style="width: 100%; display: grid; justify-content:left; grid-row: 5; grid-gap: 10px; overflow: hidden" class="divwhite">
                <div style="grid-row: 1;">
                  <dx:ASPxLabel ID="ASPxLabel34" CssClass="g-label" runat="server" Text="Address Info "></dx:ASPxLabel>
                  <br />
                </div>
                <div id="BillToAddressHolder" style="grid-column:1; grid-row:2;">
                  <dx:ASPxFormLayout runat="server" ID="ASPxFormLayout1" Width="100%" AlignItemCaptions="true" UseDefaultPaddings="false" Paddings-PaddingTop="20" Font-Size="Medium">
                    <Styles>
                      <LayoutGroupBox Caption-Font-Bold="true" />
                    </Styles>
                    <SettingsItemCaptions VerticalAlign="Middle" />
                    <Items>
                      <dx:LayoutGroup Caption="Bill To Address">
                        <Items>
                          <dx:LayoutItem Caption="Address 1:">
                            <LayoutItemNestedControlCollection>
                              <dx:LayoutItemNestedControlContainer>
                                <dx:ASPxLabel runat="server" ID="lblBillToAddress1" ClientInstanceName="lblBillToAddress1"></dx:ASPxLabel>
                              </dx:LayoutItemNestedControlContainer>
                            </LayoutItemNestedControlCollection>
                          </dx:LayoutItem>
                          <dx:LayoutItem Caption="Address 2:">
                            <LayoutItemNestedControlCollection>
                              <dx:LayoutItemNestedControlContainer>
                                <dx:ASPxLabel runat="server" ID="lblBillToAddress2" ClientInstanceName="lblBillToAddress2"></dx:ASPxLabel>
                              </dx:LayoutItemNestedControlContainer>
                            </LayoutItemNestedControlCollection>
                          </dx:LayoutItem>
                          <dx:LayoutItem Caption="City">
                            <LayoutItemNestedControlCollection>
                              <dx:LayoutItemNestedControlContainer>
                                <dx:ASPxLabel runat="server" ID="lblBillToCity" ClientInstanceName="lblBillToCity"></dx:ASPxLabel>
                              </dx:LayoutItemNestedControlContainer>
                            </LayoutItemNestedControlCollection>
                          </dx:LayoutItem>
                          <dx:LayoutItem Caption="State">
                            <LayoutItemNestedControlCollection>
                              <dx:LayoutItemNestedControlContainer>
                                <dx:ASPxLabel runat="server" ID="lblBillToState" ClientInstanceName="lblBillToState"></dx:ASPxLabel>
                              </dx:LayoutItemNestedControlContainer>
                            </LayoutItemNestedControlCollection>
                          </dx:LayoutItem>
                          <dx:LayoutItem Caption="Zip">
                            <LayoutItemNestedControlCollection>
                              <dx:LayoutItemNestedControlContainer>
                                <dx:ASPxLabel runat="server" ID="lblBillToZip" ClientInstanceName="lblBillToZip"></dx:ASPxLabel>
                              </dx:LayoutItemNestedControlContainer>
                            </LayoutItemNestedControlCollection>
                          </dx:LayoutItem>
                        </Items>
                      </dx:LayoutGroup>
                    </Items>
                  </dx:ASPxFormLayout>
                </div>
                <div id="ShipToAddressHolder" style="grid-column:2; grid-row:2;">
                  <div id="mainShipToDetails">
                    <div id="shipToForm">
                      <dx:ASPxFormLayout runat="server" ID="shipToAddressForm" Width="100%" AlignItemCaptions="true" UseDefaultPaddings="false" Paddings-PaddingTop="20" Font-Size="Medium">
                        <Styles>
                          <LayoutGroupBox Caption-Font-Bold="true" />
                        </Styles>
                        <SettingsItemCaptions VerticalAlign="Middle" />
                        <Items>
                          <dx:LayoutGroup Caption="Ship To Address">
                            <Items>
                              <dx:LayoutItem Caption="Address 1:">
                                <LayoutItemNestedControlCollection>
                                  <dx:LayoutItemNestedControlContainer>
                                    <dx:ASPxLabel runat="server" ID="lblAddress1" ClientInstanceName="lblAddress1"></dx:ASPxLabel>
                                  </dx:LayoutItemNestedControlContainer>
                                </LayoutItemNestedControlCollection>
                              </dx:LayoutItem>
                              <dx:LayoutItem Caption="Address 2:">
                                <LayoutItemNestedControlCollection>
                                  <dx:LayoutItemNestedControlContainer>
                                    <dx:ASPxLabel runat="server" ID="lblAddress2" ClientInstanceName="lblAddress2"></dx:ASPxLabel>
                                  </dx:LayoutItemNestedControlContainer>
                                </LayoutItemNestedControlCollection>
                              </dx:LayoutItem>
                              <dx:LayoutItem Caption="City">
                                <LayoutItemNestedControlCollection>
                                  <dx:LayoutItemNestedControlContainer>
                                    <dx:ASPxLabel runat="server" ID="lblCity" ClientInstanceName="lblCity"></dx:ASPxLabel>
                                  </dx:LayoutItemNestedControlContainer>
                                </LayoutItemNestedControlCollection>
                              </dx:LayoutItem>
                              <dx:LayoutItem Caption="State">
                                <LayoutItemNestedControlCollection>
                                  <dx:LayoutItemNestedControlContainer>
                                    <dx:ASPxLabel runat="server" ID="lblState" ClientInstanceName="lblState"></dx:ASPxLabel>
                                  </dx:LayoutItemNestedControlContainer>
                                </LayoutItemNestedControlCollection>
                              </dx:LayoutItem>
                              <dx:LayoutItem Caption="Zip">
                                <LayoutItemNestedControlCollection>
                                  <dx:LayoutItemNestedControlContainer>
                                    <dx:ASPxLabel runat="server" ID="lblZip" ClientInstanceName="lblZip"></dx:ASPxLabel>
                                  </dx:LayoutItemNestedControlContainer>
                                </LayoutItemNestedControlCollection>
                              </dx:LayoutItem>
                              <dx:LayoutItem Caption="">
                                <LayoutItemNestedControlCollection>
                                  <dx:LayoutItemNestedControlContainer></dx:LayoutItemNestedControlContainer>
                                </LayoutItemNestedControlCollection>
                              </dx:LayoutItem>
                            </Items>
                          </dx:LayoutGroup>
                        </Items>
                      </dx:ASPxFormLayout>
                    </div>
                  </div>
                </div>
              </div>
    </form>
      </body>
    </html>