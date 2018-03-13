'use strict'

var Koa = require('koa');
var wechat = require('./wechat/g.js')
var config = {
    wechat: {
        appID:'',
        appSecret:'',
        token:''//自己设置的
    }
}
var app = new Koa();//实例化koa的web服务器

app.use(wechat(config.wechat)) //use一个中间件传入一个回调函数  Koa的中间件是generator

app.listen(1234)
console.log('Listening: 1234')