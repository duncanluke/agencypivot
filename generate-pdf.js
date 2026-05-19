const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    await page.emulateMediaType('print');
    
    console.log("Navigating to local page...");
    await page.goto('http://localhost:3000/company-profile', { waitUntil: 'networkidle0' });
    
    console.log("Generating PDF...");
    await page.pdf({
      path: '/Users/duncanluke/Developer/agent/agencypivot/public/TSC-Company-Profile.pdf',
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }
    });
    
    console.log("PDF successfully generated");
    await browser.close();
  } catch (error) {
    console.error("Error generating PDF:", error);
    process.exit(1);
  }
})();
