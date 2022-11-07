 <%@ Page Language="C#" AutoEventWireup="true" CodeFile="InvoiceDetail1.aspx.cs" Inherits="Accounting_AR_Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<style>
    * {
        margin: 0px
    }

    .navbar {
        background-color: #A4D5E0;
        padding: 10px;
    }

        .navbar h1 {
            color: #52528E;
        }

    .section-1 {
        padding: 15px;
    }

    table, th, td, tr {
        border: 1px solid gray;
        padding: 10px;
        border-collapse: collapse;
    }

    th {
        background-color: #A4D5E0;
    }

    .hightlight {
        background-color: #F8C802;
    }

    tr:hover {
        background-color: #F8C802;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        top: 180px;
        right: 50px;
        background-color: #f1f1f1;
        min-width: 400px;
        overflow: auto;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

        .dropdown-content > nav {
            display: flex;
            justify-content: space-between;
            background-color: #F8C802;
        }

            .dropdown-content > nav > button {
                margin: 5px;
            }

    .dropdown a:hover {
        background-color: #ddd;
    }

    .show {
        display: block;
    }

    .inside {
        margin: 30px;
    }

    .insidechild {
        display:flex;
        justify-content:space-between;
        padding-top:10px;
    }
      .insidechild>input {
          border-style:none;
border-radius:5px;      
border:1px solid black

    }
         .insidechild>input[type="date"] {
width:165px;

    }
</style>
<body>
    <form id="form1" runat="server">
        <nav class="navbar">
            <h1>OPEN</h1>
            <p>OSOT209597</p>
        </nav>
        <section class="section-1" style="overflow-x:auto">
            <fieldset class="fieldset">
                <legend class="legend"><span>Items</span>&nbsp;	<span>INventory</span>&nbsp;	<span>Auto PO</span></legend>
                <table style="width: 100%">
                    <tr>
                        <th>Item Num</th>
                        <th>Order Qty </th>
                        <th>Ship Qty</th>
                        <th>Manufacturer </th>
                        <th>Model</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Item Class </th>
                        <th>Details</th>
                    </tr>
                    <tr class="hightlight">
                        <td>1</td>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>$0.00</td>
                        <td></td>
                        <td></td>
                        <td><a href="#" onclick="myFunction()" class="dropbtn">More Details</a></td>
                        <div class="dropdown">
                            <div id="myDropdown" class="dropdown-content">

                                <nav>
                                    <span>More Details</span>
                                    <button>X</button>
                                </nav>
                                <div>
                                    <fieldset class="inside">
                                        <legend>Item Details:</legend>
                                        <div class="insidechild">
                                            <label for="Order Item UID ">Order Item UID :</label>
                                            <input type="text"  />
                                        </div>
                                        <div class="insidechild">
                                            <label for="lname">UOM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                :</label>
                                            <input type="text"  / >
                                        </div>
                                        <div class="insidechild">
                                         <label for="Product Description">Product Description<br/> [Item Comment] :</label>
                                            <textarea style="resize:none"  rows="5" cols="20"></textarea>
                                        </div>
                                    </fieldset>
                                </div>

                                 <div>
                                    <fieldset class="inside">
                                        <legend>Product Details:</legend>
                                        <div class="insidechild">
                                            <label for="Order Item UID ">Ship Date :</label>
                                            <input type="date" />
                                        </div>
                                        <div class="insidechild">
                                            <label for="lname">Tracking Number :</label>
                                            <input type="text" />
                                        </div>
                                          <div class="insidechild">
                                            <label for="date">Acct Sent Date  :</label>
                                            <input type="date" />
                                        </div>
                                         
                                        <div class="insidechild">
                                         <label for="Product Description">Sales Order  :</label>
                                           
                                            <textarea style="resize:none" rows="5" cols="20"></textarea>
                                        </div>
                                    </fieldset>
                                </div>
                        </div>
                        </div>


                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>$0.00</td>
                        <td></td>
                        <td></td>
                        <td><a href="#" onclick="myFunction()">More Details</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>$0.00</td>
                        <td></td>
                        <td></td>
                        <td><a href="#" onclick="myFunction()">More Details</a></td>
                    </tr>
                </table>
            </fieldset>
        </section>
    </form>

    <script>
        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        } <a href="VendorBillDetailItems.aspx">VendorBillDetailItems.aspx</a>

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    </script>

</body>
</html>
