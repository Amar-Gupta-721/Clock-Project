
setInterval(()=>{
    var date = new Date();
    
    second = date.getSeconds();
    minutes = date.getMinutes();
    hour = date.getHours();

    secRotate = second * 6;
    minRotate = minutes * 6;
    hourRotate = hour*30 + 0.5*minutes;

    document.getElementById("hour-hand").style.transform = "rotate("+hourRotate+"deg)";
    document.getElementById("minute-hand").style.transform = "rotate("+minRotate+"deg)";
    document.getElementById("second-hand").style.transform = "rotate("+secRotate+"deg)";

},1000)