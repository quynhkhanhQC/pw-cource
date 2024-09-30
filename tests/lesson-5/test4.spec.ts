import { test } from '@playwright/test';

test('Truy cập Bài 03', async({page})=>{
    const notes = [
        { tile: "Title 1", content: "Content 1"},
        { tile: "Title 1", content: "Content 2"},
        { tile: "Title 1", content: "Content 3"},
        { tile: "Title 1", content: "Content 4"},
        { tile: "Title 1", content: "Content 5"},
        { tile: "Title 1", content: "Content 6"},
        { tile: "Title 1", content: "Content 7"},
        { tile: "Title 1", content: "Content 8"},
        { tile: "Title 1", content: "Content 9"},
        { tile: "Title 1", content: "Content 10"},
    ]
    await test.step('Navigate to material playwright việt nam', async() =>{
        await page.goto('https://material.playwrightvn.com/');
    });

    /* Click vào Bài học 3 */
    await test.step('Click vào Bài học 3', async()=>{
        await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
    });

     /* Click vào Bài học 3 */
    await test.step('Add 10 note có nội dung là tiêu dề và một phần ngắn', async()=>{
        for (const note of notes){
            await page.locator('//input[@id="note-title"]').fill(note.tile);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }    
    });

    await test.step("Thực hiện search theo tiêu đề bài báo bất kỳ", async() =>{
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Content 1');
    });  

})

test('Cách lấy trực tiếp title từ trang báo vnexpress', async({page}) =>{
    let titles, contents;

    await test.step('Vào trang https://vnexpress.net/khoa-hoc lấy data', async() =>{
        await page.goto('https://vnexpress.net/khoa-hoc', {waitUntil: 'domcontentloaded'});
        titles = await page.locator('//h3[@class="title-news"]').allTextContents();
        contents = await page.locator('//p[@class="description"]/a').allTextContents();
        console.log(titles);
    });

    await test.step('Navigate to material playwright việt nam', async() =>{
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
    });

    await test.step('Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn', async() =>{
        for(let i = 0; i < 10; i++){
            await page.locator('//input[@id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    });
})