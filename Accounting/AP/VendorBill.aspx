<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendorBill.aspx.cs" Inherits="Accounting_AP_VendorBill" %><%@ Register Assembly="DevExpress.Web.v21.2, Version=21.2.6.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>
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

    </style>
    <script>
        function addBlankItem(s) {
            s.InsertItem(0, "blank", "blank");
        }
    </script>
  </head>
  <body class="g-body">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <form id="form1" runat="server"><%--
			<custNotes:timeoutWarning runat="server" ID="timeoutWarning" />--%> <asp:Label ID="lblName" runat="server" Text="Label" class="g-label"></asp:Label>
      <div style="height: auto; width: auto;">
        <div class="g-navbar" style="top: -4px">
          <a href="javascript:void(0)" class="closebtn" style="color:grey;">☰</a>
        </div>
      </div>
      <div id="pageGrid" class="pageGridHolder">
        <div id="wholePageHolder" style="overflow: hidden; display: grid; grid-auto-flow: column;  transition: margin-left .2s; margin-left:50px;">
          <div id="sectionsHolder" style="grid-auto-flow: column; width: 100%; margin-right: 5%;">
            <div id="quoteHeaderHolder" style="width: 100%; grid-row: 1;">
              <div class="g-div-header" style="width: 100%; display: grid; margin-top: 2%">
                <div style="height: 100%; width: 70%; grid-column: 1;">
                  <dx:ASPxLabel ID="ASPxLabel16" runat="server" Text="Vendor Bill " CssClass="g-label"></dx:ASPxLabel>
                  <br />
                  <dx:ASPxLabel ID="lblVBNo" runat="server" CssClass="g-label"></dx:ASPxLabel>
                </div>
                <div style="height: 100%; width: 30%; float: right; grid-column: 6"></div>
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
          <div id="VBHeaderHolder" style="width: 100%; display: grid; grid-row: 3;"><%--There will be 10 rows and 8 columns maybe?--%> <div id="wrapper"></div>
            <div id="headerholder" style="height: 75px; grid-row: 1; display: grid; justify-content: left" class="divwhite">
              <div style="float: left; height: 100%; display:grid; grid-column: 1; grid-row: 1;">
                <dx:ASPxLabel ID="ASPxLabel1" CssClass="g-label" runat="server" Text="Main Info "></dx:ASPxLabel>
                <br />
              </div>
              <div style="float: left; height: 100%; display:grid; grid-row: 2;">
                <dx:ASPxButton ID="ASPxButton1" runat="server" CssClass="g-btn" Text="Open" ClientInstanceName="invoiceBtn"></dx:ASPxButton>
                <br />
              </div>
              <div style="float: left; height: 100%; display:grid; grid-column: 2; grid-row: 2;">
                <dx:ASPxButton ID="ASPxButton2" runat="server" CssClass="g-btn" Text="Entered" ClientInstanceName="invoiceBtn"></dx:ASPxButton>
                <br />
              </div>
            </div>
            <div id="optionalHeader" style="width: 100%; display: grid; justify-content:left; grid-row: 3; grid-gap: 10px; overflow: hidden" class="divwhite">
              <div style="grid-row: 1;">
                <dx:ASPxLabel ID="ASPxLabel2" CssClass="g-label" runat="server" Text="Vendor Bill UID: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-row: 2;">
                <dx:ASPxLabel ID="ASPxLabel6" CssClass="g-label" runat="server" Text="Vendor Bill: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-row: 3;">
                <dx:ASPxLabel ID="ASPxLabel3" CssClass="g-label" runat="server" Text="RCPT_ID: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-row: 4;">
                <dx:ASPxLabel ID="ASPxLabel23" CssClass="g-label" runat="server" Text="Memo: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-row: 5;">
                <dx:ASPxLabel ID="ASPxLabel4" CssClass="g-label" runat="server" Text="Reference Number: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-row: 6;">
                <dx:ASPxLabel ID="ASPxLabel5" CssClass="g-label" runat="server" Text="Date: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 2; grid-row: 1;">
                <dx:ASPxTextbox ID="ASPxTextbox2" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
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
              <div style="grid-column: 2; grid-row: 5;">
                <dx:ASPxTextbox ID="ASPxTextbox3" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 2; grid-row: 6;">
                <dx:ASPxTextbox ID="ASPxTextbox4" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 1;">
                <dx:ASPxLabel ID="ASPxLabel24" CssClass="g-label" runat="server" Text="Remit To Name: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 2;">
                <dx:ASPxLabel ID="ASPxLabel25" CssClass="g-label" runat="server" Text="Remit To Address1: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 3;">
                <dx:ASPxLabel ID="ASPxLabel26" CssClass="g-label" runat="server" Text="Remit To Address2: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 4;">
                <dx:ASPxLabel ID="ASPxLabel7" CssClass="g-label" runat="server" Text="Remit To City: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 5;">
                <dx:ASPxLabel ID="ASPxLabel8" CssClass="g-label" runat="server" Text="Remit To State: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 6;">
                <dx:ASPxLabel ID="ASPxLabel9" CssClass="g-label" runat="server" Text="Terms: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 3; grid-row: 7;">
                <dx:ASPxLabel ID="ASPxLabel10" CssClass="g-label" runat="server" Text="Item Class: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 1;">
                <dx:ASPxTextbox ID="ASPxTextbox5" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 2;">
                <dx:ASPxTextbox ID="ASPxTextbox7" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 3;">
                <dx:ASPxTextbox ID="ASPxTextbox14" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 4;">
                <dx:ASPxTextbox ID="ASPxTextbox21" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 5;">
                <dx:ASPxTextbox ID="ASPxTextbox22" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 6;">
                <dx:ASPxTextbox ID="ASPxTextbox23" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 4; grid-row: 7;">
                <dx:ASPxTextbox ID="ASPxTextbox24" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
                <br />
              </div>
              <div style="grid-column: 5; grid-row: 1;">
                <dx:ASPxLabel ID="ASPxLabel28" CssClass="g-label" runat="server" Text="Remit To Zip: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 5; grid-row: 2;">
                <dx:ASPxLabel ID="ASPxLabel11" CssClass="g-label" runat="server" Text="Status: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 5; grid-row: 3;">
                <dx:ASPxLabel ID="ASPxLabel12" CssClass="g-label" runat="server" Text="Freight: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 5; grid-row: 4;">
                <dx:ASPxLabel ID="ASPxLabel13" CssClass="g-label" runat="server" Text="Tax: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 5; grid-row: 5;">
                <dx:ASPxLabel ID="ASPxLabel14" CssClass="g-label" runat="server" Text="Total: "></dx:ASPxLabel>
                <br />
              </div>
              <div style="grid-column: 6; grid-row: 1;">
                <dx:ASPxTextbox ID="ASPxTextbox9" CssClass="g-label" runat="server" Text=""></dx:ASPxTextbox>
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
            </div>
            <div id="optionalHeader2" style="width: 100%; display: grid; justify-content:left; grid-row: 4; grid-gap: 10px; overflow: hidden" class="divwhite">
              <div style="grid-row: 1;">
                <dx:ASPxLabel ID="ASPxLabel33" CssClass="g-label" runat="server" Text="Expenses "></dx:ASPxLabel>
                <br />
              </div>
              <div style="display:flex;justify-content:center;">
                <dx:ASPxGridView ID="invoiceGrid" runat="server" SettingsText-ToolbarShowFooter="True" AutoGenerateColumns="False">
                  <Settings ShowFooter="True"></Settings>
                  <SettingsDataSecurity AllowEdit="False" AllowDelete="False" AllowInsert="False"></SettingsDataSecurity>
                  <Columns>
                    <dx:GridViewCommandColumn VisibleIndex="0" ShowDeleteButton="True"></dx:GridViewCommandColumn>
                    <dx:GridViewDataTextColumn FieldName="GL_Account" VisibleIndex="1"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="GL_DESC" VisibleIndex="2" ReadOnly="True"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="Amount" VisibleIndex="3"></dx:GridViewDataTextColumn>
                  </Columns>
                  <TotalSummary>
                    <dx:ASPxSummaryItem ShowInColumn="Amount" ShowInGroupFooterColumn="Amount" SummaryType="Sum" FieldName="Amount"></dx:ASPxSummaryItem>
                  </TotalSummary>
                  <Settings ShowFooter="true" />
                </dx:ASPxGridView>
              </div>
            </div>
            <div id="optionalHeader3" style="width: 100%; display: grid; justify-content:left; grid-row: 5; grid-gap: 10px; overflow: hidden" class="divwhite">
              <div style="grid-row: 1;">
                <dx:ASPxLabel ID="ASPxLabel34" CssClass="g-label" runat="server" Text="Items "></dx:ASPxLabel>
                <br />
              </div>
              <div id="itemsHolder" style="grid-column:1; grid-row:2;">
                <dx:ASPxGridView ID="vbSummary" runat="server" AutoGenerateColumns="True" KeyFieldName="Vendor_Bill_No"></dx:ASPxGridView>
              </div>
            </div>
              </div>
            </div>
          </div>
    </form>
   </body>
  </html>