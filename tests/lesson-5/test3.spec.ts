import { test } from '@playwright/test';

test('Truy cập Bài 03', async({page})=>{
    /* Truy cập website */
    await page.goto('https://material.playwrightvn.com/');

    /* Click vào Bài học 3 */
    await test.step('Click vào Bài học 3', async()=>{
        await page.locator("//a[contains(text(),'Bài học 3: Todo page')]").click();
    });

    /* Thêm mới 100 todo item */
    await test.step('Thêm mới 100 todo item', async() =>{
        for(let i = 1; i <= 100; i++){
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }  
    });

    /* Xóa các item số lẻ */
    await test.step('Xóa các item số lẻ', async() =>{
        const totalItem = await page.locator('//ul[@id="task-list"]/li').count();
        page.on('dialog', async dialog => {
            console.log(dialog.message()); // Hiển thị message của dialog
            await dialog.accept(); // Nhấn nút "OK" trên popup
        });
        for(let i = 0; i < totalItem; i++){
            if((i+1) % 2 !== 0){
                const deleteItem = await page.locator(`//button[@id="todo-${i+1}-delete"]`)
                await deleteItem.waitFor(); // Đảm bảo đã kịp load element
                await deleteItem.click();
            }
        }
    });
})