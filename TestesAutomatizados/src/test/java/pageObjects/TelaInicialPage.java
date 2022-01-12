package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage extends BasePage{
	
	//Base Page
	public void acionarAbaAdmin() {
		abaAdmin.click();
	}
	
	//Elements
	@FindBy(name = "btnAdd")
	public WebElement botaoAdd;
	
	public void acionarBotaoAdd() {
		botaoAdd.click();
	}
	
}
