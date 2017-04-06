class WeatherController{
  constructor(){
  }

  getURL() {
  }

  getYoutubes() {
    var url = this.getUrl();
    $.ajax({
      url: "http://localhost:8088/proxy/youtubegettermain/"+url,
      method: "GET"
    }).done(function(data) {
      console.log(data);
    });
  }

}
var wc = new WeatherController();
