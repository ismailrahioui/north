  // Set the target date with Los Angeles time zone
  var targetDate = new Date().getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetDate - now;
    var text= "hello";
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    if(text=="hello"){
   document.getElementById("text").innerHTML="kayne is here"
}

  }, 1000);
