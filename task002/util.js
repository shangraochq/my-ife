//判断是否为数组
function isArray(arr){
	return arr&&typeof arr==='object'&&arr.constructor==Array;
}
var a=[];

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
chq={
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
console.log(tarObj.b.b1[0]);    // "hello"

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
function uniqArray(arr) {
    var newArr = []; //创建空数组
    for (var i in arr) { //遍历旧数组
        if (newArr.indexOf(arr[i]) == -1) { //如果新数组中不存在当前元素
            newArr.push(arr[i]); //新数组中加入当前元素
        }
    }
    return newArr;
}


// 使用示例
var a = [1, 3, 'ddd', 7, 'ddd', 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]


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
a=' 　	aaa   aa 　	'
simpleTrim(a);
