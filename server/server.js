const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = '35551';

router.get('/', (ctx, next) => {
  ctx.body = "我是首页"
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server is runing ${PORT}!`);
});