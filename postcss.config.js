const autoprefixer=require("autoprefixer");

/*postcss用来对浏览器编译之后的css做处理*/
module.exports={
    plugins:[
        autoprefixer()   /*自动给一些css加前缀，例如：webkit、moz等*/
    ]
}