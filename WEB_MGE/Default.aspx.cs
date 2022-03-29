﻿using MySql.Data.MySqlClient;
using System;
using System.Data;
using System.Web.UI;

namespace WEB_MGE
{
    public partial class Default1 : System.Web.UI.Page
    {
        #region Atributos
        // Lista de informações obtidas com a conexão ao banco
        public string[] listaDeInformacoes = new string[42];

        // Parâmetros injetados no gráfico da função JavaScript
        private int valor1;
        private int valor2;
        private int valor3;
        private int valor4;
        private int valor5;
        private int valor6;
        private int valor7;
        private int valor8;
        private int valor9;
        private int valor10;

        MySqlConnection conexao = null;
        MySqlDataAdapter adapter = null;
        DataSet dataSet = new DataSet();
        #endregion


        #region Eventos
        // SNMP    ######################################################################################## - CARREGAMENTO DA PÁGINA
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Variaveis_Globais.PerfilUsuario == null)
            {
                Response.Redirect("Login.aspx");
            }

            switch(Variaveis_Globais.ProjetoAtual)
            {
                case "RGESUL2021":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiZTdmNDQwMjUtZWM0Ny00MGZjLTg0NTMtNzM4YjM1ZDJmNzEwIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "CEMIG2021":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiOWNkYjhhZDktNDYzZi00MDQ4LWE2YTctOGY4OTE2MTc3NjQzIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "EDPES2021":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiNWRhYzYxZGUtYTA1OS00NTI2LWE0YmEtMzBiM2M2OWZiN2E1IiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "CEMIGCM2021":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiOWNkYjhhZDktNDYzZi00MDQ4LWE2YTctOGY4OTE2MTc3NjQzIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9&embedImagePlaceholder=true&pageName=ReportSection4c38b84a2631095de9a9");
                    break;
                case "equatorialbdgd2021":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiYTBiNzNmNzItYWE4Ni00YzhjLTgyMTQtYjg1NGMxMzZmOTFkIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "HIDROPAN2021":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiMWI5MDc4YWMtMWMwZC00MzI1LTk4OTAtYTZiZjBlNWMxYWQzIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "equatorialbdgdpi":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiYmQ1ZDRiMjEtNzk3Mi00M2NjLWJhZGEtZDMxMzAwMTNlYWNjIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "equatorialbdgdal":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiOWM0NWUzMWItMzZhOC00ZTBkLTgxNTMtYWQ2NWYwMjVhOWQ5IiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "EDPES2021CLIENTES":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiMTM1NWMzZWItYzAwMi00ZWNhLWIyZmQtZmFmNmUzNzk0NzkzIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                case "COELBA2022":
                    Response.Redirect("https://app.powerbi.com/view?r=eyJrIjoiMmFiZjNmOGMtMmVlNi00OThmLWEwOWItOTU1NDc1YjMyY2NlIiwidCI6IjdhZTk4ZGE2LTYyZTgtNDE0OC04MDlhLTUwYzA0ZWFhMzFhYiJ9");
                    break;
                default:
                    break;

            }

            //Response.Redirect("https://app.powerbi.com/reportEmbed?reportId=a4c6f0c5-fd3f-4587-a511-195afd4595bb&autoAuth=true&ctid=7ae98da6-62e8-4148-809a-50c04eaa31ab&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1iLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D");
            
            return;

            // GIULIANO PEDIU PARA DESABILITAR TEMPORARIAMENTE A INFORMAÇÃO DE LEITURA PERDIDA
            dnLeiPerdida.Visible = false;
                
            // Verifica se o usuário é administrador
            if (Session["perfilConectado"].ToString() != "ADMIN")
            {
                if (Variaveis_Globais.Servidor)
                {
                    conexao = new MySqlConnection(Constantes.STRING_CONEXAO_TB_PAINEL_LOCAL);
                }
                else
                {
                    conexao = new MySqlConnection(Constantes.STRING_CONEXAO_TB_PAINEL);
                }
                string ComandoSQL = string.Format("SELECT * FROM TBPAINEL WHERE PROJETO = '{0}';", Session["projetoConectado"].ToString());
                adapter = new MySqlDataAdapter(ComandoSQL, conexao);
                adapter.Fill(dataSet);

                listaDeInformacoes[0] = dataSet.Tables[0].Rows[0][Constantes.PROJETO].ToString();
                listaDeInformacoes[1] = dataSet.Tables[0].Rows[0][Constantes.SERVICO].ToString();
                listaDeInformacoes[2] = dataSet.Tables[0].Rows[0][Constantes.AMOSTRA_RESIDENCIAL].ToString();
                listaDeInformacoes[3] = dataSet.Tables[0].Rows[0][Constantes.AMOSTRA_COMERCIAL].ToString();
                listaDeInformacoes[4] = dataSet.Tables[0].Rows[0][Constantes.AMOSTRA_INDUSTRIAL].ToString();
                listaDeInformacoes[5] = dataSet.Tables[0].Rows[0][Constantes.AMOSTRA_PUBLICO].ToString();
                listaDeInformacoes[6] = dataSet.Tables[0].Rows[0][Constantes.AMOSTRA_RURAL].ToString();
                listaDeInformacoes[7] = dataSet.Tables[0].Rows[0][Constantes.AMOSTRA_TRAFO].ToString();
                listaDeInformacoes[8] = dataSet.Tables[0].Rows[0][Constantes.VISITAS_INSTALACAO].ToString();
                listaDeInformacoes[9] = dataSet.Tables[0].Rows[0][Constantes.VISITAS_LEITURA].ToString();
                listaDeInformacoes[10] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_PERDIDA].ToString();
                listaDeInformacoes[11] = dataSet.Tables[0].Rows[0][Constantes.DATA_HORA].ToString();
                listaDeInformacoes[12] = dataSet.Tables[0].Rows[0][Constantes.INSTALACAO_RESIDENCIAL].ToString();
                listaDeInformacoes[13] = dataSet.Tables[0].Rows[0][Constantes.INSTALACAO_COMERCIAL].ToString();
                listaDeInformacoes[14] = dataSet.Tables[0].Rows[0][Constantes.INSTALACAO_INDUSTRIAL].ToString();
                listaDeInformacoes[15] = dataSet.Tables[0].Rows[0][Constantes.INSTALACAO_PUBLICO].ToString();
                listaDeInformacoes[16] = dataSet.Tables[0].Rows[0][Constantes.INSTALACAO_RURAL].ToString();
                listaDeInformacoes[17] = dataSet.Tables[0].Rows[0][Constantes.INSTALACAO_TRAFO].ToString();
                listaDeInformacoes[18] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_RESIDENCIAL].ToString();
                listaDeInformacoes[19] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_COMERCIAL].ToString();
                listaDeInformacoes[20] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_INDUSTRIAL].ToString();
                listaDeInformacoes[21] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_PUBLICO].ToString();
                listaDeInformacoes[22] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_RURAL].ToString();
                listaDeInformacoes[23] = dataSet.Tables[0].Rows[0][Constantes.LEITURA_TRAFO].ToString();
                listaDeInformacoes[24] = dataSet.Tables[0].Rows[0][Constantes.RETIRADA_RESIDENCIAL].ToString();
                listaDeInformacoes[25] = dataSet.Tables[0].Rows[0][Constantes.RETIRADA_COMERCIAL].ToString();
                listaDeInformacoes[26] = dataSet.Tables[0].Rows[0][Constantes.RETIRADA_INDUSTRIAL].ToString();
                listaDeInformacoes[27] = dataSet.Tables[0].Rows[0][Constantes.RETIRADA_PUBLICO].ToString();
                listaDeInformacoes[28] = dataSet.Tables[0].Rows[0][Constantes.RETIRADA_RURAL].ToString();
                listaDeInformacoes[29] = dataSet.Tables[0].Rows[0][Constantes.RETIRADA_TRAFO].ToString();
                listaDeInformacoes[30] = dataSet.Tables[0].Rows[0][Constantes.DEPURACAO_RESIDENCIAL].ToString();
                listaDeInformacoes[31] = dataSet.Tables[0].Rows[0][Constantes.DEPURACAO_COMERCIAL].ToString();
                listaDeInformacoes[32] = dataSet.Tables[0].Rows[0][Constantes.DEPURACAO_INDUSTRIAL].ToString();
                listaDeInformacoes[33] = dataSet.Tables[0].Rows[0][Constantes.DEPURACAO_PUBLICO].ToString();
                listaDeInformacoes[34] = dataSet.Tables[0].Rows[0][Constantes.DEPURACAO_RURAL].ToString();
                listaDeInformacoes[35] = dataSet.Tables[0].Rows[0][Constantes.DEPURACAO_TRAFO].ToString();
                listaDeInformacoes[36] = dataSet.Tables[0].Rows[0][Constantes.ENVIO_RESIDENCIAL].ToString();
                listaDeInformacoes[37] = dataSet.Tables[0].Rows[0][Constantes.ENVIO_COMERCIAL].ToString();
                listaDeInformacoes[38] = dataSet.Tables[0].Rows[0][Constantes.ENVIO_INDUSTRIAL].ToString();
                listaDeInformacoes[39] = dataSet.Tables[0].Rows[0][Constantes.ENVIO_PUBLICO].ToString();
                listaDeInformacoes[40] = dataSet.Tables[0].Rows[0][Constantes.ENVIO_RURAL].ToString();
                listaDeInformacoes[41] = dataSet.Tables[0].Rows[0][Constantes.ENVIO_TRAFO].ToString();

                decimal VAmostraTot = (Convert.ToDecimal(listaDeInformacoes[2]) +
                                        Convert.ToDecimal(listaDeInformacoes[3]) +
                                        Convert.ToDecimal(listaDeInformacoes[4]) +
                                        Convert.ToDecimal(listaDeInformacoes[5]) +
                                        Convert.ToDecimal(listaDeInformacoes[6]) +
                                        Convert.ToDecimal(listaDeInformacoes[7]));

                decimal VInsTotAmostra = (Convert.ToDecimal(listaDeInformacoes[2]) +
                                            Convert.ToDecimal(listaDeInformacoes[3]) +
                                            Convert.ToDecimal(listaDeInformacoes[4]) +
                                            Convert.ToDecimal(listaDeInformacoes[5]) +
                                            Convert.ToDecimal(listaDeInformacoes[6]) +
                                            Convert.ToDecimal(listaDeInformacoes[7]));

                decimal VInsTot = (Convert.ToDecimal(listaDeInformacoes[12]) +
                                    Convert.ToDecimal(listaDeInformacoes[13]) +
                                    Convert.ToDecimal(listaDeInformacoes[14]) +
                                    Convert.ToDecimal(listaDeInformacoes[15]) +
                                    Convert.ToDecimal(listaDeInformacoes[16]) +
                                    Convert.ToDecimal(listaDeInformacoes[17]));

                decimal VInsPendente = (VInsTotAmostra - VInsTot);

                decimal VLeiTotAmostra = (Convert.ToDecimal(listaDeInformacoes[2]) +
                                            Convert.ToDecimal(listaDeInformacoes[3]) +
                                            Convert.ToDecimal(listaDeInformacoes[4]) +
                                            Convert.ToDecimal(listaDeInformacoes[5]) +
                                            Convert.ToDecimal(listaDeInformacoes[6]) +
                                            Convert.ToDecimal(listaDeInformacoes[7]));

                decimal VLeiTot = (Convert.ToDecimal(listaDeInformacoes[18]) +
                                    Convert.ToDecimal(listaDeInformacoes[19]) +
                                    Convert.ToDecimal(listaDeInformacoes[20]) +
                                    Convert.ToDecimal(listaDeInformacoes[21]) +
                                    Convert.ToDecimal(listaDeInformacoes[22]) +
                                    Convert.ToDecimal(listaDeInformacoes[23]));

                decimal VLeiPendente = (VLeiTotAmostra - (Convert.ToDecimal(listaDeInformacoes[10])) - VLeiTot);

                decimal VRetTotAmostra = (Convert.ToDecimal(listaDeInformacoes[2]) +
                                            Convert.ToDecimal(listaDeInformacoes[3]) +
                                            Convert.ToDecimal(listaDeInformacoes[4]) +
                                            Convert.ToDecimal(listaDeInformacoes[5]) +
                                            Convert.ToDecimal(listaDeInformacoes[6]) +
                                            Convert.ToDecimal(listaDeInformacoes[7]));

                decimal VRetTot = (Convert.ToDecimal(listaDeInformacoes[24]) +
                                    Convert.ToDecimal(listaDeInformacoes[25]) +
                                    Convert.ToDecimal(listaDeInformacoes[26]) +
                                    Convert.ToDecimal(listaDeInformacoes[27]) +
                                    Convert.ToDecimal(listaDeInformacoes[28]) +
                                    Convert.ToDecimal(listaDeInformacoes[29]));

                decimal VRetPendente = (VRetTotAmostra - VRetTot);

                decimal VDepTotAmostra = (Convert.ToDecimal(listaDeInformacoes[2]) +
                                            Convert.ToDecimal(listaDeInformacoes[3]) +
                                            Convert.ToDecimal(listaDeInformacoes[4]) +
                                            Convert.ToDecimal(listaDeInformacoes[5]) +
                                            Convert.ToDecimal(listaDeInformacoes[6]) +
                                            Convert.ToDecimal(listaDeInformacoes[7]));

                decimal VDepTot = (Convert.ToDecimal(listaDeInformacoes[30]) +
                                    Convert.ToDecimal(listaDeInformacoes[31]) +
                                    Convert.ToDecimal(listaDeInformacoes[32]) +
                                    Convert.ToDecimal(listaDeInformacoes[33]) +
                                    Convert.ToDecimal(listaDeInformacoes[34]) +
                                    Convert.ToDecimal(listaDeInformacoes[35]));

                decimal VDepPendente = (VDepTotAmostra - VDepTot);

                decimal VEnvTotAmostra = (Convert.ToDecimal(listaDeInformacoes[2]) +
                                            Convert.ToDecimal(listaDeInformacoes[3]) +
                                            Convert.ToDecimal(listaDeInformacoes[4]) +
                                            Convert.ToDecimal(listaDeInformacoes[5]) +
                                            Convert.ToDecimal(listaDeInformacoes[6]) +
                                            Convert.ToDecimal(listaDeInformacoes[7]));

                decimal VEnvTot = (Convert.ToDecimal(listaDeInformacoes[36]) +
                                    Convert.ToDecimal(listaDeInformacoes[37]) +
                                    Convert.ToDecimal(listaDeInformacoes[38]) +
                                    Convert.ToDecimal(listaDeInformacoes[39]) +
                                    Convert.ToDecimal(listaDeInformacoes[40]) +
                                    Convert.ToDecimal(listaDeInformacoes[41]));

                decimal VEnvPendente = (VEnvTotAmostra - VEnvTot);

                vDHAtualiza.InnerText = listaDeInformacoes[11];

                vCliente.InnerText = listaDeInformacoes[0];

                Variaveis_Globais.Cliente = vCliente.InnerText;
                if (vCliente.InnerText == "AMPLA")
                {
                    vCliente.InnerText = "ENEL";
                }

                vServico.InnerText = listaDeInformacoes[1];

                vAmostraTot.InnerText = "Amostra: " + VAmostraTot + " pontos";

                // ############################################################################# - INFORMAÇÕES INFERIORES AO GRÁFICO

                // -------------------------------------- Cálcula os parâmetros do gráfico e ajusta os parâmetros da rotina JavaScript

                dnInsPlanejado.InnerText = dadosNr("Planejado: ", VInsTotAmostra, VAmostraTot);
                dnInsExecutado.InnerText = dadosNr("Executado: ", VInsTot, VAmostraTot);

                if (VInsTot >= VAmostraTot)
                {
                    valor1 = 100;
                    valor2 = 0;
                }
                else
                {
                    valor1 = Convert.ToInt32(VInsTot);
                    valor2 = Convert.ToInt32(VInsTotAmostra) - Convert.ToInt32(VInsTot);
                }

                dnInsPendentes.InnerText = dadosNr("Pendente: ", VInsPendente, VAmostraTot);
                dnInsVisitas.InnerText = dadosNr("Visitas: ", Convert.ToDecimal(listaDeInformacoes[8]), VAmostraTot);
                dnInsReinstalados.InnerText = dadosNr("Reinstalados: ", Convert.ToDecimal(listaDeInformacoes[9]), VAmostraTot);

                // -------------------------------------- Cálcula os parâmetros do gráfico e ajusta os parâmetros da rotina JavaScript

                dnLeiPlanejado.InnerText = dadosNr("Planejado: ", VLeiTotAmostra, VAmostraTot);
                dnLeiExecutado.InnerText = dadosNr("Executado: ", VLeiTot, VAmostraTot);

                if (VLeiTot >= VAmostraTot)
                {
                    valor3 = 100;
                    valor4 = 0;
                }
                else
                {
                    valor3 = Convert.ToInt32(VLeiTot);
                    valor4 = Convert.ToInt32(VLeiTotAmostra) - Convert.ToInt32(VLeiTot);
                }

                dnLeiPendentes.InnerText = dadosNr("Pendente: ", VLeiPendente, VAmostraTot);
                dnLeiPerdida.InnerText = dadosNr("Perdida: ", Convert.ToDecimal(listaDeInformacoes[10]), VAmostraTot);

                // -------------------------------------- Cálcula os parâmetros do gráfico e ajusta os parâmetros da rotina JavaScript

                dnRetPlanejado.InnerText = dadosNr("Planejado: ", VRetTotAmostra, VAmostraTot);
                dnRetExecutado.InnerText = dadosNr("Executado: ", VRetTot, VAmostraTot);

                if (VRetTot >= VAmostraTot)
                {
                    valor5 = 100;
                    valor6 = 0;
                }
                else
                {
                    valor5 = Convert.ToInt32(VRetTot);
                    valor6 = Convert.ToInt32(VRetTotAmostra) - Convert.ToInt32(VRetTot);
                }

                dnRetPendentes.InnerText = dadosNr("Pendente: ", VRetPendente, VAmostraTot);

                // -------------------------------------- Cálcula os parâmetros do gráfico e ajusta os parâmetros da rotina JavaScript

                dnDepPlanejado.InnerText = dadosNr("Planejado: ", VDepTotAmostra, VAmostraTot);
                dnDepExecutado.InnerText = dadosNr("Executado: ", VDepTot, VAmostraTot);

                if (VDepTot >= VAmostraTot)
                {
                    valor7 = 100;
                    valor8 = 0;
                }
                else
                {
                    valor7 = Convert.ToInt32(VDepTot);
                    valor8 = Convert.ToInt32(VInsTotAmostra) - Convert.ToInt32(VDepTot);
                }

                dnDepPendentes.InnerText = dadosNr("Pendente: ", VDepPendente, VAmostraTot);

                // -------------------------------------- Cálcula os parâmetros do gráfico e ajusta os parâmetros da rotina JavaScript

                dnEnvPlanejado.InnerText = dadosNr("Planejado: ", VEnvTotAmostra, VAmostraTot);
                dnEnvExecutado.InnerText = dadosNr("Executado: ", VEnvTot, VAmostraTot);

                if (VEnvTot >= VAmostraTot)
                {
                    valor9 = 100;
                    valor10 = 0;
                }
                else
                {
                    valor9 = Convert.ToInt32(VEnvTot);
                    valor10 = Convert.ToInt32(VEnvTotAmostra) - Convert.ToInt32(VEnvTot);
                }

                dnEnvPendentes.InnerText = dadosNr("Pendente: ", VEnvPendente, VAmostraTot);

                // ############################################################################################### - TABELA INFERIOR

                vAmostraRes.InnerText = listaDeInformacoes[2];
                vInsRes.InnerText = percentual(listaDeInformacoes[12], listaDeInformacoes[2]);
                vLeiRes.InnerText = percentual(listaDeInformacoes[18], listaDeInformacoes[2]);
                vRetRes.InnerText = percentual(listaDeInformacoes[24], listaDeInformacoes[2]);
                vDepRes.InnerText = percentual(listaDeInformacoes[30], listaDeInformacoes[2]);
                vEnvRes.InnerText = percentual(listaDeInformacoes[36], listaDeInformacoes[2]);

                vAmostraCom.InnerText = listaDeInformacoes[3];
                vInsCom.InnerText = percentual(listaDeInformacoes[13], listaDeInformacoes[3]);
                vLeiCom.InnerText = percentual(listaDeInformacoes[19], listaDeInformacoes[3]);
                vRetCom.InnerText = percentual(listaDeInformacoes[25], listaDeInformacoes[3]);
                vDepCom.InnerText = percentual(listaDeInformacoes[31], listaDeInformacoes[3]);
                vEnvCom.InnerText = percentual(listaDeInformacoes[37], listaDeInformacoes[3]);

                vAmostraInd.InnerText = listaDeInformacoes[4];
                vInsInd.InnerText = percentual(listaDeInformacoes[14], listaDeInformacoes[4]);
                vLeiInd.InnerText = percentual(listaDeInformacoes[20], listaDeInformacoes[4]);
                vRetInd.InnerText = percentual(listaDeInformacoes[26], listaDeInformacoes[4]);
                vDepInd.InnerText = percentual(listaDeInformacoes[32], listaDeInformacoes[4]);
                vEnvInd.InnerText = percentual(listaDeInformacoes[38], listaDeInformacoes[4]);

                vAmostraPub.InnerText = listaDeInformacoes[5];
                vInsPub.InnerText = percentual(listaDeInformacoes[15], listaDeInformacoes[5]);
                vLeiPub.InnerText = percentual(listaDeInformacoes[21], listaDeInformacoes[5]);
                vRetPub.InnerText = percentual(listaDeInformacoes[27], listaDeInformacoes[5]);
                vDepPub.InnerText = percentual(listaDeInformacoes[33], listaDeInformacoes[5]);
                vEnvPub.InnerText = percentual(listaDeInformacoes[39], listaDeInformacoes[5]);

                vAmostraRur.InnerText = listaDeInformacoes[6];
                vInsRur.InnerText = percentual(listaDeInformacoes[16], listaDeInformacoes[6]);
                vLeiRur.InnerText = percentual(listaDeInformacoes[22], listaDeInformacoes[6]);
                vRetRur.InnerText = percentual(listaDeInformacoes[28], listaDeInformacoes[6]);
                vDepRur.InnerText = percentual(listaDeInformacoes[34], listaDeInformacoes[6]);
                vEnvRur.InnerText = percentual(listaDeInformacoes[40], listaDeInformacoes[6]);

                vAmostraTra.InnerText = listaDeInformacoes[7];
                vInsTra.InnerText = percentual(listaDeInformacoes[17], listaDeInformacoes[7]);
                vLeiTra.InnerText = percentual(listaDeInformacoes[23], listaDeInformacoes[7]);
                vRetTra.InnerText = percentual(listaDeInformacoes[29], listaDeInformacoes[7]);
                vDepTra.InnerText = percentual(listaDeInformacoes[35], listaDeInformacoes[7]);
                vEnvTra.InnerText = percentual(listaDeInformacoes[41], listaDeInformacoes[7]);

                AmostraTotTabela.InnerText = VAmostraTot.ToString();
                vInsTot.InnerText = percentual(VInsTot.ToString(), VAmostraTot.ToString());
                vLeiTot.InnerText = percentual(VLeiTot.ToString(), VAmostraTot.ToString());
                vRetTot.InnerText = percentual(VRetTot.ToString(), VAmostraTot.ToString());
                vDepTot.InnerText = percentual(VDepTot.ToString(), VAmostraTot.ToString());
                vEnvTot.InnerText = percentual(VEnvTot.ToString(), VAmostraTot.ToString());

                // Invoca a rotina JavaScript que desenha os gráficos
                inserirGraficosNaPagina();
            }

            // Caso seja o administrador, redireciona para a página com o menu!
            else
            {
                Response.Redirect("Menu.aspx", false);
            }
        }
        #endregion


        #region Métodos
        // ################################################################################################## - NORMALIZAÇÃO
        private string dadosNr(string texto, decimal valNr, decimal valRef)
        {
            string ret = "";

            if (valRef != 0)
            {
                if (!(valNr < 0))
                {
                    ret = texto + " " + valNr + " [" + decimal.Round((valNr / valRef * 100), 1, MidpointRounding.AwayFromZero) + "%]";
                    return ret;
                }
                else
                {
                    ret = texto + " " + 0 + " [0%]";
                    return ret;
                }
            }
            else
            {
                ret = texto + " " + 0 + " [0%]";
                return ret;
            }
        }


        // ######################################################################################### - CÁLCULO DO PERCENTUAL
        private string percentual(string valor, string valorBase)
        {
            string ret = "";

            if (Convert.ToInt32(valorBase) != 0)
            {                
                return ret = valor + " [" + decimal.Round((((Convert.ToDecimal(valor)) * 100) / (Convert.ToDecimal(valorBase))), 1, MidpointRounding.AwayFromZero).ToString() + "%]";
            }
            else
            {
                return ret;
            }
        }


        // ######################################################################### - MÉTODO PARA INVOCAR ROTINA JAVASCRIPT
        public void inserirGraficosNaPagina()
        {
            string rotinaJavaScript = "GerarGraficos(" + valor1 + ","
                                                        + valor2 + ","
                                                        + valor3 + ","
                                                        + valor4 + ","
                                                        + valor5 + ","
                                                        + valor6 + ","
                                                        + valor7 + ","
                                                        + valor8 + ","
                                                        + valor9 + ","
                                                        + valor10 + ")";

            Page.ClientScript.RegisterClientScriptInclude("FormScript", "/scripts/Default.js");
            ScriptManager.RegisterClientScriptBlock(Page, Page.GetType(), "mensagem", rotinaJavaScript, true);
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
        #endregion
    }
}