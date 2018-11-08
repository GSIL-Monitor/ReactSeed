const Koa = require('koa')
const route = require('koa-route');
const serve = require('koa-static');
const app = new Koa();
const sso = require('./sso');
const utils = require('./utils');
const fs = require('fs');
const path = require('path');
const main = serve(path.join(__dirname));

const packageConfig = require(path.resolve(__dirname, './package.json'));
const port = packageConfig.config.port;

app.use(async (ctx, next) => {
    if (ctx.cookies.get("root_principal")) {
        await next();
    } else {
        if (ctx.query["ticket"] !== undefined) {
            const ticket = ctx.query["ticket"];
            const principalId = sso.AppID + utils.randStr();
            const is_sso_cookie_ok = await sso.has_sso_cookie_ok(ticket, principalId);
            if (is_sso_cookie_ok) {
                ctx.cookies.set("root_principal", principalId, {"expires": utils.expireDate(7)});
            }
            ctx.redirect(ctx.origin);
        } else {
            ctx.redirect(sso.LoginUrlPrefix + ctx.origin);
        }
    }
})

app.use(async (ctx, next) => {
    if (ctx.path === '/logout') {
        ctx.cookies.set('root_principal', null);
        ctx.redirect(sso.LogOutUrlPrefix + ctx.origin);
    } else {
        await next()
    }
})


app.use(async (ctx, next) => {
    if (ctx.path === '/slbhealthcheck.html') {
        ctx.response.body = '4008206666';
    } else {
        await next()
    }
})

app.use(main);

//const index = ctx => {
//  ctx.response.type = 'html';
//  console.log(fs.createReadStream('./index.html'));
//  ctx.response.body = fs.createReadStream(__dirname + '/slbhealthcheck.html');
//};

//app.use(route.get('/', index));


app.listen(port);
