;
(function(win){
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        console.log(width);
        if (width > 640){
            width = 640;
        }
        //设计1rem 等于设计稿中100px的值
        var rem = width/6.4;
        console.log(rem);
        docEl.style.fontSize = rem + 'px';
    }
    //页面缩放
    win.addEventListener('resize',function(){
        //每次运行到这个函数先清除tid
        clearTimeout(tid);
        //每隔300毫秒获取一下最大宽度 并转化为rem
        tid = setTimeout(refreshRem,300);
    },false);
    //页面加载
    win.addEventListener('pageshow',function(e){
        if(e.persisted){
            clearTimeout(tid);
            tid = setTimeout(refreshRem,300);
        }
    },false);

    refreshRem();

})(window);