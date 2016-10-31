
var countTime;//这个计时器必须定义为全局变量，否则再次点击onclick的时候
              //无法解除上次的计时器
$('#showTime').onclick = function(){

    var timeValue = $('#time').value;
    var timearr = timeValue.split('-');
    var pattern = /\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|(3[0-1]))/;
    
    clearInterval(countTime);
    $('#showArea').innerHTML = '';
    countTime = setInterval(count,500);
    function count(){
		if (pattern.test(timeValue)) {
			var currentTime = new Date();
			var futureTime = new Date();
			futureTime.setFullYear(timearr[0],timearr[1],timearr[2]);
			futureTime.setHours(0,0,0);
			var secgap = futureTime.getTime()-currentTime.getTime();
			
			if (secgap<0) {
				$('#showArea').innerHTML = "请输入一个未来的时间。否则倒计时无意义";
				clearInterval(countTime);
			}
			else if (secgap === 0) {
                $('#showArea').innerHTML = "倒计时结束";
                clearInterval(countTime);
			}
			else {
				
				var days = Math.floor(secgap/1000/3600/24);
				var hours = Math.floor((secgap-days*1000*3600*24)/1000/3600);
				var minutes = Math.floor((secgap-days*1000*3600*24-hours*1000*3600)/1000/60);
				var seconds = Math.floor((secgap-days*1000*3600*24-hours*1000*3600-minutes*1000*60)/1000);
				$('#showArea').innerHTML = "距离"+timearr[0]+"年"+timearr[1]+"月"+
				   timearr[2]+"日还有"+days+"天"+hours+"小时"+minutes+"分"+seconds+"秒";
			}

		}
		else $('#showArea').innerHTML = "请输入正确的时间格式";
	}
}

