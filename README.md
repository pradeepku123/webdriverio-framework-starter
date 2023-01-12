# install & Verify NodeJs
    - node --version # Greater than v12

# Istall Verify TypeScriots
    - tsc -v  # Verify Typescript Insalation    


# 🤖 WDIO Configuration Wizard 🧙
- A project named "webdriverio-framework-starter" was detected at 
-  "/home/pradeep/workstation/webdriverio/webdriverio-framework-starter", correct? Yes
-  ? Where should your tests be launched? local - for e2e testing of web and mobile 
-  applications
- ? Where is your automation backend located? On my local machine
- ? Which framework do you want to use? Mocha (https://mochajs.org/)
- ? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
- ? Do you want WebdriverIO to autogenerate some test files? Yes
- ? Where should these files be located? /home/pradeep/workstation/webdriverio/webdrive
- rio-framework-starter/test/specs/**/*.ts
- ? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? 
- Yes
- ? Where are your page objects located? /home/pradeep/workstation/webdriverio/webdrive
- rio-framework-starter/test/pageobjects/**/*.ts
- ? Which reporter do you want to use? spec
- ? Do you want to add a plugin to your test setup? 
- ? Do you want to add a service to your test setup? chromedriver
- ? What is the base url? http://localhost
- ? Do you want me to run `npm install` Yes

# TestRunner
- npx wdio config -> Reconfigure wdio.conf.ts/js file
- npx wdio run ./wdio.conf.ts --watch -> CLI Command to Execute your Test cases over Watch Mode --watch mode to non exit of execution of Test Cases  watch specs for changes
- npx wdio install ./wdio.conf.ts -> install supported service via wdio.config.ts  reconfigured

- npx wdio repl chrome -> Working as debug purpose & Debugging Mode

# Configuration Files
- its defined ./wdio.conf.ts file contails All info configuration which  needs to Run all your test Suite exports as a json Object
# Runner configuration
- Runner configuration How you want to run test suite
- currently wdio supports 2 types of Runner 
    - LocalRunner
        -  Define with wdio.config.ts file & Execute with node Envirnment isolated  & sont shre data between tests runs
        {runner: 'Local'}
    - Browser Runner
        {runner: 'Browser'}
        - Need to configure compiler & bundeler like vite
# Framework
    - Mocha Framework
    - Jasmine Framework
    - Cucumber Framework

# Execution tests
    - npx wdio run ./wdio.conf.ts  --spec ./test/specs/test.e2e.ts