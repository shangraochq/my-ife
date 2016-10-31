$("#showHobby").onclick = function(){
			var inter = $("#hobby").value;
			var arr_inter = inter.split(/\n|\s+|，|,|、|;|；/);
			var uniArr = uniqArray(arr_inter);
			var contain = $('#container');
			var count = 0;
			console.log(uniArr);
			$("#show").innerHTML = "您的兴趣爱好为：" + '<br>';
            for(var i = 0; i < uniArr.length; i++){
				if (uniArr[i] === undefined || uniArr[i]==='') {
					continue;
				}
				count++;
			}
			if (count>10) {
				$('#hint10').style.display = 'block';
				$('#hint0').style.display = 'none';
			}
			else if (count == 0) {
				$('#hint0').style.display = 'block';
				$('#hint10').style.display = 'none';
			}
			else{
				for(var i = 0; i < uniArr.length; i++){
				if (uniArr[i] === undefined || uniArr[i]==='') {
					continue;
				}
                
                var input = document.createElement('input');
                input.type = 'checkbox';
                input.value = uniArr[i];
                var textNode = document.createTextNode(uniArr[i]);
                $('#show').appendChild(input);
                $('#show').appendChild(textNode);
                $('#show').innerHTML+='<br>';
                $('#hint10').style.display = 'none';
                $('#hint0').style.display = 'none';
			}
			}
		}
