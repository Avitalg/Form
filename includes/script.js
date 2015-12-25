window.onload=function radioEvent(){
	var obj1=document.getElementById("radio1");
	var obj2=document.getElementById("radio2");
	var obj3=document.getElementById("rain");
	var sky=1;
	obj1.onchange=function(){
		document.getElementsByTagName("body")[0].className ="clear";
	   	document.getElementById("wrapper").className="sun";
	   	sky=1;
	};
	obj2.onchange=function(){
		document.getElementsByTagName("body")[0].className= "night";
	   		document.getElementById("wrapper").className="moon";
	   		sky=2;
	};
	
	obj3.onclick=function(){
		switch(this.selectedIndex){
		case 1://rain
			document.getElementById("cloudy1").className="bad_cloud";
			document.getElementById("cloudy2").className="bad_cloud";
			document.getElementById("cloudy3").className="bad_cloud";
			document.getElementsByTagName("body")[0].className="light";
			setTimeout(function(){ 
				if(sky == 1) {
					document.getElementsByTagName("body")[0].className="clear";
 
				}
				else{
					document.getElementsByTagName("body")[0].className="night"; 

				}
				}, 300);
				
				
			break;
		case 0: case 2: //snow and clouds
			document.getElementById("cloudy1").className="nice_cloud";
			document.getElementById("cloudy2").className="nice_cloud";
			document.getElementById("cloudy3").className="nice_cloud";
		
			break;
		case 3://clean
			document.getElementById("cloudy1").className="";
			document.getElementById("cloudy2").className="";
			document.getElementById("cloudy3").className="";
		}
	};
	
};


