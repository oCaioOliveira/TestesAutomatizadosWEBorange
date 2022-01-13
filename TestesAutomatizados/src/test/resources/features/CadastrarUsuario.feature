#language: pt
#encoding: UTF-8

@CadastrarUsuario
Funcionalidade: Cadastrar usuario

	@Cadastro
  Cenario: cadastrar usuario
    Quando eu acionar a aba admin
    E acionar o botao add
    E informar no campo employer name "Fiona Grace"
    E informar no campo username "jhuda"
    E informar no campo password "12345678"
    E informar no campo confirm password "12345678"
    E acionar o botao salvar
    Entao o sistema cadastra o usuario "jhuda"
