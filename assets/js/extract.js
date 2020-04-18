function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
$(document).ready(function () {
  readTextFile("./assets/json/jobs.json", function(text){
      var jobs = JSON.parse(text);
      $.each(jobs, function(i){
        job = jobs[i];
        job_html = "<div id='"+ i +"-job' class='row'>";
        job_html += '<article class="item"><div class="col-xs-4 col-md-2 text-center">';
        job_html += '<a href="'+ job["link"] +'" class="image fit"><img src="'+ job["img"] +'" alt="'+ job["alt"] +'" /></a></div>';
        job_html += '<div class="col-xs-8 col-md-7 title-info"><h3>'+ job["enterprise"]+'</h3><h4><i>'+ job["job"] +'</i></h4></div>';
        job_html += '<div class="col-xs-offset-4 col-xs-8 col-sm-8 col-sm-offset-0 col-md-3 date"><p>'+ job["date"] +'</p><p>'+ job["location"] +'</p></div>';
        job_html += '<div class="col-xs-offset-4 col-xs-8 col-sm-8 col-sm-offset-4 col-md-10 col-md-offset-2"><a id="'+ i +'-open" class="open-details"><i class="fa fa-sort-desc"></i>Plus de détails</a><div id="'+ i +'-details" class="details">';
        job_html += '<p>'+ job["extract"] +'</p>';
        job_html += '<a class="info" href="'+ job["link"] +'"><i class="fa fa-info-circle" aria-hidden="true"></i>'+"Pour plus d'informations</a>";
        job_html += job["more_details"];
        job_html += '<a id="'+ i +'-close" class="close-details"><i class="fa fa-sort-desc fa-rotate-180" aria-hidden="true"></i>Moins de détails</a></div></div></article></div>';
        $("#experience").append(job_html);
      })
  });
})
