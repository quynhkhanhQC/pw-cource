import { test } from '@playwright/test';

const date = "2024-09-24";
const username = "Playwright Việt Nam";
const email = "quynhkhanh152@gmail.com";
const descriptipn = "K9-class";
const country = "usa";

test('Truy cập Bài 01', async({page})=>{

    await test.step('Navigate to material playwright việt nam', async() =>{
        await page.goto('https://material.playwrightvn.com/');
    });
    
    await test.step('Click vào Bài học 1', async() =>{
        await page.locator("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]").click();
    });

    await test.step('Fill informationto to all field', async() =>{
        await page.locator('//input[@id="username"]').fill(username);
        await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//input[@id="male"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.selectOption('//select[@id="country"]', country);
        await page.locator('//input[@id="dob"]').fill(date);
        await page.locator('//input[@id="profile"]').setInputFiles(`tests/lesson-5/test-data/image.png`);
        await page.locator('//textarea[@id="bio"]').fill(descriptipn);
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id="newsletter"]').check();
    });

    await test.step('Click Register button', async() =>{
        await page.locator("//button[normalize-space()='Register']").click();
    });

})