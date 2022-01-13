package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import static utils.Utils.*;

public class TelaInicialPage extends BasePage {
	
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
	
	public void acessarMenuCustomField() {
		Actions acao = new Actions(driver);
		acao.moveToElement(abaPim).build().perform();
		acao.moveToElement(menuConfiguration).build().perform();
		acao.moveToElement(menuField).click().build().perform();
		
	}
	
}
