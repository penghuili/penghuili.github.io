function show18(data) {
  console.log(data);
}

$(document).ready(function() {
  $.getJSON('http://freegeoip.net/json/?callback?', show18);
});
