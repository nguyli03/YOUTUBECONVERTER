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
      var url = json1.items[0].id.videoId;

      $.ajax({
        url: "http://localhost:8088/proxy/youtubegettermain/?"+url,
        method: "GET"
      }).done(function(data) {
        var data = JSON.parse(data);
        window.location.href = data.link;
        console.log(data.link)

      });
    });
  }
}

var wc = new WeatherController();
