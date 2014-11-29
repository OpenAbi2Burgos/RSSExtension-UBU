//Declaramos el boton que se puede activar y desactivar.
var { ToggleButton } = require('sdk/ui/button/toggle');
//Declaramos el panel donde se puede cargar las paginas.
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");

//Declaramos las opciones del ToggleButton
var button = ToggleButton({
  id: "RSSbutton",
  label: "Lector RSS UBU",
  icon: {
    "16": "./images/icon-16.png",
    "32": "./images/icon-32.png",
    "64": "./images/icon-64.png"
  },
  onChange: function (state) {
	if (state.checked) {
	    panel.show({
			position: button
		});
	}
  }
});

//Declaramos las opciones del Panel.
var panel = panels.Panel({
  width: 405,
  height: 600,
  contentURL: self.data.url("index.html"),
  contentScriptFile: self.data.url("./js/get-link.js"),
  onHide: function () {
    button.state('window', {checked: false});
  }
});

panel.port.on("contentClick", function (text) {
  tabs.open(text);
  //panel.hide();
});

