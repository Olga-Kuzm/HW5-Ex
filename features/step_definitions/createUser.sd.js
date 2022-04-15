const { When, Then, Given } = require('@cucumber/cucumber');
const YAML = require('yaml');

When('I fill the form:', async function(form){
    const data = YAML.parse(form)
    this.state = data    
    await $('#email').setValue(data.email);
    await $('#password').setValue(data.password);
    await $('//*[@id="address1"]').setValue(data.Address);
    await $('//*[@id="address2"]').setValue(data.Address2);
    await $('//*[@id="zip"]').setValue(data.Zip);
    await $('//*[@id="description"]').setValue(data.Description);  
    await $('//*[@id="city"]').setValue(data.City);
    await $('button*=Create').click()
})

Then ('I check created user in {string}', async function(item){
    const elem = await $(`*=${item}`)
    await $(elem).click()
    const email = await $('//div[@class="tabulator-table"]/*[2]').$('./*[1]');           
    const address1 = await $('//div[@class="tabulator-table"]/*[2]').$('./*[3]');
    const address2 = await $('//div[@class="tabulator-table"]/*[2]').$('./*[4]');
    const city = await $('//div[@class="tabulator-table"]/*[2]').$('./*[5]');    
    const zip = await $('//div[@class="tabulator-table"]/*[2]').$('./*[7]');
    const description = await $('//div[@class="tabulator-table"]/*[2]').$('./*[8]');
    await expect (email).toHaveTextContaining(this.state.email);
    await expect (address1).toHaveTextContaining(this.state.Address);
    await expect (address2).toHaveTextContaining(this.state.Address2);
    await expect (city).toHaveTextContaining(this.state.City);    
    await expect (zip).toHaveTextContaining(this.state.Zip)
    await expect (description).toHaveTextContaining(this.state.Description)

})