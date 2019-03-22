var curr_document = window.document;
var curr_deep = 0;
var MAX_DEEP = 2;

function customStart() {
  addCustomCssToIframes();

  function addCustomCssToIframes() {
    console.log("addCustomCssToIframes, iframe length", $('iframe').length, "deep", curr_deep);
    if (curr_document.querySelector('iframe').length > 0) {
      var iframe = curr_document.querySelector('iframe');
      curr_document = iframe.contentDocument;

      var cssLink = document.createElement("link");
      cssLink.href = deep == 0 ? "../static/custom/pad.css" : "../static/custom/pad-editor.css";
      cssLink.rel = "stylesheet";
      cssLink.type = "text/css";

      curr_document.head.appendChild(cssLink);
      curr_deep++;

      if (curr_deep < MAX_DEEP) addCustomCssToIframes();
    } else
      setTimeout(addCustomCssToIframes, 200);
  }
}