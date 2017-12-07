# NYSeeBackend
Express &amp; MongoDB backend for NYSee application

![](https://github.com/heyconnie/NYSee/blob/master/images/nysee-24bit-400x135.png?raw=true)
----
*Interior Navigation Mobile Application to assists users in navigating in interior spaces (focus on subway stations).*

## Getting Started
1. Make sure to have **node**, **npm**, and **MongoDB** properly installed.
2. ` git clone https://github.com/heyconnie/NYSeeBackend.git `
3. ` cd NYSeeBackend `
4. ` npm install `
5. ` npm start -- --reset-cache`
6. ` http://127.0.0.1:3000/PATHdb`

## Making REST Calls to Backend
Use Postman, select 'PUT' and use the URL `http://localhost:3000/path/NE145StEdgeCombAveDUptown` for example,
then in the parameters body section, click the radio option `x-www-form-urlencoded` and type `path` for a "Key",
and for "Value" type a realistic path like `D23L14S10D40R2`, and then send it.

Use Robo3T or similar to verify it was added in the correct pathArray.
