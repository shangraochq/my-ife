function getByClass(oParent, sClass)
{
	var aEle=(oParent||document).getElementsByTagName('*');
	var i=0;
	var aResult=[];
	
	for(i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}
var circle = document.getElementsByTagName('a');
var image = document.getElementsByTagName('img');
var imagelist = $(".img_list");
var imgwidth = $("img").offsetWidth;
var a ;
for(var i = 0; i<circle.length; i++){
	circle[i].index = i;
    circle[i].onclick = function(){
    	console.log(i);
    }
    circle[i].onmouseover = function(){
		startMove(imagelist,'left',-(imgwidth+9)*this.index);
	}

}

