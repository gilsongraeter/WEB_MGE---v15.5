<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Menu.aspx.cs" Inherits="WEB_MGE.Menu" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link style="text/css" rel="stylesheet" href="bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="styles/Menu.css" type="text/css"/>		 
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div id="tituloMenu">
            <br />
            <br />
            <br />
            <br />            
            <p>SELECIONE O PAINEL DESEJADO</p>
            <br />
            <br />
        </div>

        <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
                <asp:Button id="Button0" OnClick="projetoClick" runat="server" Text="CERFOX2019" tag="1" CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button1" OnClick="projetoClick" runat="server" Text="CERILUZ2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button2" OnClick="projetoClick" runat="server" Text="CERMISSOES2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button3" OnClick="projetoClick" runat="server" Text="CERTAJA2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button4" OnClick="projetoClick" runat="server" Text="CERTEL2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button5" OnClick="projetoClick" runat="server" Text="CERTHIL2019"  CssClass="btn btn-default"/>
            </div>
        </div>

        <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
                <asp:Button id="Button6" OnClick="projetoClick" runat="server" Text="COOPERLUZ2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button7" OnClick="projetoClick" runat="server" Text="COOPERNORTE2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button8" OnClick="projetoClick" runat="server" Text="COPREL2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button9" OnClick="projetoClick" runat="server" Text="CRELUZ2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button10" OnClick="projetoClick" runat="server" Text="CRERAL2019"  CssClass="btn btn-default"/>
            </div>
            <div class="btn-group" role="group">
                <asp:Button id="Button11" OnClick="projetoClick" runat="server" Text="CPFLSTACRUZ"  CssClass="btn btn-default"/>
            </div>
        </div>    
    </div>
    </form>
</body>
</html>
