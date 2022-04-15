describe('The game', function () {
    it('should get more than 100 points ', async function () {
        
        await browser.url('https://viktor-silakov.github.io/course-sut/arkanoid.html');
        await browser.pause(1000);
        await $('button=PLAY').click();
        await browser.waitUntil(async () => {            
            const ballLocation = await $('#ball').getLocation();
            const padLocation = await $('#pad').getLocation()    
                while(ballLocation.x > padLocation.x){
                    await browser.keys('d')
                    if(ballLocation = padLocation){
                        break
                    }
                };                           
                while(ballLocation.x < padLocation.x ){
                    await browser.keys('a')
                    if(ballLocation = padLocation){
                        break
                    }
                }
            

            const points = parseInt(await $('#points').getText(), 10);
            if (points > 100) return true
            console.log({ points })
        }, { timeout: 600000, interval: 10 }) 
        
    });
})
