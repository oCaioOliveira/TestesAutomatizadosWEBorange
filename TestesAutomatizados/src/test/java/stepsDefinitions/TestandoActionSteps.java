package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class TestandoActionSteps {

	@Quando("acionar o submenu customfield")
	public void acionarOSubmenuCustomfield() {
	    Na(TelaInicialPage.class).acessarMenuCustomField();
	}

	@Entao("o sistema apresenta a tela customfield")
	public void oSistemaApresentaATelaCustomfield() {
		assertEquals("Defined Custom Fields", driver.findElement(By.xpath("//h1[text()='Defined Custom Fields']")).getText());
	}
	
}
