using Dapper;
using DevExpress.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

public partial class Service_ProgressBar : System.Web.UI.UserControl
{

    /// <summary>
    /// this is a dynamic bubble nav that is loaded with nav anf images on each parent page load 
    /// </summary>
    private int percent;
    public int Percent
    {
        get{return percent;}
        set{percent = value;}
    }

    private int num;
    public int Num
    {
        get { return num; }
        set { num = value; }
    }

    private string[] icons;
    public string[] Icons
    {
        get { return icons; }
        set { icons = value; }
    }

    private string[] titles;
    public string[] Titles
    {
        get { return titles; }
        set { titles = value; }
    }


    private string[] navigate;
    public string[] Navigate
    {
        get { return navigate; }
        set { navigate = value; }
    }



    protected void Page_Load(object sender, EventArgs e)
    {
        container.Controls.Add(generateProgressTracker(num, icons, titles, navigate));

        Page.ClientScript.RegisterStartupScript(Page.GetType(),
        "MoveProgress",
        "move("+percent+", [3,3,3,3,3])", true);
    }

    public HtmlGenericControl generateProgressTracker(int numCheckpoints, string[] images, string[] labels, string[] navigateFuncs)
    {

        // creating Pizza tracker div =================================================
        System.Web.UI.HtmlControls.HtmlGenericControl progressdiv =
        new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
        progressdiv.ID = "progressdiv";
        progressdiv.Attributes.Add("class", "grid-progress");
        progressdiv.Attributes.Add("style", "grid-area: progress; width: 90%; margin: 10px");

        System.Web.UI.HtmlControls.HtmlGenericControl progressBarParent =
        new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
        progressBarParent.Attributes.Add("style", "grid-area: pizza;");
        progressBarParent.Attributes.Add("class", "progressBarParent");
        progressBarParent.Attributes.Add("id", "parentdiv1");
        progressdiv.Controls.Add(progressBarParent);

        System.Web.UI.HtmlControls.HtmlGenericControl barDiv =
        new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
        barDiv.Attributes.Add("class", "barcontainer");
        progressBarParent.Controls.Add(barDiv);

        System.Web.UI.HtmlControls.HtmlGenericControl filledDiv =
        new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
        filledDiv.Attributes.Add("class", "progressbar");
        filledDiv.Attributes.Add("id", "barFilled");
        barDiv.Controls.Add(filledDiv);

        int offset = 0;
        string left = "left: " + offset + "%";

        for (int i = 0; i < numCheckpoints; i++)
        {
            System.Web.UI.HtmlControls.HtmlGenericControl check =
            new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
            //if (i < titles.Length && titles[i] == "Exit")
            //{
            //    check.Attributes.Add("class", "exitBubble checkpoint");
            //}
            //else
            //{
            //    check.Attributes.Add("class", "checkpoint");
            //}
            check.Attributes.Add("class", "checkpoint");
            check.Attributes.Add("style", left);
            if (i < navigate.Length)
            {
                check.Attributes.Add("onclick", navigateFuncs[i]);
                
                if (i == navigate.Length - 1)
                {
                    check.ID = ("exitDiv");
                }
            }
            if (labels != null && i < labels.Length)
            {
                check.Attributes.Add("title", labels[i]);
            }

            if (i < images.Length)
            {
                Image icon = new Image();
                icon.ImageUrl = images[i];
                icon.Attributes.Add("style", "padding: 8px; margin: auto");
                icon.ImageAlign = ImageAlign.Middle;
                check.Controls.Add(icon);
                progressBarParent.Controls.Add(check);
            }

            offset += (int)100 / (numCheckpoints - 1);
            left = "left: " + offset + "%";
        }

        return progressdiv;
    }

    protected string getOrderNo()
    //gets the current quote number from URL
    {
        try
        {
            string quoteNo = Request.QueryString["id"].Split('-')[0].Replace('&', ' ').Replace('/', ' '); //getting everything left of a - incase of injection
            if (quoteNo[0] == 'O')
            {
                return quoteNo;
            }
            else
            {
                Response.Redirect("/QuoteSearch.aspx?id=invalid");
                return "not a valid quote number";
            }

        }
        catch (NullReferenceException e)
        {
            Response.Redirect("/QuoteSearch.aspx?id=invalid");
            return "not a valid quote number";
        }


    }

    protected User GetUser()
    {
        return (User)Session["User"];
    }

    protected void WorkQgrid_AddWorkQNote(string label )
    {


        var procedure = "Add_WQ_Note_Web";
        //P1 = AccountID, P2 = User making the note
        var values = new { xTYPE = "ADD_OPEN", xID = getOrderNo(), xUSERID = GetUser().fullName, xNOTE = label, xACTION_CODE = string.Empty, xNA_DTE = string.Empty, EntID = getOrderNo(), Tag = "Orders" };
        using (var connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["AROMSConnectionString"].ConnectionString))
        {
            connection.Query(procedure, values, commandType: CommandType.StoredProcedure);
        }

        Session["Order"] = null;

    }




    protected void createCallback_Callback(object source, CallbackEventArgs e)
    {
        string noteText = e.Parameter;
        WorkQgrid_AddWorkQNote(noteText);
    }

}