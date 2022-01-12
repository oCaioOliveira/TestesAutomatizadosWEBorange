package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CadastrarUsuarioPage {

	@FindBy(name = "systemUser[employeeName][empName]")
	public WebElement campoEmployer;

	@FindBy(name = "systemUser[userName]")
	public WebElement campoUsername;

	@FindBy(name = "systemUser[password]")
	public WebElement campoPassword;

	@FindBy(name = "systemUser[confirmPassword]")
	public WebElement campoConfirmarPassword;

	@FindBy(name = "btnSave")
	public WebElement botaoSalvar;

	public void infromarCampoEmplyerName(String employerName) {
		campoEmployer.clear();
		campoEmployer.sendKeys(employerName);
	}

	public void infromarCampoUsername(String username) {
		campoUsername.sendKeys(username);
	}

	public void infromarCampoPassword(String password) {
		campoPassword.sendKeys(password);
	}

	public void infromarCampoConfirmarPassword(String confirmarPassword) {
		campoConfirmarPassword.sendKeys(confirmarPassword);
	}

	public void acionarBotaoSalvar() {
		botaoSalvar.click();
	}

}
