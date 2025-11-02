import { expect } from "@playwright/test";

class addemployeePage {
  constructor(page) {
    this.page = page;
    this.loginUsername = page.locator('input[name="username"]');
    this.loginPassword = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.PIMMenu = page.locator("//span[text()='PIM']");
    this.addemployeesubmenu = page.locator("//a[text()='Add Employee']");
    this.firstname = page.locator("//input[@name='firstName']");
    this.middlename = page.locator("//input[@name='middleName']");
    this.lastname = page.locator("//input[@name='lastName']");
    this.empID = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
    this.empImage = page.locator('input[type="file"]');
    this.createLoginDetails = page.locator("//span[contains(@class,'oxd-switch-input oxd-switch-input--active')]");
    this.username = page.locator("(//input[@class='oxd-input oxd-input--active'])[3]");
    this.password = page.locator('(//input[@type="password"])[1]');
    this.confirmPassword = page.locator('(//input[@type="password"])[2]');
    this.saveButton = page.locator('button[type="submit"]');
    this.personalDetails = page.locator("//h6[text()='Personal Details']");
    this.employeeImage = page.locator('img[class="employee-image"]');
    this.profilePicture = page.locator('input[type="file"]');
    this.saveProfile = page.locator('button[type="submit"]');
    this.clickJob = page.locator("//a[text()='Job']");
    this.clickJobTitle = page.locator('(//div[@tabindex="0"])[1]');
    this.addjobTitle = page.getByText("HR Manager");
    this.titleSave = page.locator('button[type="submit"]');
    this.successMessage = page.locator("//*[text()='Successfully Saved']");
    this.clickEmpList = page.locator("//a[text()='Employee List']");
    this.empNameSearch = page.locator('(//input[@placeholder="Type for hints..."])[1]');
    this.searchEmployee = page.locator('button[type="submit"]');
  }

  async launchUrl() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  async loginSuccess(loginUsername, loginPassword) {
    await this.loginUsername.fill(loginUsername);
    await this.page.waitForTimeout(500);
    await this.loginPassword.fill(loginPassword);
    await this.page.waitForTimeout(500);
    await this.loginButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  }

  async navigatePIM() {
    await this.PIMMenu.click();
    await this.page.waitForTimeout(500);
  }

  async navigateAddEmployee() {
    await this.addemployeesubmenu.click();
    await this.page.waitForTimeout(500);
  }

  async createEmployee(firstname, middlename, lastname) {
    await this.firstname.fill(firstname);
    await this.page.waitForTimeout(500);
    await this.middlename.fill(middlename);
    await this.page.waitForTimeout(500);
    await this.lastname.fill(lastname);
    await this.page.waitForTimeout(500);
    let empId = Math.floor(1000 + Math.random() * 9000);
    await this.empID.fill(empId.toString());
    await this.page.waitForTimeout(500);
    await this.empImage.setInputFiles("testData/files/playwrightimg.png");
    await this.page.waitForTimeout(500);
    await this.createLoginDetails.click();
    await this.page.waitForTimeout(500);
    const username = "Praveen" + Math.floor(1000 + Math.random() * 9000);
    await this.username.fill(username);
    await this.page.waitForTimeout(500);
    await this.password.fill("Praveen@123");
    await this.page.waitForTimeout(500);
    await this.confirmPassword.fill("Praveen@123");
    await this.page.waitForTimeout(500);
    await this.saveButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.personalDetails).toBeVisible();
    await this.page.waitForTimeout(500);
  }

  async addEmpImage() {
    await this.employeeImage.click();
    await this.page.waitForTimeout(500);
    await this.profilePicture.setInputFiles("testData/files/pexels-chevanon-1108099.jpg");
    await this.page.waitForTimeout(500);
    await this.saveProfile.click();
    await this.page.waitForTimeout(500);
  }

  async verifySuccess() {
    await expect(this.successMessage).toBeVisible();
    await this.page.waitForTimeout(500);
  }

  async navigateEmpList(){
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
  }

  async addJobTitle() {
    await this.clickJob.click();
    await this.page.waitForTimeout(500);
    await this.clickJobTitle.click();
    await this.page.waitForTimeout(500);
    await this.addjobTitle.click();
    await this.page.waitForTimeout(500);
    await this.titleSave.click();
  }

  async searchEmployeeName(firstname, middlename, lastname) {
    await this.clickEmpList.click();
    await this.page.waitForTimeout(500);
    await this.empNameSearch.fill(firstname + " " + middlename + " " + lastname);
    await this.page.waitForTimeout(500);
    await this.searchEmployee.click();
    await this.page.waitForTimeout(500);
  }
}

export { addemployeePage };
