$(document).ready(function() {
  var doSomeStuff = function(event) {
    event.preventDefault();
  }
  $('form').submit(doSomeStuff)
});


    var city = $('#city-type').val();
    var lowerCase = city.toLowerCase();
    if (lowerCase === "nyc" || "new york city") {
      $('body').css('background-image', 'url(images/nyc.jpg)');
    } else if (lowerCase === "la" || "los angeles") {
        $('body').css('background-image', 'url(images/la.jpg)');
    } else if (lowerCase === "sf" || "san fransisco") {
        $('body').css('background-image', 'url(images/sf.jpg)');
    } else if (lowerCase === "syd" || "sydney") {
        $('body').css('background-image', 'url(images/sydney.jpg)');
    } else if (lowerCase === "austin") {
        $('body').css('background-image', 'url(images/austin.jpg)');
    }
  }
