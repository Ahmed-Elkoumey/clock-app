var hours,mintus,seconds,clock,date;
hours = document.getElementById("hours");
mintus = document.getElementById("mintus");
seconds = document.getElementById("seconds");

clock=document.getElementById("clock");

function timeNow() {
    
    date=new Date();
    

hours.style.transform=`rotate(${date.getHours() * 30 }deg)`;
mintus.style.transform=`rotate(${date.getMinutes() * 6 }deg)`;

seconds.style.transform=`rotate(${date.getSeconds() * 6}deg)`;


}

setInterval(timeNow,1)