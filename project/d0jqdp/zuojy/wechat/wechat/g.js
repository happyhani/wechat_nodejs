'use strict'

var Koa = require('koa');
var wechat = require('./wechat/g.js')
var config = {
    wechat: {
        appID:'',
        appSecret:'',
        token:''//�Լ����õ�
    }
}
var app = new Koa();//ʵ����koa��web������

app.use(wechat(config.wechat)) //useһ���м������һ���ص�����  Koa���м����generator

app.listen(1234)
console.log('Listening: 1234')