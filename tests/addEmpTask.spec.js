import {test} from '@playwright/test'
import { addemployeePage } from '../PageObjects/addemp.po'
import addemployeedata from '../testData/files/addemployee.json'


test.describe('Add Employee Flow - OrangeHRM', () => {

  test('Add new employee with login details', async ({ page }) => {

    const addEmp = new addemployeePage(page);
    
    await addEmp.launchUrl()
    await addEmp.loginSuccess(addemployeedata.loginUsername, addemployeedata.loginPassword);
    await addEmp.navigatePIM();
    await addEmp.navigateAddEmployee();
    await addEmp.createEmployee(addemployeedata.firstname, addemployeedata.middlename, addemployeedata.lastname);
    await addEmp.addEmpImage();
    await addEmp.addJobTitle();
    await addEmp.verifySuccess()
    await addEmp.searchEmployeeName()
    await addEmp.searchEmployeeName(addemployeedata.firstname, addemployeedata.middlename, addemployeedata.lastname);
  });

});