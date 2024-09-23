import { test } from '@playwright/test';

test('Truy cập Bài 01', async({page})=>{
    await page.goto('https://material.playwrightvn.com/');
    await test.step('Click vào Bài học 1', async()=>{
        await page.locator("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]").click();
    })
})