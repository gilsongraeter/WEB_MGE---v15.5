using System;
using System.Net;
using MySql.Data.MySqlClient;
using System.Data;
using System.Net.NetworkInformation;

namespace WEB_MGE
{
    public partial class Default : System.Web.UI.Page
    {
        #region Atributos
        MySqlConnection conexao = null;
        MySqlDataAdapter adapter = null;
        DataSet dataSet = new DataSet();
        #endregion


        #region Eventos
        protected void Page_Load(object sender, EventArgs e)
        {
            PingReply oPing;

            for (int x = 0; x < 2; x++)
            {
                System.Threading.Thread.Sleep(250);
                oPing = new Ping().Send("192.168.0.29", 5000);

                if (oPing.Status == IPStatus.Success)
                {
                    // Encontrou servidor
                    // Falta conferir o nome
                    IPHostEntry ipHost = Dns.GetHostEntry("192.168.0.29");
                    string hostNome = ipHost.HostName;
                    if ((hostNome.Contains("SERVER2012")) || (hostNome.Contains("mgers")))
                    {
                        // Encontrou o servidor
                        Variaveis_Globais.Servidor = true;
                        //EscreveMensagem("Aviso", "Rede Interna MGE. ", true);
                        break;
                    }
                    else
                    {
                        // Não encontrou o nome do servidor
                        Variaveis_Globais.Servidor = false;
                        //EscreveMensagem("Aviso", "Rede Externa MGE - mgers.dyndns.org. ", true);
                    }
                }
                else
                {
                    // Não encontrou o ip = 192.168.0.29
                    Variaveis_Globais.Servidor = false;
                    //EscreveMensagem("Aviso", "Rede Externa MGE - mgers.dyndns.org. ", true);
                }
            }

            if (Variaveis_Globais.Servidor)
            {
                conexao = new MySqlConnection(Constantes.STRING_CONEXAO_LOCAL);
            }
            else
            {
                conexao = new MySqlConnection(Constantes.STRING_CONEXAO);
            }
            loginError.Visible = false;
            tbUsuario.Focus();
        }

        protected void btnEnviar_Click(object sender, EventArgs e)
        {
            Variaveis_Globais.DiretorioRaiz = Server.MapPath("~/");
            string NomeArquivo = Variaveis_Globais.DiretorioRaiz + "\\dados\\Conexoes.txt";
                    

            System.IO.TextWriter arquivo = null;

            if (!System.IO.File.Exists(NomeArquivo))
            {
                System.IO.File.Create(NomeArquivo).Close();
                arquivo = System.IO.File.AppendText(NomeArquivo);
                arquivo.WriteLine("Histórico de Conexões\n");
            }
            else
            {
                System.IO.File.OpenWrite(NomeArquivo).Close();
                arquivo = System.IO.File.AppendText(NomeArquivo);
            }

            //Variaveis_Globais.Host = GetPublicIP();
            Variaveis_Globais.Host = getEnderecoIP();
            if(Variaveis_Globais.Host == "::1")
            {
                Variaveis_Globais.Host = "LOCAL";
            }

            adapter = new MySqlDataAdapter(string.Format("SELECT * FROM USUARIOS WHERE usuario = '{0}' AND senha = '{1}';", tbUsuario.Text, tbSenha.Text), conexao);
            adapter.Fill(dataSet);

            //Variaveis_Globais.TrocaProjeto = false;

            try
            {
                if (dataSet.Tables[0].Rows.Count > 0)
                {
                    Session["usuarioConectado"] = dataSet.Tables[0].Rows[0]["usuario"].ToString();
                    Variaveis_Globais.Usuario = dataSet.Tables[0].Rows[0]["usuario"].ToString();
                    Variaveis_Globais.PerfilUsuario = dataSet.Tables[0].Rows[0]["perfil"].ToString();
                    Session["senhaConectado"] = dataSet.Tables[0].Rows[0]["senha"].ToString();
                    Session["projetoConectado"] = dataSet.Tables[0].Rows[0]["projeto"].ToString();
                    Variaveis_Globais.ProjetoAtual = Session["projetoConectado"].ToString();
                    Session["perfilConectado"] = dataSet.Tables[0].Rows[0]["perfil"].ToString();

                    arquivo.WriteLine(Variaveis_Globais.Host + " - Projeto : " + Session["projetoConectado"] + " - " + DateTime.Now.ToString());

                    //if(Variaveis_Globais.UltimoProjeto != null)
                    //{
                    //    if (Variaveis_Globais.ProjetoAtual != Variaveis_Globais.UltimoProjeto)
                    //    {
                    //        Variaveis_Globais.TrocaProjeto = true;
                    //    }
                    //}
                    //
                    //Variaveis_Globais.UltimoProjeto = Variaveis_Globais.ProjetoAtual;

                    string NomeArquivoAux = Variaveis_Globais.DiretorioRaiz + "\\dados\\" + Variaveis_Globais.Host + ".txt";

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

                    System.Web.Security.FormsAuthentication.RedirectFromLoginPage(tbUsuario.Text, false);
                }
                else
                {
                    loginError.Visible = true;
                }
            }
            finally {
                arquivo.Close();
                conexao.Close();
            }
        }

        public static string GetPublicIP()
        {
            string url = "http://checkip.dyndns.org";
            System.Net.WebRequest req = System.Net.WebRequest.Create(url);
            System.Net.WebResponse resp = req.GetResponse();
            System.IO.StreamReader sr = new System.IO.StreamReader(resp.GetResponseStream());
            string response = sr.ReadToEnd().Trim();
            string[] a = response.Split(':');
            string a2 = a[1].Substring(1);
            string[] a3 = a2.Split('<');
            string a4 = a3[0];
            return a4;
        }

        protected string getEnderecoIP()
        {
            string strEnderecoIP;
            strEnderecoIP = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (strEnderecoIP == null)
                strEnderecoIP = Request.ServerVariables["REMOTE_ADDR"];

            return strEnderecoIP;
        }
        #endregion


    }
}