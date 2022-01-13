package stepsDefinitions;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;

import io.cucumber.java.Before;
import pageObjects.LoginPage;

import static utils.Utils.*;

public class Hooks {
	
	@Before(value = "not @login")
	public void suiteSetUp() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("Admin", "admin123");
	}
	
	@Before(value = "@login")
	public void funcionalidadeLogin() {
		acessarSistema();
	}
	
//	@Before(order = 2, value = "@login")
//	public void setUp2() {
//		acessarSistema();
//	}
//	
//	@Before(order = 3, value = "@login")
//	public void setUp3() {
//		acessarSistema();
//	}
	
	@After(order = 0)
	public void suiteTearDown(Scenario scenario) throws Exception {
		capturarTela(scenario);
		driver.quit();
	}
	
//	@After(order = 1, value = "@login")
//	public void tearDown2() {
//		
//	}
//	
//	@After(order = 0, value = "@login")
//	public void tearDown3() {
//		
//	}
	
}

