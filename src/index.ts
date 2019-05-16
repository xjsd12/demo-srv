import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';

let app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, AppKey, Nonce, CurTime, CheckSum,xservice,xmethod,authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
    //res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//http 请求的body处理[urlencoded json]
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//get的例子 http://127.0.0.1:8082/getdemo
app.get('/getdemo',(req,res)=>{
    res.send('get 请求demo');
})


//静态目录static指定 http://127.0.0.1:8082/test.html
app.use(express.static('./static/antd-course/dist'));

let httpServer = http.createServer(app);
httpServer.listen(8082, function () {
    console.info('http server start at ' + 8082);
});