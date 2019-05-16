/**
 *api
 */
import Router from 'express-promise-router';

let router = Router();

//TODO: 为方便 阿里云api网关+函数计算的移植 前端请求统一到一个路由上 /api
// 原路由path 添加到 headers['service'] 和 headers['method']
router.post('/',async (req,res)=>{
    //TODO:  headers['service'] 和 headers['method']
    let service = req.get('xservice');
    let method = req.get('xmethod');
    console.log('service method:',{service,method});

    const m = require(`../../services/${service}`);
    const func = m[service]?m[service][method]:false;
    if(!func){
        res.send({out:'62'});
    }else{
        //TODO: 先做基本的权限检查
        //let chk = await m[service]['baseCheck'](req,service,method);
        let chk = true;
        if(!chk){
            //基本权限检查不通过的情况
            res.send({out:'63'});
        }else{
            let out = await func(req);
            res.send(out);
        }  
    }
})

export {router};