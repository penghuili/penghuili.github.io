window.onload = show18();

function show18() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(data) {
    if (this.readyState == 4 && this.status == 200) {
     console.log(data)
    }
  };
  xhttp.open("GET", "freegeoip.net/json/", true);
  xhttp.send();
}