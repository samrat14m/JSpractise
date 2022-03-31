function clock(){



var hours=document.getElementById("hour");
var minutes=document.getElementById("min");
var seconds=document.getElementById("sec");
var am=document.getElementById("ampm");

var time=new Date();
var hrs=time.getHours();
var mins=time.getMinutes();
var secs=time.getSeconds();
var am_pm="AM";



if(hrs==0)
{

hrs=12;

}
if(hrs>12){


    hrs=hrs-12;
    am_pm="PM"

}
if(hrs<10){

hrs="0"+hrs;

}
if(mins<10){

    mins="0"+mins;
    
    }
if(secs<10){

    secs="0"+secs;
    
    }

    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs
    am.innerHTML=am_pm

}
setInterval(clock,1000)


function setTime(){


var x=document.getElementById("morning").value;
var y=document.getElementById("afternoon").value;
var z=document.getElementById("evening").value;
}

var hour=new Date().getHours();

if(x==hour){



    document.getElementById("textcontainer").innerHTML="Good Morning";

    document.getElementById("smallbox").innerHTML="wakeup";
}
