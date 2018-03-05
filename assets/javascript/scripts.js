// Need to find a weather API endpoint to reach

//http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json 

const apiKey = config.apiKey;


function weatherRequest() {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);
  
    function makeRequest() {
        method = 'GET',
        url = `http://api.wunderground.com/api/${apiKey}/conditions/q/CA/San_Francisco.json` 
        httpRequest = new XMLHttpRequest();
    
        httpRequest.onreadystatechange = responseData;
        httpRequest.open('GET', 'test.html');
        httpRequest.send();
    }
  
    function responseData() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  };
  