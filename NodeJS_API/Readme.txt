To host on Windows Server over IIS
1. Install Node JS, npm install
2. Create IIS Site with proper domain & site bindings
3. Apply SSL cert
4. Install URL Rewrite & Application Request Routing Extension
5. Follow tutorial here - https://dev.to/petereysermans/hosting-a-node-js-application-on-windows-with-iis-as-reverse-proxy-397b
6. Install PM2
7. Enable PM2 as a service
8. Follow guide here - https://blog.cloudboost.io/nodejs-pm2-startup-on-windows-db0906328d75
9. Enable Watch Mode, Cluster Mode & other config here - https://pm2.keymetrics.io/
10. run Server.js using PM2 (follow all guides above)
11. Node JS using Express, MSSQL to host API is now served over Https