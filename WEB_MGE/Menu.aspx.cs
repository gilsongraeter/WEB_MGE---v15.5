using System;
using System.Web.UI.WebControls;

namespace WEB_MGE
{
    public partial class Menu : System.Web.UI.Page
    {
        #region Eventos
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Variaveis_Globais.PerfilUsuario == null)
            {
                Response.Redirect("Login.aspx");
            }
        }

        protected void projetoClick(object sender, EventArgs e)
        {
            Button botaoClicado = sender as Button;

            Session["projetoConectado"] = botaoClicado.Text;
            Variaveis_Globais.ProjetoAtual = Session["projetoConectado"].ToString();
            Session["perfilConectado"] = "USU";

            string NomeArquivoAux = Variaveis_Globais.DiretorioRaiz + "dados\\" + Variaveis_Globais.Host + ".txt";

            System.IO.TextWriter arquivoAux = null;

            if (!System.IO.File.Exists(NomeArquivoAux))
            {
                System.IO.File.Create(NomeArquivoAux).Close();
                arquivoAux = System.IO.File.AppendText(NomeArquivoAux);
                arquivoAux.WriteLine("Projeto = " + Session["projetoConectado"]);
            }
            else
            {
                System.IO.File.Delete(NomeArquivoAux);
                System.IO.File.Create(NomeArquivoAux).Close();
                arquivoAux = System.IO.File.AppendText(NomeArquivoAux);
                arquivoAux.WriteLine("Projeto = " + Session["projetoConectado"]);
            }
            arquivoAux.Close();

            //Response.Redirect("Default.aspx");
            Response.Redirect("MapaSelecao.aspx");
        }
        #endregion
    }
}