var grades=[];
var hours=[];
var $ = function (id) { return document.getElementById(id); }

window.onload=function(){
    $("add").onclick=addscore;
    $("display").onclick=display;
    $("scores").onclick=displayscore;
}

var addscore=function(){
    var grade=$("grade").value;
    var hour=$("hour").value;
    
    grades[grades.length]=parseFloat(grade);
    hours[hours.length]=parseFloat(hour);
    
}
var display=function(){
    var html = "<h2>Scores</h2><tr><td><b>grade</b></td><td><b>hour</b></td></tr>"
    for(var i=0;i<hours.length;i++){
        html = html + "<tr><td>"+grades[i]+"</td><td>"+hours[i]+"</td></tr>";
        
    }
    $("scores_table").innerHTML = html;
}

var displayscore=function(){
    var sum_grade=0;
    var sum_hour=0;
    var gpa;
    for(var i=0;i<grades.length;i++){
        sum_grade=sum_grade+grades[i];
    }
    gpa=sum_grade/grades.length;
    alert(gpa);
}

