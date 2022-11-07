<%@ Page Language="C#" AutoEventWireup="true" CodeFile="InvoiceDetailTerms.aspx.cs" Inherits="Accounting_AR_Default" %>

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
        padding: 10px;
    }

  .box-3 {
    display: flex;
    justify-content: space-between;
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


        .formlabelinputContainer-3 > input {
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

        input::placeholder{
            float:right;
        }



.box-3{
    display:flex;
}

.box-3{
    display:flex;
}


@media screen and (max-width:1200px){
     .section-1,.section-3  {
        display: grid;
        grid-template-columns: auto auto ;
        padding: 15px;
    }
}
@media screen and (max-width:776px){
     .section-1,.section-3  {
        display: grid;
        grid-template-columns: auto;
        padding: 15px;
    }
       .section-2 {
        display: grid;
        grid-template-columns: auto ;
        padding: 15px;
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
                        <label>Invoice Number</label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Order Number</label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Ship Date</label>
                        <input type="date" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Invoice Date</label>
                        <input type="date" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Due Date</label>
                        <input type="date" />
                    </div>

                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>PO# </label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Salesman">Salesman</label>

                        <select id="Salesman">
                            <option value="Salesman">Salesman</option>
                            <option value="Salesman">Salesman</option>
                            <option value="Salesman">Salesman</option>
                            <option value="Salesman">Salesman</option>
                        </select>

                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Office">Office</label>

                        <select id="Office">
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>

                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Bill to Name </label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="terms">terms</label>

                        <select id="terms">
                            <option value="terms">terms</option>
                            <option value="terms">terms</option>
                            <option value="terms">terms</option>
                            <option value="terms">terms</option>
                        </select>
                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Status">Status</label>

                        <select id="Status">
                            <option value="OPEN">OPEN</option>
                            <option value="CLOSED">CLOSED</option>

                        </select>
                    </div>

                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1-">
                    <div class="formlabelinputContainer">
                        <label>Acct Paid [QB Paid] </label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Paid Date [QB Paid Date] </label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Total Sell </label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Total Shipping Cost</label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Total Tax</label>
                        <input type="text" />
                    </div>

                </form>
            </div>
        </section>
        <section class="section-2">
            <div class="box-2">
                <form class="formchild-box-2">
                    <fieldset>
                        <legend>bill to Address:</legend>
                        <div class="formlabelinputContainer-2">
                            <label>Bill to Name</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Bill to Address 1</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Bill to Address 2</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Bill to City</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Bill to State</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Bill to Zip Code</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </form>
            </div>

            <div class="box-2">
                <form class="formchild-box-2">
                    <fieldset>
                        <legend>Ship to Address:   </legend>
                        <div class="formlabelinputContainer-2">
                            <label>Ship to Name </label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Ship to Address 1 </label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Ship to Address 2 </label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Ship to City</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Ship to State</label>
                            <input type="text" />
                        </div>
                        <div class="formlabelinputContainer-2">
                            <label>Ship to Zip Code</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </form>

            </div>
        </section>
       <section class="section-3">
            <div class="box-1">
                <form class="formchild-box-1">
                    <div class="formlabelinputContainer">
                        <label>Shipping Cost</label>
                        <input type="text"  placeholder="$0.00" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Freight Taxable</label>
                        <input type="text"   placeholder="$0.00" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Unbilled Freight</label>
                        <input type="text"   placeholder="$0.00" />
                    </div>
                </form>
            </div>
            <div class="box-1">
                <form class="formchild-box-1">
                   
                    <div class="formlabelinputContainer">

                        <label for="Salesman">State</label>

                        <select id="Salesman">
                            <option value="Salesman">Salesman</option>
                            <option value="Salesman">Salesman</option>
                            <option value="Salesman">Salesman</option>
                            <option value="Salesman">Salesman</option>
                        </select>

                    </div>
                    <div class="formlabelinputContainer">

                        <label for="Office">County</label>

                        <select id="Office">
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>
                      <div class="formlabelinputContainer">

                        <label for="Office">City</label>

                        <select id="Office">
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>
                       <div class="formlabelinputContainer">

                        <label for="Office">Tax Code 4 </label>

                        <select id="Office">
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="box-3">
                <form class="formchild-box-3">
                    <div class="formlabelinputContainer">
                        <input type="text"  placeholder="$0.00" />
                    </div>
                       <div class="formlabelinputContainer">
                        <input type="text"  placeholder="$0.00" />
                    </div>
                        <div class="formlabelinputContainer">
                        <input type="text"  pl
                            aceholder="$0.00" />
                    </div>
                        <div class="formlabelinputContainer">
                        <input type="text" />
                    </div>
                  

                </form>
              
                   <form class="formchild-box-1"">
                    <div class="formlabelinputContainer">
                        <input type="text" />
                    </div>
                       <div class="formlabelinputContainer">
                        <input type="text" />
                    </div>
                        <div class="formlabelinputContainer">
                        <input type="text" />
                    </div>
                        <div class="formlabelinputContainer">
                        <input type="text" />
                    </div>
                       <a href="InvoiceDetail1.aspx">InvoiceDetail1.aspx</a>
                     
                </form>
                 
            </div>
            <div class="box-1">
                <form class="formchild-box-1">
                    <div class="formlabelinputContainer">
                        <label>Shipping Cost</label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Freight Taxable</label>
                        <input type="text" />
                    </div>
                    <div class="formlabelinputContainer">
                        <label>Unbilled Freight</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </section>
    </form>
</body>
</html>
