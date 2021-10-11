var clock = function() {
  var date = new Date();
  var hrs = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var morningnight = 'AM';
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    morningnight = 'PM';
  }
  
  if (hrs < 10) {
      hrs = '0' + hrs;
  } else {
      hrs = hrs;
  }
  
  if (mins < 10) {
      mins = '0' + mins;
  } else {
      mins = mins
  }
  
  if (secs < 10) {
      secs = '0' + secs;
  } else {
      secs = secs
  }
 
var time = hrs + ':' + mins + ':' + secs + morningnight;
  document.getElementById("clock").innerText = time;
  if (secs == 30) {
      alert('Wake Up')
  }
  setTimeout(clock, 1000);
};

clock();