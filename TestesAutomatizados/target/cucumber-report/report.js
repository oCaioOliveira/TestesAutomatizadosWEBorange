$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    }
  ]
});
formatter.scenario({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    },
    {
      "name": "@Cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba admin",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarAAbaAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao add",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo employer name \"Fiona Grace\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmployerName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo username \"jhuda\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirm password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema cadastra o usuario \"jhuda\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaCadastraOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Ad\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"asd\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemDeUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Admin\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"admin123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeOUsuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TestandoActions.feature");
formatter.feature({
  "name": "TestarActions",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@dropdown"
    }
  ]
});
formatter.scenario({
  "name": "verificar dropDwon da aba",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@dropdown"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o submenu customfield",
  "keyword": "Quando "
});
formatter.match({
  "location": "TestandoActionSteps.acionarOSubmenuCustomfield()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela customfield",
  "keyword": "Entao "
});
formatter.match({
  "location": "TestandoActionSteps.oSistemaApresentaATelaCustomfield()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});