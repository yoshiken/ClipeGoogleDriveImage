chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.getSelected(null, function(tab) {
    var text_area = document.createElement('textarea');
    var urlstr = tab.url;
    urlstr = urlstr.split("/")
    urlstr1 = urlstr[5]
    if (localStorage.cptype == false) {
      localStorage.cptype = 0 ;
    }
    var strurl = "";
    strurl += "http://drive.google.com/uc?export=view&id=" + urlstr1;
    if (localStorage.cptype = 1) {
      strurl = "<img src=\"" + strurl + "\">";
    }
    text_area.value = strurl;
    document.body.appendChild(text_area);
    text_area.select();
    document.execCommand('copy');
    document.body.removeChild(text_area);
  });
});
