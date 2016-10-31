
//task 2
//判断是否为数组
function isArray(arr){
	return arr&&typeof arr==='object'&&arr.constructor==Array;
}
//var a=[];

//--------------------------------------------------------------
//判断是否为函数	
function isFunction(Fn){
     return typeof Fn;
}


//----------------------------------------------------------------
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    var o;
    if (src&&typeof src==='object'&&src.constructor==Array) {
    	o=[];
    }else o={};
    
    for(var p in src){
    	if (src.hasOwnProperty(p)) {
    		o[p]=src[p];
    	}
    }
    return o;
}
/*chq={
	x:1,
	y:2
}
cloneObject(chq);
// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"   */

//------------------------------------------------------------------
//对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
//method 1
function uniqArray(arr) {
    // your implement
    for (var i = arr.length - 1; i >= 0; i--) {
    	for(var j = 0; j<i;j++){
    		if (arr[i]==arr[j]) {//某个数组的值与其他值比较，相等则删除
    			delete arr[i];
    			break;
    		}
    	}
    }
    return arr;
}
//method 2
/*function uniqArray(arr) {
    var newArr = []; //创建空数组
    for (var i in arr) { //遍历旧数组
        if (newArr.indexOf(arr[i]) == -1) { //如果新数组中不存在当前元素
            newArr.push(arr[i]); //新数组中加入当前元素
        }
    }
    return newArr;
}*/


// 使用示例
//var a = [1, 3, 'ddd', 7, 'ddd', 3];
//var b = uniqArray(a);
//console.log(b); // [1, 3, 5, 7]


//-------------------------------------------------------------------------------
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    var copy='';
    for(var i = 0; i<str.length; i++){
    	if(!(str[i]===' '||str[i]==='\t'||str[i]==='　')){//当不是空是，跳出循环
    		break;
    	}
    }
    for (var j = str.length - 1; j >= 0; j--) {
    	if (!(str[j]===' '||str[j]==='\t'||str[j]==='　')) {
    		break;
    	}
    }
    return str.substring(i,j+1);//返回中间的数组
}
//a=' 　	aaa   aa 　	'
//simpleTrim(a);

//-------------------------------------------------------------
//很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    return str.replace(/^\s*/,'').replace(/\s*$/,'');//首先替换开头空格，接着替换结束空格
}

// 使用示例
//var str = '   hi!  ';
//str = trim(str);
 
 //----------------------------------------------------------------
 // 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr,fn){
	for(var i in arr){
		fn(arr[i],i);
	}
}
// 其中fn函数可以接受两个参数：item和index

// 使用示例
/*var arr = ['"java"', '"c"', '"php"', '"html"'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html  */

//------------------------------------------------------------
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var j=0;
	for(var i in obj){
		j++;
	}
	return j;
}

//获取一个对象里面所有元素的数量，返回一个整数
function getObjectLength(obj){
	var j=0;
	
	for(var i in obj){
		if (typeof obj[i] ==='object') {//注意这里不能用obj.i，因为此时
			j++;                        //i='c'是一个字符串，obj.'c'显然是没有意义的
			for(var k in obj[i])
				j++;
		}else j++;
	}
    console.log(j);

}
// 使用示例
/*var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4,
        c3: 4

    }
};
getObjectLength(obj); */

//----------------------------------------------------------------
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    var jud_ema = /^\w+@(\w+\.)+\w+$/;
    return jud_ema.test(emailStr);
}
var a="2296226334@qq.com";
var b="11323423423@qqcom";
var c="shangrao1234@126.com";
var d="m201571001@hust.edu.cn";
isEmail(a);
// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    var jud_tel = /[0-9]{11}/;
    return jud_tel.test(phone)
}
//var a="13006156645";
//var b='122334';


//------------------------------------------------------------
//task 3
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    element.className="newClassName";
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    element.className='';
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return element.parentNode===siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}


//---------------------------------------------------------------------


// 实现一个简单的Query
function $(selector) {
   var iden = /^#\w+$/;//匹配#adom
   var tag = /^\w+$/;//匹配a
   var classaa = /^\.\w+$/;//匹配.classa
   var arrti = /^\[\w+\-\w+\]$/;//匹配[data-log]
   var arrti_value = /^\[\w+\-\w+=\w+\]/;//匹配[data-time=2015]
   var child = /^#\w+\s+\.\w+$/;//匹配#adom .classsa
   if (iden.test(selector)) {// 可以通过id获取DOM对象，通过#标示，例如
   	var str=selector.match(/\w+/);//匹配#后面的ID
   	return document.getElementById(str[0])
   }
   if (tag.test(selector)) {// 可以通过tagName获取DOM对象
   	return document.getElementsByTagName(selector)[0]
   }
   if (classaa.test(selector)) {// 可以通过样式名称获取DOM对象，例如
  	var str=selector.match(/\w+/);
   	return document.getElementsByClassName(str[0])[0]
   }
   if (arrti.test(selector)) {// 可以通过attribute匹配获取DOM对象
   	var str= selector.match(/\w+\-\w+/);//匹配[]中间的属性名
   	var allnode = document.getElementsByTagName('*');//获取所有HTML对象
   	for(var i = 0; i<allnode.length; i++){//循环匹配所有HTML对象，如果
   		                                   //存在该属性则返回该对象
   		if (allnode[i].getAttribute(str[0])!==null) {//null是一个类型
   			                     //并不是一个字符串值，所以不能写成'null'
   			return allnode[i];
   			break;
   		}
   	}
   }
   if (arrti_value.test(selector)) {// 可以通过简单的组合提高查询便利性，例如
   	var str=selector.match(/\w+\-\w+/);//匹配[data-time=2015]中的属性名

   	var str_time=selector.match(/\d+/)//匹配属性值2015
   	var allnode = document.getElementsByTagName('*');
   	for(var i = 0; i<allnode.length; i++){//循环匹配若有符合这返回对象
   		if (allnode[i].getAttribute(str[0])==str_time[0]) {
   			return allnode[i];
   			break;
   		}
   	}
   }
   if (child.test(selector)) {// 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
   	var str=selector.match(/\w+/);//匹配[#adom .classa]中的adom
   	var father=document.getElementById(str[0]);
   	var child_nodes=father.childNodes;//获得#adom所有的子节点
   	var strClass=selector.match(/\.\w+/);
   	var strClass1=strClass[0].match(/\w+/);//匹配classa
   	for(var i=0; i<child_nodes.length; i++){
   		                          //循环匹配#adom子节点中类名为classa的节点 
   		if (child_nodes[i].className==strClass1[0]) {
   			return child_nodes[i];
   			break;
   		}
   	}
   }

}

/* 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象 */



//-------------------------------------------------------------------
//task 4 事件
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if (element.addEventListener) {
      element.addEventListener(event,listener,bool);
    }else if (element.attachEvent) {
      element.attachEvent('on'+event,listener);
    }else element['on'+event] = listener;
}

/* 例如：
function clicklistener(event) {
    ...
}
addEvent($("#doma"), "click", function(event){
  event = event || window.event;
  alert(event.target || event.srcElement);
});   */

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) {
      element.removeEventListener(event,listener,bool);
    }else if (element.detachEvent) {
      element.detachEvent('on'+event,listener);
    }else element['on'+event] = null;

}


//接下来我们实现一些方便的事件方法

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element,'click',listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    addEvent(element,'keydown',function(event){
      if (event.keyCode == 13) {
        listener();
      }
    })
}



//事件代理
function delegateEvent(element, tag, eventName, listener) {
    // your implement
    addEvent(element,eventName,function(event){
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.tagName.toLowerCase() == tag.toLowerCase()) {
        listener;
      }
    });

}



//估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：

$.on = function(selector, event, listener) {
    addEvent($(selector), event, listener);
};
$.click = function(selector, listener) {
    addClickEvent($(selector), listener);
};
$.un = function(selector, event, listener) {
    removeEvent($(selector), event, listener);
};
$.delegate = function(selector, tag, event, listener) {
    delegateEvent($(selector), tag, event, listener);
};


// 使用示例：
//$.click("[data-log]", logListener);
//$.delegate('#list', "li", "click", liClicker);



//5.BOM
// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
    var verison = navigator.userAgent;
    var reg = verison.match(/MSIE (\w+\.\w+)/);
    if (reg) {
      document.write(reg[1]);
    }else document.write('-1');
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var d = new Date();
    d.setDate(d.getDate()+expiredays);
    var expires = 'expires='+d.toUTCString();
    document.cookies = cookieName + '=' + cookieValue +';' +expires;
}

// 获取cookie值
function getCookie(cname) {
    // your implement
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


//task6

// 
function ajax(url, options) {
    // your implement
    if (typeof(options.data) === 'object') {
      var attri = '';
      for(var c in option.data){
        attri = c + '=' + options.data[c] + '&';
      }
      var datas = attri.substring(0,attri.length-1);
    }
    var request = new XMLHttpRequest(),
        types = options.type || 'GET';

    if (types == 'GET') {
       request.open(types,url+'?'+datas);
       request.send();
    }else{
       request.open(types,url);
       request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
       request.send(datas);
    }
    request.onreadystatechange = function(){
       if (request.readyState === 4) {
        if (request.request.status == 200) {
          if (options.onsuccess) {
            options.onsuccess(request.responseText,request)
          }
        }else{
          if (options.onfail) {
            options.onfail(request.responseText,request);
          }
        }
       }
    }

}

/* 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);


options是一个对象，里面可以包括的参数为：

- type: `post`或者`get`，可以有一个默认值
- data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
- onsuccess: 成功时的调用函数
- onfail: 失败时的调用函数  */





