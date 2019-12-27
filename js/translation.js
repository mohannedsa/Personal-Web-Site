var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
APIKey = "trnsl.1.1.20191128T055445Z.6cf7130b696fc48c.03b3a0e0ad76d7b53a3079a6cfd85000b6378f3d";
      
      
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