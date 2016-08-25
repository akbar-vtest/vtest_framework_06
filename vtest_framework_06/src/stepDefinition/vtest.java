package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.imageio.ImageIO;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class vtest
{
	public WebDriver driver;
	
	// login
		String url;
		String username_id;
		String password_id;
		String signin_id;
		String login_username;
		String login_password;
		
		//logout
		String logout;
		
		//signup
		String signup_firstname_id;
		String firstname;
		String signup_lasttname_id;
		String lastname;
		String signup_username_id;
		String username;
		String signup_password_id;
		String password;
		String signup_confirm_password_id;
		String confirm_password;
		String signup_id; 
		String email;
		String signup_email_id;
		
		//Signup
		String change_firstname_id;
		String change_firstname;
		String change_lastname_id;
		String change_lastname;
		String change_password_id;
		String change_password;
		String confirm_password_id;
		String update_button; 
	
	@Given("^user navigates to url$")
	public void user_navigates_to_url() throws Throwable 
	{
	    start();
	    
	    driver.get(url);;
	    
		
	}
    
	
	@When("^user sign up$")
	public void user_sign_up() throws Throwable
	{
		driver.get("url");
		  
		   driver.findElement(By.id(signup_firstname_id)).clear();
		   driver.findElement(By.id(signup_firstname_id)).sendKeys(firstname);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signup_lasttname_id)).clear();
		   driver.findElement(By.id(signup_lasttname_id)).sendKeys(lastname);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signup_email_id)).clear();
		   driver.findElement(By.id(signup_email_id)).sendKeys(email);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signup_username_id)).clear();
		   driver.findElement(By.id(signup_username_id)).sendKeys(username);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signup_password_id)).clear();
		   driver.findElement(By.id(signup_password_id)).sendKeys(password);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signup_confirm_password_id)).clear();
		   driver.findElement(By.id(signup_confirm_password_id)).sendKeys(confirm_password);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signup_id)).click();
		   Thread.sleep(1000);
	}
	
	@Then("^log out$")
	public void log_out() throws Throwable
	{
		driver.findElement(By.id(logout)).click();
		   Thread.sleep(1000);
	}
	
	@When("^user sign in$")
	public void user_sign_in() throws Throwable
	{
		 driver.get(url);
		  
		   driver.findElement(By.id(username_id)).clear();
		   driver.findElement(By.id(username_id)).sendKeys(login_username);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(password_id)).clear();
		   driver.findElement(By.id(password_id)).sendKeys(login_password);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(signin_id)).click();
		   Thread.sleep(1000);
	}
	
	@And("^update profile$")
	public void update_profile() throws Throwable
	{
		 driver.findElement(By.id(change_firstname_id)).clear();
		   driver.findElement(By.id(change_firstname_id)).sendKeys(change_firstname);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(change_lastname_id)).clear();
		   driver.findElement(By.id(change_lastname_id)).sendKeys(change_lastname);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(change_password_id)).clear();
		   driver.findElement(By.id(change_password_id)).sendKeys(change_password);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(confirm_password_id)).clear();
		   driver.findElement(By.id(confirm_password_id)).sendKeys(confirm_password);
		   Thread.sleep(1000);
		   
		   driver.findElement(By.id(update_button)).click();
		   Thread.sleep(1000);
	}
	
	
	@And("^Read excel$")
	public void read_excel()
	{
		 try {
			  // Specify the path of file
			  File src=new File("Results/Input/InputData.xlsx");
			 
			   // load file
			   FileInputStream fis=new FileInputStream(src);
			 
			   // Load workbook
			  // @SuppressWarnings("resource")
			   XSSFWorkbook wb=new XSSFWorkbook(fis);
			   
			   // Load sheet- Here we are loading first sheetonly
			      XSSFSheet sh1= wb.getSheetAt(0);
			 
			  // getRow() specify which row we want to read.
			 
			  // and getCell() specify which column to read.
			  // getStringCellValue() specify that we are reading String data.
			 
		      for(int j=1;j<= 100; j++)
		      {	      
		        String exe = sh1.getRow(j).getCell(0).getStringCellValue();
			      
			      
		        if(exe.equals("Y")||exe.equals("Yes")||exe.equals("y")||exe.equals("yes"))
		        {	
			     sh1.getRow(j).getCell(2).getStringCellValue();
			 
			     sh1.getRow(j).getCell(3).getStringCellValue();
			 
			     sh1.getRow(j).getCell(4).getStringCellValue();
			 
			     sh1.getRow(j).getCell(5).getStringCellValue();
			 
			     sh1.getRow(j).getCell(6).getStringCellValue();
			 		     
		        }
		      }
			 
			 } 
		      catch (Exception e) 
		      {
			   System.out.println(e.getMessage());
			  } 
	}
	
	@And("^Write excel$")
	public void write_excel()
	{
		 try {
			  
			  // Specify the file path which you want to create or write
			 
			  File src=new File("./Results/Output/OutputData.xlsx");
			 
			  // Load the file
			 
			  FileInputStream fis=new FileInputStream(src);
			 
			   // load the workbook
			 
			 //  @SuppressWarnings("resource")
			   XSSFWorkbook wb=new XSSFWorkbook(fis);
			 
			  // get the sheet which you want to modify or create
			 
			   XSSFSheet sh1= wb.getSheetAt(0);
			 
			
			 
			 sh1.getRow(0).createCell(0).setCellValue("Testcase1");
			 
			 sh1.getRow(0).createCell(1).setCellValue("Passed");
			 
	         sh1.getRow(1).createCell(0).setCellValue("Testcase2");
			 
			 sh1.getRow(1).createCell(1).setCellValue("Failed");
			 
			 
			// here we need to specify where you want to save file
			 
			 FileOutputStream fout=new FileOutputStream(new File("Results/Output/OutputData.xlsx"));
			 
			 
			// finally write content 
			 
			 wb.write(fout);
			 
			// close the file
			 
			 fout.close();
			 
			  } catch (Exception e) {
			 
			   System.out.println(e.getMessage());
			 
			  }
	}
	
	@And("^compare screenshot$")
	public void compare_screenshot() throws IOException
	{
		File fileInput = new File("Trainings.jpg");
	      File fileOutPut = new File("Trainings1.jpg");

	      BufferedImage bufileInput = ImageIO.read(fileInput);
	      DataBuffer dafileInput = bufileInput.getData().getDataBuffer();
	      int sizefileInput = dafileInput.getSize();                     
	      BufferedImage bufileOutPut = ImageIO.read(fileOutPut);
	      DataBuffer dafileOutPut = bufileOutPut.getData().getDataBuffer();
	      int sizefileOutPut = dafileOutPut.getSize();
	      Boolean matchFlag = true;
	      if(sizefileInput == sizefileOutPut) {                         
	         for(int j=0; j<sizefileInput; j++) {
	               if(dafileInput.getElem(j) != dafileOutPut.getElem(j)) {
	                     matchFlag = false;
	                     break;
	               }
	          }
	      }
	      else                            
	         matchFlag = false;
	      Assert.assertTrue(matchFlag, "Images are not same"); 
			
			
	}
	
	@And("^send report$")
	public void send_report() throws InterruptedException, IOException
	{
		  driver = new FirefoxDriver();
		  
		  driver.get("file:///D:/EPIC_SeleniumWebDriver/Pl10/target/cucumber-pretty.txt");
		  
		  File ActHome = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
			Thread.sleep(3000);
		    FileUtils.copyFile(ActHome, new File("Cucumber_pretty.jpg"));
		    
		    

		    
	     // Recipient's email ID needs to be mentioned.
	     String to = "akbar.vtest@gmail.com";
	     final String username = "akbar.vtest@gmail.com";
	     final String password = "************";

	     Properties props = new Properties();
	     props.put("mail.smtp.auth", true);
	     props.put("mail.smtp.starttls.enable", true);
	     props.put("mail.smtp.host", "smtp.gmail.com");
	     props.put("mail.smtp.port", "587");

	     Session session = Session.getInstance(props,
	             new javax.mail.Authenticator() {
	                 protected PasswordAuthentication getPasswordAuthentication() {
	                     return new PasswordAuthentication(username, password);
	                 }
	             });
	     try{
	        // Create a default MimeMessage object.
	        MimeMessage message = new MimeMessage(session);
	        // Set From: header field of the header.
	        message.setFrom(new InternetAddress(username));
	        // Set To: header field of the header.
	        message.addRecipient(Message.RecipientType.TO,
	                                 new InternetAddress(to));

	        // Set Subject: header field
	        message.setSubject("Pl10 Automation Test Report");

	        // Create the message part 
	        BodyPart messageBodyPart = new MimeBodyPart();

	        // Fill the message
	        messageBodyPart.setText("Hi,\n Below attached is the Test Report \n\n\n Regards, \n Akbar.vtest");

	        // Create a multipar message
	        Multipart multipart = new MimeMultipart();

	        // Set text message part
	        multipart.addBodyPart(messageBodyPart);

	        // Part two is attachment
	       /* messageBodyPart = new MimeBodyPart();
	        String filename = "Integra\\RESULT_OUTPUT\\Result.xls";
	        DataSource source = new FileDataSource(filename);
	        messageBodyPart.setDataHandler(new DataHandler(source));
	        messageBodyPart.setFileName(filename);
	        multipart.addBodyPart(messageBodyPart);*/
	        
	        addAttachment(multipart, "Cucumber_pretty.jpg");

	        // Send the complete message parts
	        message.setContent(multipart );

	        // Send message
	        Transport.send(message);
	        System.out.println("Sent message successfully....");
	        
	        driver.quit();
	        
	     }catch (MessagingException mex) {
	        mex.printStackTrace();
	     }
	}
	
	 private static void addAttachment(Multipart multipart, String filename) throws MessagingException
	  {
	      DataSource source = new FileDataSource(filename);
	      BodyPart messageBodyPart = new MimeBodyPart();        
	      messageBodyPart.setDataHandler(new DataHandler(source));
	      messageBodyPart.setFileName(filename);
	      multipart.addBodyPart(messageBodyPart);
	  }
	
	
	public void start()
	{
		// Create object of  DesiredCapabilities class and specify android platform
				DesiredCapabilities capabilities=DesiredCapabilities.android();
				 
				 
				// set the capability to execute test in chrome browser
				 capabilities.setCapability(MobileCapabilityType.BROWSER_NAME,BrowserType.CHROME);
				 
				// set the capability to execute our test in Android Platform
				   capabilities.setCapability(MobileCapabilityType.PLATFORM,Platform.ANDROID);
				 
				// we need to define platform name
				  capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME,"Android");
				 
				// Set the device name as well (you can give any name)
				 capabilities.setCapability(MobileCapabilityType.DEVICE_NAME,"my phone");
				 
				 // set the android version as well 
				   capabilities.setCapability(MobileCapabilityType.VERSION,"5.0.1");
				 
				 // Create object of URL class and specify the appium server address
				 URL url= new URL("http://127.0.0.1:4723/wd/hub");
				 
				// Create object of  AndroidDriver class and pass the url and capability that we created
				 WebDriver driver = new AndroidDriver(url, capabilities);
	}
	
	
	public void end()
	{
		driver.quit(); 
	}
}
