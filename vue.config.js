const path = require("path");


module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://m.douban.com",
                changeOrigin: true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),//接口
                "@components":path.join(__dirname,"./src/components"),//组件
                "@assets":path.join(__dirname,"./src/assets"),//静态文件(会经过webpack打包),public里面的文件不会被webpack打包
                "@common":path.join(__dirname,"./src/common"),//公共
                "@pages":path.join(__dirname,"./src/pages"),//页面
                "@router":path.join(__dirname,"./src/router"),//路由
                "@store":path.join(__dirname,"./src/store"),//Vuex
                "@utils":path.join(__dirname,"./src/utils"),//自己封装的工具类函数
                // "@public":path.join(__dirname,"../../../public/img/")//图片
            }
        }
    }
}