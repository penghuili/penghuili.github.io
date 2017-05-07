function show18(data) {
  console.log(data);
}

$(document).ready(function() {
  $.getJSON('https://freegeoip.net/json/?callback?', show18);
});
