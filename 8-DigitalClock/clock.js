function myTime(){
  const time = new Date();
  const hh = time.getHours();
  const mm = time.getMinutes();//没有补全烦死了
  const ss = time.getSeconds();
    //这里用const可以不用去判断作用域,比用let和var的性能要好
  // 而且也没必要用变量嘛,上个视频不应该用let的

  document.getElementById('clock').innerText = Math.floor(hh / 10) + (hh % 10 + ':') + Math.floor(mm / 10) + mm % 10 + ':' + Math.floor(ss / 10) + ss % 10;
    //因为js的/不是整除而是会求出浮点数
  //所以这里我们要用Math.floor()方法来向下取整
}//知道是为什么吗?~可以打在弹幕里哦~
myTime();
setInterval(myTime, 1000);