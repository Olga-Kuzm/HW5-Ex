const { When, Then, Given } = require('@cucumber/cucumber');

When('I login as:', async function(table){
    const data = table.hashes() 
    this.state.data = data
    const errors = []
    for (const i of data){
        await $('#login').setValue(i.login)
        await $('#password').setValue(i.password)
        await $('button').click()        
        const errorMsg = await $('#error').getText()        
        errors.push(errorMsg)            
    }
    this.state.errorMsg = errors    
})

Then('I check error messages', async function(){
   const dataMsg = []
   for(const i of this.state.data){
       dataMsg.push(i.errorMsg)
   }
   await expect(dataMsg).toEqual(this.state.errorMsg)
   
})