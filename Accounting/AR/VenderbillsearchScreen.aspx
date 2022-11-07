<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VenderbillsearchScreen.aspx.cs" Inherits="Accounting_AR_Default" %>

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
        text-align: center;
    }

    .section-1 {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }

    .box-1 {
    }

    .formchild-box-1 {
        padding: 15px;
    }

    .formlabelinputContainer {
        margin: 5px 20px;
        display: flex;
        justify-content: space-between;
    }

        .formlabelinputContainer > label, input {
            margin-top: 10px;
        }
        .span>input{
             border-radius: 5px;
            border-style: none;
            border: 1px solid black;
        }
        .span>select{
             margin-top: 10px;
            height: 20px;
            width: 165px;
            border-radius: 5px;
        }

        .formlabelinputContainer > input {
            border-radius: 5px;
            border-style: none;
            border: 1px solid black;
        }

            .span > input[type=date] {
                width: 165px;
            }

        

    /*for table*/

    .section-2 {
        margin-top: 20px;
   
        }



    table, th, td, tr {
        border: 1px solid gray;
        padding: 5px;
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
        min-width: 600px;
        overflow: auto;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

        .dropdown-content > nav {
            display: flex;
            justify-content: space-between;
            background-color: #F8C802;
            padding:5px;
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
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }

        .insidechild > input {
            border-style: none;
            border-radius: 5px;
            border: 1px solid black
        }

            .insidechild > input[type="date"] {
                width: 165px;
            }

.tableheaderinsidemore{
    display:grid;
         background-color: #A4D5E0;
     
        grid-template-columns: auto auto auto auto;
}
.

.tableheaderinsidemore>div{
padding:5px;
border:1px solid black;
}
.tablebodyinsidemore
{
        display:grid;
        flex-wrap:wrap;
                grid-template-columns: auto auto auto auto;


}

@media screen and (max-width:992px){
     .section-1 {
        display: grid;
        grid-template-columns: auto auto ;
    }
}
@media screen and (max-width:576px){
     .section-1 {
        display: grid;
        grid-template-columns: auto;
    }
.section-2{
    margin:10px;
}
}

</style>
<body>
    <form id="form1" runat="server">
        <nav class="navbar">
            <h1>OPEN</h1>
            <p>OSOT209597</p>
        </nav>
        <section class="section-1">
            <div class="box-1">
                <form class="formchild-box-1">

                    <div class="formlabelinputContainer">
                        <label>Vendor Bill ID </label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Vendor Bill ">Vendor Bill </label>

                        <span class="span">:&nbsp;<input type="text" /></span>


                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Reference Number">Reference Number</label>
                        <span class="span">:&nbsp;<input type="text" /></span>

                    </div>


                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Date </label>
                        <span class="span">:&nbsp;<input type="date" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="date">Due Date</label>

                        <span class="span">:&nbsp;<input type="date" /></span>


                    </div>
                    <div class="formlabelinputContainer">

                        <label for="name">Remit to Name </label>

                        <span class="span">:&nbsp;<input type="text" /></span>

                    </div>

                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">

                    <div class="formlabelinputContainer">

                        <label for="Payment">Payment type </label>

                        <span class="span">:&nbsp;<select id="Payment">
                            <option value="online">online</option>
                            <option value="online">cash</option>
                            <option value="online">Debitcard</option>
                            <option value="online">CreditCard</option>
                        </select>
                            </span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Status">Status</label>
<span class="span">:&nbsp;
                        <select id="Status">
                            <option value="OPEN">OPEN</option>
                            <option value="CLOSED">CLOSED</option>

                        </select>
    </spa>
                    </div>

                </form>
            </div>


        </section>
    

    </form>
       <section class="section-2" style="overflow-x:auto;">
           
                <table style="width:100%"   >
                    <tr>
                        <th>Vendor Bill ID</th>
                        <th>Vendor Bill </th>
                        <th>Reference Number</th>
                        <th>Create Date </th>
                        <th>Due Date </th>
                        <th>Remit to Name</th>
                        <th>Total</th>
                        <th>Payment type</th>
                        <th>Status </th>
                        <th> details</th>
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
                            <div class="dropdown">
                            <div id="myDropdown" class="dropdown-content">

                                <nav>
                                    <span><span>New VB from PO</span> <span>New Blank VB</span> <span>VB Credit 
</span></span>
                                    <button>X</button>
                                </nav>
                                <div class="tableinsidemore">
                                  <div class="tableheaderinsidemore">
                                      <div >Unique ID</div>
                                       <div>Quantity</div>
                                       <div>MOdel</div>
                                       <div>Line Item Total Price</div>
                                       <div>OLSP196571</div>
                                       <div>1</div>
                                       <div>DY1520-NBMBA2-2N/SCT</div>
                                       <div>4852</div>
                                   
                                  </div>
                                   
                                </div>

                               
                        </div>
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
                   
                </table>
        </section>
    <script>
        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

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
