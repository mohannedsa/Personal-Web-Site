var workEx, i, j, x = "";
workEx = {
  "companies": [
    {"name":"Saudi Arabian Monetary Authority(intern)", "workedAs":["Student Technology intern", "Data Entry"]},
    {"name":"Project For Pride In Living(Volunteering)", "workedAs":["Data Analisis Volunteer", "Data Entry"]},
   
  ]
}
for (i in workEx.companies) {
  x += "<h2>" + workEx.companies[i].name +
 "</h2>";
  for (j in workEx.companies[i].workedAs) {
    x +=  "<h3>"+"<center>"+workEx.companies[i].workedAs[j] + "</h3>";
  }
}
document.getElementById("workExperiance").innerHTML = x;


