/* Week2 Day2 Assignment: Launch Red Bus and Flipkart in Edge and Firefox Browser Instances.
 Red Bus: https://www.redbus.in 
 Flipkart: https://www.flipkart.com
*/

import { chromium, firefox } from "@playwright/test" 
import { test } from "@playwright/test" 

test("Launch Red Bus Edge Browser", async()=>{ 
    const redbus = await chromium.launch({headless:false, channel:"msedge"})
    const context = await redbus.newContext() 
    const page = await context.newPage()
    
    await page.goto("https://www.redbus.in");
    const url = page.url(); 
    console.log(`The URL of Redbus is: ${url}`);
    const title = await page.title() 
    console.log(`The title of Redbus is: ${title}`); 
} )

test("Launch Flipkart in Firefox Browser", async()=>{ 
    //const flipkart = await firefox.launch()
    const flipkart = await firefox.launch({headless:false, channel:"firefox"})
    const context = await flipkart.newContext() 
    const page = await context.newPage()
    
    await page.goto("https://www.flipkart.com");
    const url = page.url();
    console.log(`The URL of Flipkart is: ${url}`); 
    const title = await page.title() 
    console.log(`The title of Flipkart is: ${title}`); 
} )