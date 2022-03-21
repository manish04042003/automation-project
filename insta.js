const puppeteer = require('puppeteer');
// const cheerio = require('cheerio');
const ID = 'test_for_automation_';

const Password = "XYZ";

let targetID = 'insta_user_name';




(async function(){
    try {
        let lanch = await puppeteer.launch({
            headless: false,
            args: ["--start-maximized"],
            defaultViewport: null,
        });

        let opentab = await lanch.newPage();
        await opentab.goto('https://www.instagram.com/')

        

        await opentab.waitForSelector('input[aria-label="Phone number, username, or email"]',{visible : true});
        await opentab.type('input[aria-label="Phone number, username, or email"]',ID, {delay : 100});
        await opentab.type('input[type="password"]',Password, {delay : 100});
        await opentab.click('div[class="             qF0y9          Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              "]')
        await opentab.waitForSelector('input[aria-label="Search Input"]',{visible : true});
        await opentab.type('input[aria-label="Search Input"]',targetID),{delay: 200};
        let selectandclick = 'a[href="/'+targetID+'/"]'; 
        await opentab.waitForSelector(selectandclick,{visible : true});
        await opentab.click(selectandclick);
        

        await opentab.waitForSelector('.KL4Bh',{visible : true});
        await opentab.click('.KL4Bh');
        for(let i=0 ; i<10; i++){
          await opentab.waitForSelector('.fr66n',{visible : true});
          await opentab.click('.fr66n');
          if(i%2==0){
            await opentab.type('textarea[aria-label="Add a comment…"]','🔥🔥🔥🔥🔥',{delay : 100});
          }else{
            await opentab.type('textarea[aria-label="Add a comment…"]','❤️❤️❤️❤️❤️',{delay : 100});
          }
          await opentab.waitForSelector('div[class="_7UhW9   xLCgt        qyrsm      gtFbE     uL8Hv        T0kll "]',{visible : true})
        
          await opentab.click('.l8mY4.feth3',{delay : 200});
        }
       
       

        


    } catch (error) {
        console.log(error)
    }
})()


function waitandclick(slector, cpage) {
    return new Promise(function (resolve, reject) {
      let waitformodalpromise = cpage.waitForSelector(slector,{visible : true});
      waitformodalpromise
        .then(function () {
          let clickonselctor = cpage.click(slector, { delay: 10 });
          return clickonselctor;
        })
        .then(function () {
          resolve();
        })
        .catch(function () {
          reject();
        });
    });
  }