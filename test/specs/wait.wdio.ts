describe("Wait Configuration in wdio", () => {
  it("WaitForClickabel", async () => {
    console.log(`WaitForClickabel`);
    await browser.setTimeout({ implicit: 5000, pageLoad: 10000 });
    await browser.maximizeWindow();
    await browser.url(`http://localhost:3000/`);
    await $(`[data-test="signin-submit"]`).click();
    await (
      await $(`[data-test="signin-submit"]`)
    ).waitForEnabled({ timeout: 5000, reverse: true });
    await browser.pause(5000);
  });
});
