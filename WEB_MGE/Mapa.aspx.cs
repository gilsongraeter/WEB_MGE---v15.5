﻿using System;
using MySql.Data.MySqlClient;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WEB_MGE
{
    public partial class Mapa : System.Web.UI.Page
    {
        #region Atributos
        #endregion

        #region Metodos
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Variaveis_Globais.PerfilUsuario == null)
            {
                Response.Redirect("Login.aspx");
            }

            Label1.Text = Variaveis_Globais.Cliente;
            //Page.ClientScript.RegisterClientScriptInclude("FormScript", "scripts/Map.js");
            //ScriptManager.RegisterClientScriptBlock(Page, Page.GetType(), "mensagem", "teste", true);

        }
        #endregion
    }
}