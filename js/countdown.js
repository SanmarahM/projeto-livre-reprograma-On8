// Countdown

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let event = "Dec 23, 2020 00:00:00",
        countDown = new Date(event).getTime(),
        x = setInterval(function() {    
  
          let currentTime = new Date().getTime(),
              distance = countDown - currentTime;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          // On date action
          if (distance < 0) {
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");

            countdown.style.display = "none";
            content.style.display = "flex";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());