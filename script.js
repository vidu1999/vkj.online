const typed= new Typed('.mt2',{
	strings:['FULL STACK WEB DEVELOPER','GAME DEVELOPER','GRAPHIC DISIGNER'],
	typeSpeed:100,
	backSpeed:100,
	backDelay:1000,
	loop:true
});

var a=document.getElementById("ht1");
var count=0;
setInterval(()=>{
	if(count==98){	
	a.innerHTML=count+"%";
	clearInterval();
	}
	else{
	a.innerHTML=count+"%";	
	a.style.fontWeight="bold";
	a.style.fontSize="20px";
	count++;
	}
},18);

var b=document.getElementById("cs1");
var count1=0;
setInterval(()=>{
	if(count1==86){	
	b.innerHTML=count1+"%";
	clearInterval();
	}
	else{
	b.innerHTML=count1+"%";	
	b.style.fontWeight="bold";
	b.style.fontSize="20px";
	count1++;
	}
},20.5);

var c=document.getElementById("ja1");
var count2=0;
setInterval(()=>{
	if(count2==79){	
	c.innerHTML=count2+"%";
	clearInterval();
	}
	else{
	c.innerHTML=count2+"%";	
	c.style.fontWeight="bold";
	c.style.fontSize="20px";
	count2++;
	}
},22.3);

var d=document.getElementById("py1");
var count3=0;
setInterval(()=>{
	if(count3==81){	
	d.innerHTML=count3+"%";
	clearInterval();
	}
	else{
	d.innerHTML=count3+"%";	
	d.style.fontWeight="bold";
	d.style.fontSize="20px";
	count3++;
	}
},21.78);

var e=document.getElementById("c1");
var count4=0;
setInterval(()=>{
	if(count4==89){	
	e.innerHTML=count4+"%";
	clearInterval();
	}
	else{
	e.innerHTML=count4+"%";	
	e.style.fontWeight="bold";
	e.style.fontSize="20px";
	count4++;
	}
},19.8);

var f=document.getElementById("re1");
var count5=0;
setInterval(()=>{
	if(count5==10){	
	f.innerHTML=count5+"%";
	clearInterval();
	}
	else{
	f.innerHTML=count5+"%";	
	f.style.fontWeight="bold";
	f.style.fontSize="20px";
	count5++;
	}
},176.4);

var g=document.getElementById("gi1");
var count6=0;
setInterval(()=>{
	if(count6==2){	
	g.innerHTML=count6+"%";
	clearInterval();
	}
	else{
	g.innerHTML=count6+"%";	
	g.style.fontWeight="bold";
	g.style.fontSize="20px";
	count6++;
	}
},700);

var h=document.getElementById("c");
var count7=0;
setInterval(()=>{
	if(count7==71){	
	h.innerHTML=count7+"%";
	clearInterval();
	}
	else{
	h.innerHTML=count7+"%";	
	h.style.fontWeight="bold";
	h.style.fontSize="20px";
	count7++;
	}
},23);

var i=document.getElementById("a");
var count8=0;
setInterval(()=>{
	if(count8==55){	
	i.innerHTML=count8+"%";
	clearInterval();
	}
	else{
	i.innerHTML=count7+"%";	
	i.style.fontWeight="bold";
	i.style.fontSize="20px";
	count8++;
	}
},21);

var counter=1;
setInterval(function(){
	document.getElementById('radio'+counter).checked=true;
	counter++;
	if(counter>3){counter=1;}
},4000)
