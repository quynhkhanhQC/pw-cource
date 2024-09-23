import { test } from '@playwright/test';

test('Truy cập Bài 03', async({page})=>{
    /* Truy cập website */
    await page.goto('https://material.playwrightvn.com/');

    /* Click vào Bài học 3 */
    await test.step('Click vào Bài học 3', async()=>{
        await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
    });

     /* Click vào Bài học 3 */
    await test.step('Add 10 note', async()=>{
        for(let i = 1; i <= 10; i++){
            await page.locator('//input[@id="note-title"]').fill(`Note ${i}`);
            /* Tạo content xuống dòng */
            const content = 'Buổi chiều\nBuổi sáng\nBuổi tối';
            await page.locator('//textarea[@id="note-content"]').fill(content);
            await page.locator('//button[@id="add-note"]').click();
        }      
    });



    

})