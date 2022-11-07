<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendorBillSearch.aspx.cs" Inherits="Accounting_AP_VendorBillSearch" %><%@ Register assembly="DevExpress.Web.v21.2, Version=21.2.6.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web" tagprefix="dx" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title>Quote Search</title>
    <link rel="stylesheet" href="/StyleSheet.css" />
    <script src="../Scripts/transactionsJS.js"></script>
    <script src="/JavaScript.js?1"></script>
    <style type="text/css">
      .quotesearchbox {
        border-radius: 5px;
        border: 1px solid #3373FF;
        padding: 0px;
        display: inline-block;
      }

      /* .quotesearchbutton{
           background-color: #4CAF50;
           border: none;
           color: white;
           padding: 5% 10%;
           text-align: center;
           text-decoration: none;
           display: inline-block;
           font-size: 16px;
           margin: 12% 15%;
           cursor: pointer;
           float: left;
        }*/
      .header {
        color: #000058;
        font-size: 10px;
        font-weight: 100;
        font-family: sans-serif;
      }

      .grid {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin-left: 0px;
        display: grid;
      }

      .grid td,
      .grid th {
        border: 1px solid #ddd;
        padding: 8px;
      }

      .grid tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      .grid th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #1c4966;
        color: white;
      }

      .searchboxHolder {
        display: grid;
        grid-template-columns: repeat(6, 16%);
        grid-template-rows: repeat(3, 75);
      }

      @media screen and (max-width: 1180px) {
        .searchboxHolder {
          display: flex;
          flex-direction: column;
        }
      }

      .searchboxCol1 {
        grid-column: 1;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol2 {
        grid-column: 2;
        margin-left: 5%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        width: auto;
      }

      .searchboxCol3 {
        grid-column: 3;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol4 {
        grid-column: 4;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol5 {
        grid-column: 5;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol6 {
        grid-column: 6;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol1Row2 {
        grid-row: 2;
        grid-column: 1;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol2Row2 {
        grid-row: 2;
        grid-column: 2;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol3Row2 {
        grid-row: 2;
        grid-column: 3;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol4Row2 {
        grid-row: 2;
        grid-column: 4/6;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol5Row2 {
        grid-row: 2;
        grid-column: 5;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol6Row2 {
        grid-row: 2;
        grid-column: 6;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol1Row3 {
        grid-row: 3;
        grid-column: 1;
        margin-left: 5%;
        margin-right: 5%;
      }

      .searchboxCol2Row3 {
        grid-row: 3;
        grid-column: 2;
        margin-left: 5%;
        margin-right: 5%;
      }

      .mobileMenu {
        overflow: hidden;
        background-color: #29428a;
        position: fixed;
        top: 0;
        z-index: 5;
        font-family: Arial, Helvetica, sans-serif;
        color: #FFF;
        width: 100%;
        display: none;
        height: 5%;
      }

      @media only screen and (max-width: 200px) {
        .mobileMenu {
          display: inline-flex;
        }

        .searchboxHolder {
          display: flex;
          flex-direction: row;
        }

        .searchboxCol1 {
          float: none;
        }

        .searchboxCol2 {
          float: none;
        }

        .searchboxCol3 {
          float: none;
        }

        .searchboxCol4 {
          float: none;
        }

        .searchboxCol5 {
          float: none;
        }

        .divwhite {
          min-width: 0%
        }

        .buttonblue {
          width: 100%;
          float: none;
        }

        .navbar {
          display: none;
        }

        .searchbox {
          width: 95%;
        }
      }
    </style>
    <script type="text/javascript">
        var val;

        function mainMenuBClick(s, e) {
            var nm = e.item.name;
            if (nm == "back") {
                backBPress();
            }
        }

        function quoteDblClick(s, e) {
            var index = e.visibleIndex;
            var key = s.GetRowKey(index);
            window.open("/Quotes/Quote.aspx?id=" + key, "_blank");
        }

        function hidegrid(s, e) {
            if (s.GetVisibleRowsOnPage() > 0) {
                s.SetVisible(true);
                s.SetFocusedRowIndex(0);
            } else {
                s.SetVisible(false);
            }
            //s.SetVisible(s.GetVisibleRowsOnPage() != 0);  
        }
        document.addEventListener("keyup", function (event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                document.getElementById("QuoteSearchBtn").click();
            }
        });

        function setCBOChoice(s, e) {
            s.SetSelectedIndex(-1);
            s.SetText(null);
            s.InsertItem(0, null);
        }

        function setCBOChoice2(s, e) {
            s.SetText(s.GetText());
        }

        function clearQuoteFilters() {
            //clears all filters
            //   document.getElementById('abcStatus').selectedIndex = "0";
            document.getElementById('ddlDateOperator').selectedIndex = "0";
            document.getElementById('StatusComboBox').selectedIndex = "0";
            txtQuoteSearchSC.SetText(null);
            cboabcStatus.SetValue(null);
            searchDate.SetValue(null);
            endDate.SetValue(null);
            txtAccountSearch.SetText(null);
            txtModelNumberSearch.SetText(null);
            txtTagSearch.SetText(null);
            txtReferenceSearch.SetText(null);
            txtAttentionSearch.SetText(null);
            txtMFGSearch.SetText(null);
        }

        function checkForError() {
            var currentURL = window.location.href;
            if (currentURL.includes('id=invalid')) {
                var message = "Not a valid quote number, try again";
                PopToast(message);
            }
            document.getElementById('txtQuoteSearch').focus();
        }
        window.addEventListener("load", checkForError);
        var keyValue;

        function OnMoreInfoClick(element, key) {
            callbackPanel.SetContentHtml("");
            popup.ShowAtElement(element);
            keyValue = key;
        }

        function popup_Shown(s, e) {
            callbackPanel.PerformCallback(keyValue);
        }

        function dateEval() {
            var select = document.getElementById('ddlDateOperator');
            var dateStatus = select.value;
            if (dateStatus == "Between") {
                if (document.getElementById('hiddenDate2').style.display == "none") {
                    showHide('hiddenDate2');
                    showHide('startDate');
                }
            } else {
                if (document.getElementById('hiddenDate2').style.display == "block") {
                    showHide('hiddenDate2');
                    showHide('startDate');
                }
            }
        }
    </script>
  </head>
  <body class="body">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <form id="form1" runat="server"><%--defaultbutton="QuoteSearchBtn" defaultfocus="txtQuoteSearch"--%>
      <uc1:timeoutWarning runat="server" />
      <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
      <div class="mobileMenu"></div>
      <div class="g-navbar">
        <a href="javascript:void(0)" class="closebtn" style="color:grey;" onclick="Expand()">☰</a><%-- DROPDOWN --%>
      </div>
      <div id="pageGri1d" class="pageGridHolder">
        <div id="menuHolder" style="display:flex; flex-direction:column;"></div>
        <div style="display:none;"></div>
        <div id="wholePageHolder" style="display:grid; grid-auto-flow:row; grid-area:site;   transition: margin-left .2s; margin-left:50px;">
          <div class="g-div-header">
            <div class="searchboxRow1-center">
              <dx:ASPxLabel ID="ASPxLabel3" runat="server" Text="Vendor Bill" CssClass="g-title"></dx:ASPxLabel>
            </div>
            <div class="searchboxRow2-center">
              <dx:ASPxLabel ID="ASPxLabel1" runat="server" CssClass="g-label" Text="Enter search terms to find a vendor bill. "></dx:ASPxLabel>
            </div>
          </div>
          <div class="divdivider" style="grid-row:2;"></div>
          <div id="holder" class="searchboxHolder" style="grid-row:3;"><%--Start row 1--%> <div class="searchboxCol1">
              <dx:ASPxLabel ID="ASPxLabel2" CssClass="g-label" runat="server" Text="Vendor Bill ID"></dx:ASPxLabel><%-- Vendor Bill ID --%> <br />
              <dx:ASPxTextBox ID="txtVB" runat="server" ClientInstanceName="txtVB" CssClass="g-textbox">
                <ClientSideEvents Init="function(s, e){s.Focus();}" />
              </dx:ASPxTextBox>
            </div>
            <div class="searchboxCol2"><%-- CREATE DATE --%> <dx:ASPxLabel ID="ASPxLabel9" CssClass="g-label" runat="server" Text="Create Date"></dx:ASPxLabel>
              <asp:DropDownList ID="ddlDateOperator" CssClass="g-dropdown" onchange="dateEval(); return false;" runat="server" Width="170px">
                <asp:ListItem Text="After" Value="After" Selected="True"></asp:ListItem>
                <asp:ListItem Text="Before" Value="Before"></asp:ListItem>
                <asp:ListItem Text="Between" Value="Between"></asp:ListItem>
                <asp:ListItem Text="All Time" Value="All Time"></asp:ListItem>
              </asp:DropDownList>
              <label id="startDate" style="display:none;" class="g-label">Start Date</label>
              <dx:ASPxDateEdit ID="ASPxDateEdit1" ClientInstanceName="searchDate" runat="server">
                <CalendarProperties>
                  <DaySelectedStyle BackColor="#A4D5E0"></DaySelectedStyle>
                  <HeaderStyle BackColor="#F4537A" ForeColor="#FFFFFF" />
                  <FooterStyle BackColor="#FFFFFF" />
                  <WeekNumberStyle ForeColor="#52528E"></WeekNumberStyle>
                </CalendarProperties>
              </dx:ASPxDateEdit>
              <div id="hiddenDate2" style="display:none">
                <asp:Label ID="enddateID" runat="server" CssClass="g-label" Text="End Date"></asp:Label>
                <dx:ASPxDateEdit ID="DateEnd" ClientInstanceName="endDate" runat="server">
                  <CalendarProperties>
                    <DaySelectedStyle BackColor="#A4D5E0"></DaySelectedStyle>
                    <HeaderStyle BackColor="#F4537A" ForeColor="#FFFFFF" />
                    <FooterStyle BackColor="#FFFFFF" />
                    <WeekNumberStyle ForeColor="#52528E"></WeekNumberStyle>
                  </CalendarProperties>
                </dx:ASPxDateEdit>
              </div>
            </div>
            <div class="searchboxCol3">
              <dx:ASPxLabel ID="ASPxLabel5" float="left" runat="server" CssClass="g-label" Text="Vendor Bill"></dx:ASPxLabel><%-- Vendor Bill --%> <br />
              <dx:ASPxTextBox ID="txtAccountSearch" float="left" runat="server" ClientInstanceName="txtAccountSearch" CssClass="g-textbox"></dx:ASPxTextBox>
            </div>
            <div class="searchboxCol4"><%-- Reference Number --%> <dx:ASPxLabel ID="ASPxLabel10" float="left" runat="server" CssClass="g-label" Text="Reference Number"></dx:ASPxLabel>
              <br />
              <dx:ASPxTextBox ID="txtref" runat="server" ClientInstanceName="txtref" CssClass="g-textbox"></dx:ASPxTextBox>
            </div>
            <div class="searchboxCol5"><%-- Remit to Name --%> <dx:ASPxLabel ID="ASPxLabel16" float="left" runat="server" CssClass="g-label" Text="Remit to Name"></dx:ASPxLabel>
              <br />
              <dx:ASPxTextBox ID="txtRemitToName" float="left" runat="server" ClientInstanceName="txtRemitToName" CssClass="g-textbox"></dx:ASPxTextBox>
            </div>
            <div class="searchboxCol6">
              <asp:Button ID="QuoteSearchBtn" runat="server" OnClick="QuoteSearchBtn_Click" Text="Search" CssClass="g-btn" ToolTip="Search for Quotes" />
              <br />
              <asp:Button ID="Button1" runat="server" OnClick="blankVendorBilBtn_Click" Text="New Vendor Bill" CssClass="g-btn" ToolTip="Create new blank vendor bill" />
            </div><%--Start row 2--%><%--  
						<div id="MoreOptions" style="grid-row:2; grid-column:span 5; display:flex; flex-direction:row;">--%> <div class="searchboxCol1Row2"><%-- Payment Type --%> <dx:ASPxLabel ID="ASPxLabel6" runat="server" CssClass="g-label" Text="Payment Type"></dx:ASPxLabel>
              <br />
              <dx:ASPxTextBox ID="txtPType" runat="server" ClientInstanceName="txtPType" CssClass="g-textbox"></dx:ASPxTextBox>
            </div>
            <div class="searchboxCol4Row2" style="display:flex; flex-direction:row;">
              <div style="margin-right:2%;">
                <dx:ASPxLabel ID="ASPxLabel4" float="left" runat="server" CssClass="g-label" Text="Status"></dx:ASPxLabel>
                <br />
                <asp:DropDownList ID="StatusComboBox" CssClass="g-dropdown" runat="server">
                  <asp:ListItem Text="" Selected="true"></asp:ListItem>
                  <asp:ListItem Text="Open"></asp:ListItem>
                  <asp:ListItem Text="Closed"></asp:ListItem>
                  <asp:ListItem Text="Lost"></asp:ListItem>
                  <asp:ListItem Text="SPECIAL"></asp:ListItem>
                  <asp:ListItem Text="Late"></asp:ListItem>
                </asp:DropDownList>
              </div>
              <br />
            </div>
            <div class="searchboxCol5Row2" style="display:flex; flex-direction:row;">
              <div style="margin-right:2%;">
                <dx:ASPxLabel ID="ASPxLabel7" float="left" runat="server" CssClass="g-label" Text="Due Date"></dx:ASPxLabel>
                <br />
                <asp:DropDownList ID="DropDownList1" CssClass="g-dropdown" runat="server" Width="170px"></asp:DropDownList>
              </div>
              <br />
            </div>
            <div id="clearFilters" class="searchboxCol6Row2">
              <asp:Button ID="blankVendorBilBtn" runat="server" OnClick="blankVendorBilBtn_Click" Text="New Blank Vendor Bill" CssClass="g-btn" ToolTip="Create new blank vendor bill" />
              <dx:ASPxHyperLink ID="advOptionsLink" runat="server" Text="Reset Filters">
                <ClientSideEvents Click="function(s,e){clearQuoteFilters()}" />
              </dx:ASPxHyperLink>
            </div>
          </div><%--Start row 3--%> <div class="divdivider"></div>
          <div style="grid-row:4;">
            <asp:UpdatePanel ID="searchResults" runat="server" UpdateMode="Conditional">
              <Triggers>
                <asp:AsyncPostBackTrigger ControlID="QuoteSearchBtn" />
              </Triggers>
              <ContentTemplate>
                <dx:ASPxGridView ID="filteredVBs" runat="server" Font-Names="Helvetica" AutoGenerateColumns="False" ClientInstanceName="filteredVBs" KeyboardSupport="true" KeyFieldName="Invoice_Number" CssClass="g-grid" Width="100%" Font-Size="Large" SettingsBehavior-AllowFocusedRow="true">
                  <ClientSideEvents Init="function(s, e) {
	hidegrid(s, e); 
}" RowCollapsing="function(s, e) {
}" RowDblClick="function(s, e) {
quoteDblClick(s, e)
}" />
                  <SettingsPager Mode="ShowAllRecords" Visible="True"></SettingsPager>
                  <SettingsBehavior AllowSelectByRowClick="true" />
                  <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
                  <Columns>
                    <dx:GridViewDataTextColumn FieldName="Invoice_Number" ReadOnly="True" VisibleIndex="0"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="Order_Number" VisibleIndex="1"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataDateColumn FieldName="Date" VisibleIndex="2"></dx:GridViewDataDateColumn>
                    <dx:GridViewDataTextColumn FieldName="Salesman" VisibleIndex="3"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="Office" VisibleIndex="4"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="Comment" VisibleIndex="5"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataColumn Caption="Details" VisibleIndex="15" Width="15%">
                      <DataItemTemplate>
                        <a href="javascript:void(0);" onclick="OnMoreInfoClick(this, '<%# Container.KeyValue %>')">More Info... </a>
                      </DataItemTemplate>
                    </dx:GridViewDataColumn>
                  </Columns>
                  <Styles>
                    <SelectedRow BackColor="#F8C802"></SelectedRow>
                    <FocusedRow BackColor="#F8C802"></FocusedRow>
                  </Styles>
                </dx:ASPxGridView>
                <div style="align-content:center;">
                  <dx:ASPxLabel ID="lblnoresults" CssClass="g-label" runat="server"></dx:ASPxLabel>
                </div>
              </ContentTemplate>
            </asp:UpdatePanel><%-- SNEAK PEAK  --%> <dx:ASPxPopupControl ID="popup" ClientInstanceName="popup" runat="server" AllowDragging="true" PopupHorizontalAlign="OutsideRight" HeaderText="Quote Sneak Peak">
              <ContentCollection>
                <dx:PopupControlContentControl runat="server">
                  <dx:ASPxCallbackPanel ID="callbackPanel" ClientInstanceName="callbackPanel" runat="server" Width="320px" Height="100px" OnCallback="callbackPanel_Callback" RenderMode="Table">
                    <PanelCollection>
                      <dx:PanelContent runat="server">
                        <dx:ASPxGridView ID="vbDetails" runat="server" AutoGenerateColumns="False" CssClass="g-grid">
                          <Columns>
                            <dx:GridViewDataTextColumn FieldName="Item Number" VisibleIndex="0"></dx:GridViewDataTextColumn>
                            <dx:GridViewDataTextColumn FieldName="Model#" VisibleIndex="2"></dx:GridViewDataTextColumn>
                            <dx:GridViewDataTextColumn FieldName="Quantity" VisibleIndex="1"></dx:GridViewDataTextColumn>
                            <dx:GridViewDataTextColumn FieldName="Line Item Total Price" ReadOnly="True" VisibleIndex="3"></dx:GridViewDataTextColumn>
                          </Columns>
                        </dx:ASPxGridView>
                      </dx:PanelContent>
                    </PanelCollection>
                  </dx:ASPxCallbackPanel>
                </dx:PopupControlContentControl>
              </ContentCollection>
              <SettingsAdaptivity Mode="OnWindowInnerWidth" SwitchAtWindowInnerWidth="800" />
              <ClientSideEvents Shown="popup_Shown" />
            </dx:ASPxPopupControl>
          </div>
        </div>
        <div id="snackbar" runat="server">Some text some message..</div>
      </div>
    </form>
  </body>
</html>