  // Set the target date with Los Angeles time zone
  var targetDate = new Date("February 9, 2024 00:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetDate - now;

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
  }, 1000);
if(targetDate==distance){
   document.getElementById("day").innerHTML="kayne is here"
}
