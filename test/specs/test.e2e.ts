describe("DES_01", () => {
  it("TC_001", async () => {
    console.log("Welcome To TC_001");
    await browser.setTimeout({ implicit: 10000, pageLoad: 10000 });
    await browser.maximizeWindow();
    await browser.url(`http://localhost:3000`);

    await $(`#username`).setValue(`Hello`);

    await browser.pause(3000);
  });
});
