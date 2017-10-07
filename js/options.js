window.onload = function(){
  document.getElementById("checkButton").onclick = function(){
    var radioList = document.getElementsByName("work");
    for(var i=0; i<radioList.length; i++){
      if (radioList[i].checked) {
        localStorage.cptype = radioList[i].value
        break;
      }
    }
  }
  var elm = document.getElementsByName('work');
  elm[localStorage.cptype].checked = true
}
