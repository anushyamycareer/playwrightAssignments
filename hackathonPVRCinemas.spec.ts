/*
TEST CASE TITLE: Verify dynamic movie ticket booking flow in PVR Cinemas website
TEST STEPS:
1. Launch the browser.
2. Navigate to https://www.pvrcinemas.com/.
3. Select the required city.
4. Click on the Cinema option.
5. Click on Select Cinema dropdown.
6. Select any available cinema from the list.
7. Select any available date (Today/Tomorrow/Upcoming).
8. Select any available movie from the movie list.
9. Select any available show time.
10. Click on the Submit button.
11. Accept the consent/cookie popup if displayed.
12. Accept any additional confirmation popup if displayed.
13. Select any available seat from the seating layout.
14. Verify the selected seat information is displayed.
15. Verify the total ticket amount is displayed.
16. Verify the page title is displayed correctly.
17. Click on the Proceed button.
Expected Result
User should be able to dynamically select cinema, movie, date, show time, and seat, view booking
details, and proceed successfully.
*/

import { expect, test } from '@playwright/test';

test ("Book the movie ticket in PVR Cinemas",async ({page}) => {

    await page.goto("https://www.pvrcinemas.com/");
    await expect(page.locator("//h4[contains(text(), 'Select City')]")).toBeVisible();
    await page.locator("//h6[@class='cities-name pointer' and text()='Bengaluru']").click(); //Choose city
    await page.locator("//span[@class='cinemas-inactive']").click(); //Choose Cinema Option
    await page.locator("//span[@class='p-dropdown-label p-inputtext p-placeholder' and text()='Select Cinema']").click(); 
    await page.locator('//span[text()="INOX Garuda Mall, Magrath Road Bengaluru"]').click(); //Choose Cinema: INOX
    await page.locator('(//li[@class="p-dropdown-item"]/span)[2][contains(text(), "Tomorrow")]').click(); //Choose Date: Tomorrow
    await page.locator('(//li[@class="p-dropdown-item"]/span)[2][text()="MOANA"]').click(); //Choose Movie: MOANA
    await page.locator('(//li[@class="p-dropdown-item"]/span)[3][text()="INSIGNIA"]').click(); //Choose Timing: INSIGNIA
    await page.locator('//button[@class="p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn"]/span[contains(text(), "Book")]').click(); 
    await page.locator('//button[@class="sc-kCuUfV iBvycX reject-terms" and text()="Accept"]').click();
    
    //await expect(page.locator("//a[@id='pr_id_1005_header_2'][@aria-selected='true']")).toBeVisible();
    await page.locator('//span[@id="RR.Royale Recliners|B:6"]').click();
    
    //Booking Summary
    await expect(page.locator("//h3[contains(text(), 'Booking Summary')]")).toBeVisible();

    const selectedMovieName = await page.locator('//div[@class="movies-summary"]//h5').innerText() 
    console.log(`The selected seat number is: ${selectedMovieName}`); //Get the selected movie name

    const selectedSeatNumber = await page.locator('//div[@class="seat-number"]//p/p').innerText() 
    console.log(`The selected seat number is: ${selectedSeatNumber}`); //Get the seat number

    const grandPrice = await page.locator('//div[@class="grand-prices"]').innerText() 
    console.log(`The Grand Price is: ${grandPrice}`); //Get the Grand Price
    
    const pvrPageTitle = await page.title();
    console.log(`The PVR Page Title is: ${pvrPageTitle}`);

    await page.locator("//button[@class='sc-bbbBoY kbsOBB btn-proceeded' and text()='Proceed']").click(); //Proceed with checkout
    
})