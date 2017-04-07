class WeatherController{
  constructor(){
  }

  getURL() {
    // After the API loads, call a function to enable the search box.
    function handleAPILoaded() {
      $('#search-button').attr('disabled', false);
    }

    // Search for a specified string.
    function search() {
      var q = $('#query').val();
      var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
      });

      request.execute(function(response) {
        var str = JSON.stringify(response.result);
        console.log("origstring");
        console.log(str)
        $('#search-container').html('<pre>' + str + '</pre>');
      });
    }
    search.js
    search();
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
