<%@ Page Language="C#" AutoEventWireup="true" CodeFile="VendorbillDetails.aspx.cs" Inherits="Accounting_AR_Default" %>

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

    .section-1 {
        display: grid;
        grid-template-columns: auto auto auto auto;
        padding: 15px;
    }

    .box-1 {
        display: grid;
        padding: 20px;
    }

    .formchild-box-1 {
        padding: 15px;
    }

    .formlabelinputContainer {
        display: flex;
        justify-content: space-between;
    }

        .formlabelinputContainer > label, input {
            margin-top: 10px;
        }


        .formlabelinputContainer > input {
            border-radius: 5px;
            border-style: none;
            border: 1px solid black;
        }

            .formlabelinputContainer > input[type=date] {
                width: 165px;
            }

        .formlabelinputContainer > select {
            margin-top: 10px;
            height: 20px;
            width: 165px;
            border-radius: 5px;
        }







    /*section -2 styl here below  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

    .section-2 {
        display: grid;
        grid-template-columns: auto auto;
        padding: 15px;
    }

    .box-2 {
        display: grid;
        padding: 20px;
    }

    .formchild-box-2 {
        padding: 15px;
    }

    .formlabelinputContainer-2 {
    }

        .formlabelinputContainer-2 > label, input {
            margin-top: 10px;
        }


        .formlabelinputContainer-2 > input {
            width: 80%;
            border-radius: 5px;
            border-style: none;
        }

            .formlabelinputContainer-2 > input:focus {
                outline: none;
            }

            .formlabelinputContainer-2 > input[type=date] {
                width: 165px;
            }

        .formlabelinputContainer-2 > select {
            margin-top: 10px;
            height: 20px;
            width: 165px;
            border-radius: 5px;
        }






    /*here is section 3 code section 3 is copy of section one but new thing is box-3 and */

    .section-3 {
        display: grid;
        grid-template-columns: auto auto auto auto;
        padding: 15px;
    }

    .box-3 {
        display: grid;
        padding: 20px;
    }

    .formchild-box-3 {
        padding: 15px;
    }

    .formlabelinputContainer-3 {
        display: flex;
        justify-content: space-between;
    }

        .formlabelinputContainer-3 > label, input {
            margin-top: 10px;
        }


        .formlabelinputContainer-3 > .span > input {
            border-radius: 5px;
            border-style: none;
            border: 1px solid black;
        }

        .formlabelinputContainer-3 > input[type=date] {
            width: 165px;
        }

        .formlabelinputContainer-3 > select {
            margin-top: 10px;
            height: 20px;
            width: 165px;
            border-radius: 5px;
        }

    .span > select {
        margin-top: 10px;
        height: 20px;
        width: 165px;
        border-radius: 5px;
    }

    .span > input {
        border-radius: 5px;
        border-style: none;
        border: 1px solid black;
    }

        .span > input[type=date] {
            border-radius: 5px;
            border-style: none;
            width: 165px;
            border: 1px solid black;
        }

    input::placeholder {
        float: right;
    }



    .box-3 {
        display: flex;
    }

    .box-3 {
        display: flex;
    }


    /*for section 2 table*/




    .section-2 {
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


@media screen and (max-width:1280px){
    .section-1 {
        display:grid;
          grid-template-columns: auto auto;

        padding: 15px;
        
       
      
    }
    .box-1{
        
    
    }
}
@media screen and (max-width:776px){
    .section-1 {
        display:grid;
          grid-template-columns: auto;

        padding: 15px;
        
       
      
    }
    .box-1{
        
    
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
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Vendor Bill No</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Vendor Bill</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Memo</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Reference Number </label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Date</label>
                        <span class="span">:&nbsp;<input type="date" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Due Date</label>
                        <span class="span">:&nbsp;<input type="date" /></span>
                    </div>
                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Remit To Name</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label>Address 1</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label>Address 2</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label>City</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label>State</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label>State</label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>


                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Terms </label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>

                    <div class="formlabelinputContainer">

                        <label for="Status">Status</label>

                        <span class="span">:&nbsp<select id="Status">
                            <option value="OPEN">OPEN</option>
                            <option value="CLOSED">CLOSED</option>

                        </select>
                        </span>
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="terms">Item Class</label>

                        <span class="span">:&nbsp  
                            <select id="terms">
                                <option value="terms">terms</option>
                                <option value="terms">terms</option>
                                <option value="terms">terms</option>
                                <option value="terms">terms</option>
                            </select></span>
                    </div>
                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Freight </label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Tax </label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Total </label>
                        <span class="span">:&nbsp;<input type="text" /></span>
                    </div>

                </form>
            </div>
        </section>
        <section class="section-2"  style="overflow-x:auto;">

            <table style="width: 100%">
                <tr>
                    <th>GL Account </th>
                    <th>GL Description </th>
                    <th>Amount</th>
                    <th>Memo </th>

                </tr>
                <tr class="hightlight">
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>




                </tr>
                <tr>
                    <td>2</td>
                    <td>1</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>1</td>
                    <td></td>
                    <td></td>

                </tr>
            </table>
        </section>
        <section class="section-2 "  style="overflow-x:auto;">

            <table style="width: 100%">
                <tr>
                    <th> BOI_UID </th>
                    <th>Model #  </th>
                    <th>Quantity</th>
                    <th>Cost </th>
                    <th> Extended Cost </th>
                </tr>
                <tr class="hightlight">
                    <td>1</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>



                </tr>
                <tr>
                    <td>2</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </section>
    </form>
</body>
</html>
