describe('The game', function () {
    it('should get more than 100 points ', async function () {
        
        await browser.url('https://viktor-silakov.github.io/course-sut/arkanoid.html');
        await browser.pause(1000);
        await $('button=PLAY').click();
        await browser.waitUntil(async () => { 
            const ballLocation = await $('#ball').getLocation('x');
            const padLocation = await $('#pad').getLocation('x')  
            
            while(ballLocation > padLocation){                
                await browser.keys('d')
                const ballLocation = await $('#ball').getLocation('x');
                const padLocation = await $('#pad').getLocation('x')
                
                if(ballLocation < padLocation){
                    break
                }
            };
            while(ballLocation < padLocation){                                
                await browser.keys('a')
                const ballLocation = await $('#ball').getLocation('x');
                const padLocation = await $('#pad').getLocation('x') 
                
                if(ballLocation > padLocation){
                    break
                }
            }
            const points = parseInt(await $('#points').getText(), 10);
            if (points > 100) return true
            console.log({ points })
        }, { timeout: 600000, interval: 10 }) 
        
    });
})

