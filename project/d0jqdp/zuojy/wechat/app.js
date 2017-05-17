'use strict'

var Koa = require('koa');
var sha1 = require('sha1');
var config = {
    wechat: {
        appID:'',
        appSecret:'',
        token:''//自己设置的
    }
}
var app = new Koa();//实例化koa的web服务器

app.use(function *(next){ //use一个中间件 
    console.log(this.query)
    
    var token = config.wechat.token
    var signature = this.query.signature
    var nonce = this.query.nonce
    var timestamp = this.query.timestamp
    var echostr = this.query.echostr
    var str = [token, timestamp, nonce].sort().join('')
    var sha = sha1(str)
    
    if(sha === signature){
        this.body = echostr + ''
    }else {
        this.body = 'wrong'
    }
    
    
})

app.listen(1234)
console.log('Listening: 1234')