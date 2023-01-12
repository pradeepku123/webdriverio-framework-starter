describe("DES_01", () => {
  it("TC_001", async () => {
    console.log("Welcome To TC_001");
    await browser.url(`http://localhost:3000`);
    await browser.maximizeWindow();
    await browser.debug(10000);
  });
});
