// 配置本地dev代理服务器
export default {};

// export default {
//   '/api': {
//     // 多路径代理配置
//     target: 'http://api.example.com',
//     changeOrigin: true,
//     rewrite: (path) => path.replace(/^\/api/, ''),
//   },

//   '/uploads': {
//     target: 'http://static.example.com',
//     changeOrigin: true,
//   },
//   '^/user/.*': {
//     // 通过正则表达式灵活匹配复杂路径：
//     // 匹配所有以 /user/ 开头的请求
//     target: 'http://user-service.com',
//     changeOrigin: true,
//   },
//   '/socket': {
//     target: 'ws://your-websocket-server',
//     ws: true, //配置 ws: true 可代理 WebSocket 请求：
//   },
// };
