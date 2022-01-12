package stepsDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

import static utils.Utils.*;

public class Hooks {

	@Before()
	public void setUp() {
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
	
	@After()
	public void tearDown() {
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
