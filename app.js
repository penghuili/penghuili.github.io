function show18(data) {
  console.log(data);
}

$(document).ready(function() {
  $.getJSON('http://reddit.com/r/aww.json?callback?', show18);
});
