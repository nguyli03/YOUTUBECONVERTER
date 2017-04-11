class WeatherController{
  constructor(){
  }

  getYoutubes() {
    var trackname = document.getElementById("trackname").value;
    $.ajax({
      url: "http://localhost:8088/proxy/youtubeurlgettermain?"+trackname,
      method: "GET"
    }).done(function(data) {
      var json1 = JSON.parse(data);
      console.log(json1);
      var url = json1.items[0].id.videoId;
      console.log(url);
      console.log("^^url")
      $.ajax({
        url: "http://localhost:8088/proxy/youtubegettermain/?"+url,
        method: "GET"
      }).done(function(data) {
        // var data = JSON.parse(data);
        console.log(data);
      });
    });
  }
}

var wc = new WeatherController();
