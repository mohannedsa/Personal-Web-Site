var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
APIKey = "trnsl.1.1.20190304T084531Z.87d1fd2cff1dc2eb.6eeee232085bc6456a5bb4837cb13e2c1b5fa9a5";
      
      
      var textToTranslate = document.getElementById("text").value;
      document.getElementById("result");
      
      
      document.getElementById('translate').addEventListener('click', function() {
        var req = new XMLHttpRequest();
        var langChoice = document.getElementById('language').value;
        var data = "key="+APIKey+"&text="+textToTranslate+"&lang="+langChoice;
        req.open("POST",url,true);
        req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        req.send(data);
        req.onreadystatechange = function() {
            if (req.readyState==4 && req.status==200) {
                var result1 = req.responseText;
                var json = JSON.parse(result1);
                if(json.code == 200) {
                    document.getElementById('result').innerHTML = json.text[0];

                }
                else {
                    document.getElementById('output').innerHTML = "Error Code: " + json.code;
                }
            }
        }
      }, false);