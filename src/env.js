let baseURL;
/**
 * process.env.NODE_ENV: 获取nodejs进程里一些环境变量
 */
switch (process.env.NODE_ENV) { //nodejs的API
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseURL
}
