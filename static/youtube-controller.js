class WeatherController{
  constructor(){
  }

  getURL() {
    
  }

  getYoutubes() {
    var searchquery = document.getElementById("");
    var url = this.getURL();
    console.log("url:");
    console.log(url);
    $.ajax({
      url: "http://localhost:8088/proxy/youtubegettermain/"+url,
      method: "GET"
    }).done(function(data) {
      console.log(data);
    });
  }

}


var wc = new WeatherController();
