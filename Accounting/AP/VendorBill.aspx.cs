using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Dapper;
using DevExpress.Web;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Text;
using System.Web.Configuration;
using System.Web.Services;

public partial class Accounting_AP_VendorBill : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {



        setData();


    }

    protected DataTable getExpensesTable()
    {
        DataTable table = new DataTable();
        table.Columns.Add("Vendor Bill No", typeof(string));
        table.Columns.Add("GL Account", typeof(string));
        table.Columns.Add("Amount", typeof(string));
        table.Columns.Add("Memo", typeof(string));
        table.Columns.Add("GL_DESC", typeof(string));

        table.Rows.Add("VGMT107875", "50000", ""$"4.00", "null", "Cost of Goods Sold");
        table.Rows.Add("VGMT107875", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VGMT107875", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VGMT138951", "50000", ""$"0.00", "null", "Cost of Goods Sold");
        table.Rows.Add("VGMT138951", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VGMT138951", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VJQN11603", "100001", ""$"260.00", "null", "null");
        table.Rows.Add("VJQN11603", "FREIGHT", ""$"0.00", "null", "null");
        table.Rows.Add("VJQN11603", "TAX", ""$"0.00", "null", "null");
        table.Rows.Add("VLLM74021", "50000", ""$"125.00", "null", "Cost of Goods Sold");
        table.Rows.Add("VLLM74021", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VLLM74021", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VLLM74116", "50000", ""$"1,447.75", "null", "Cost of Goods Sold");
        table.Rows.Add("VLLM74116", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VLLM74116", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VLLM81175", "50000", ""$"4,667.46", "null", "Cost of Goods Sold");
        table.Rows.Add("VLLM81175", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VLLM81175", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VRNB50441", "50000", "-"$"90.00", "null", "Cost of Goods Sold");
        table.Rows.Add("VRNB50441", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VRNB50441", "61102", "-"$"10.00", "null", "Sales Tax");
        table.Rows.Add("VRNB73573", "50000", ""$"75.00", "null", "Cost of Goods Sold");
        table.Rows.Add("VRNB73573", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VRNB73573", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VTSA129192", "50000", ""$"4,590.86", "null", "Cost of Goods Sold");
        table.Rows.Add("VTSA129192", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VTSA129192", "61102", ""$"0.00", "null", "Sales Tax");
        table.Rows.Add("VTSA92794", "50000", ""$"480.00", "null", "Cost of Goods Sold");
        table.Rows.Add("VTSA92794", "50002", ""$"0.00", "null", "Freight");
        table.Rows.Add("VTSA92794", "61102", ""$"0.00", "null", "Sales Tax");


        return table;

    }

    protected void setData()
    {

        vbSummary.DataSource = GetVBSummaryTable();

        vbSummary.DataBind();

    }


    public DataTable GetVBSummaryTable()
    {
        // check if the table has been created
        
            // build table (or retrieve from database)
        DataTable table = new DataTable();
        table.Columns.Add("Vendor Bill No", typeof(string));
        table.Columns.Add("BOI_UID", typeof(string));
        table.Columns.Add("Model #", typeof(string));
        table.Columns.Add("Quantity", typeof(string));
        table.Columns.Add("Order Unit Cost", typeof(string));
        table.Columns.Add("Extended Cost", typeof(string));

        table.Columns.Add("Amount", typeof(string));
        table.Columns.Add("Extended Amount", typeof(string));

        table.Rows.Add("VGMT107875", "OGMT172839-2", "Test Item 99", "1", "1", "1", "1", "1");
        table.Rows.Add("VGMT107875", "OGMT172839-3", "Test Item 99", "3", "1", "3", "1", "3");
        table.Rows.Add("VGMT138951", "OGMT209808-1", "Model#", "1", "0", "0", "5", "5");
        table.Rows.Add("VJQN11603", "OGTR410261-1", "W62-ACB-U7.875-L11.25-CC-*/1/2-HL-1-8L-SW/T", "1", "260", "260", "260", "260");
        table.Rows.Add("VLLM74021", "OJAB1332066-.07", "EMS Custom Mounting Kit", "1", "125", "125", "125", "125");
        table.Rows.Add("VLLM74116", "OJAB1344471-1", "50140141V2B0", "1", "1447.75", "1447.75", "1447.75", "1447.75");
        table.Rows.Add("VLLM81175", "OSTK141917-1", "BBP-Masks", "1", "57.56", "57.56", "57.56", "57.56");
        table.Rows.Add("VLLM81175", "OSTK141917-2", "BBP-Gloves-XL", "1", "63.8", "63.8", "63.8", "63.8");
        table.Rows.Add("VLLM81175", "OSTK141917-3", "BBP-GEL-Sanitizer", "18", "15.47", "278.46", "15.47", "278.46");
        table.Rows.Add("VLLM81175", "OSTK141917-4", "BBP-FOAM-Sanitizer", "7", "127.18", "890.26", "127.18", "890.26");
        table.Rows.Add("VLLM81175", "OSTK141917-5", "BBP-Disinfectant-Wipes", "110", "29.55", "3250.5", "29.55", "3250.5");
        table.Rows.Add("VLLM81175", "OSTK141917-6", "BBP-PaperTowels", "2", "25.56", "51.12", "25.56", "51.12");
        table.Rows.Add("VLLM81175", "OSTK141917-7", "BBP-ToiletPaper", "2", "37.88", "75.76", "37.88", "75.76");
        table.Rows.Add("VRNB73573", "OMNL1276474-2.6", "Labor Rate - BRV", "1", "75", "75", "75", "75");
        table.Rows.Add("VTSA129192", "OSMR1985061-1", "On Site Service", "1", "4590.86", "4590.86", "4590.86", "4590.86");
        table.Rows.Add("VTSA92794", "OJAB1532881-1", "7-2533FTTTF1LD / JFC085S  / IMYZD001", "1", "480", "480", "480", "480");


        return table;
    }


}

