
    // countdown to
    var countDownDate = new Date("Feb 28, 2023 15:37:25").getTime();

    var x = setInterval(function() {

      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = days  + "d: " + hours + "h: " + minutes + "m: " + seconds + "s ";

      // after count down is finished
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "TIME OVER";
      }
    }, 1000);
