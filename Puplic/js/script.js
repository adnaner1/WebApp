


var clock = (function(){

  var currentSec = getSecondsToday();

  var seconds = (currentSec / 60) % 1;
  var minutes = (currentSec / 3600) % 1;
  var hours = (currentSec / 43200) % 1;

  setTime(60 * seconds, "second");
  setTime(3600 * minutes, "minute");
  setTime(43200 * hours, "hour");

  function setTime(left, hand) {
    $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
  }

  function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000);
  }

})();




/////////////// UIController module ////////////////


var UIController = (function(){


var QueryStyle = {

  Width : function(x,y){document.querySelector(x).style.width = y},
  Visibility : function(x,y){document.querySelector(x).style.visibility = y},
  TextContent : function(x,y){document.querySelector(x).textContent = y},
  AddEventListener :function(x,y,z) {document.querySelector(x).addEventListener(y,z)},
  LeftPosition : function(x,y){document.querySelector(x).style.left = y},
  ReftPosition : function(x,y){document.querySelector(x).style.Reft = y},
}

var DOMstrings = {
  OpenBtn : '.OpenBtn',
  CloseBtn : '.CloseBtn',
  DashboardBtn : '.Dashboard',
  ControlBtn : '.Control',
  AlarmBtn: '.Alarm',
  MaintenanceBtn :'.Maintenance',
  FilesBtn : '.Files',
  LocateBtn : '.Locate',
  ContactBtn : '.Contact',
  Sidebar : '.sidebar',
  Clock : '.clock'
}



    QueryStyle.AddEventListener(DOMstrings.CloseBtn, 'click', Hide);
    QueryStyle.AddEventListener(DOMstrings.OpenBtn,'click', Display);
    QueryStyle.Visibility(DOMstrings.OpenBtn,'hidden');




function Display() {
     QueryStyle.Width(DOMstrings.Sidebar,'17em');
     QueryStyle.Visibility(DOMstrings.CloseBtn, 'visible');
     QueryStyle.Visibility(DOMstrings.OpenBtn,'hidden');
     QueryStyle.TextContent(DOMstrings.DashboardBtn, 'Dashboard');
     QueryStyle.TextContent(DOMstrings.ControlBtn, 'Control');
     QueryStyle.TextContent(DOMstrings.AlarmBtn, 'Alarm');
     QueryStyle.TextContent(DOMstrings.MaintenanceBtn, 'Maintenance');
     QueryStyle.TextContent(DOMstrings.FilesBtn, 'Files');
     QueryStyle.TextContent(DOMstrings.LocateBtn , 'Locate');
     QueryStyle.TextContent(DOMstrings.ContactBtn, 'Contact');
     QueryStyle.LeftPosition(DOMstrings.Clock,'280px');


   }
 function Hide() {
     QueryStyle.Width(DOMstrings.Sidebar,'4em');
     QueryStyle.Visibility(DOMstrings.CloseBtn,'hidden');
     QueryStyle.Visibility(DOMstrings.OpenBtn,'visible');
     QueryStyle.TextContent(DOMstrings.DashboardBtn, '');
     QueryStyle.TextContent(DOMstrings.ControlBtn, '');
     QueryStyle.TextContent(DOMstrings.AlarmBtn, '');
     QueryStyle.TextContent(DOMstrings.MaintenanceBtn, '');
     QueryStyle.TextContent(DOMstrings.FilesBtn, '');
     QueryStyle.TextContent(DOMstrings.LocateBtn , '');
     QueryStyle.TextContent(DOMstrings.ContactBtn, '');
     QueryStyle.LeftPosition(DOMstrings.Clock,'72px');
   }

})();
