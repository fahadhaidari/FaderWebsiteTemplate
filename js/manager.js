
var pages 	    = new Array();
var _width      = $( window ).width();
var _height     = $( window ).height();
var halfScreenH = _width  / 2;
var halfScreenV = _height / 2;
var mainDiv     = null;
var pageInfo    = new Array();
var currentPageIndex = 0;
var pageIndex = 0;
var page = new Array();
var menuButtonsDiv = null;
var menuButtons = new Array();

function start() {

	createMainDiv();
	createMenuDiv();
	createPages();
}

function createPages() {
		
	for(var i = 0; i < page.length; i ++) {
		
		var menuButton = document.createElement("div");
		menuButton.style.position = "relative";
		
		menuButton.align = "center";
		
		menuButton.style.width = "100px";	
		menuButton.style.height = "50px";
		menuButton.style.marginRight = "100px"
		menuButton.style.backgroundColor = "#FFFFF";
		menuButton.style.float = "left";
		menuButton.className = "navigateBtn";
		menuButton.setAttribute("id", page[i][0]);
		menuButton.innerHTML = page[i][0];
		menuButtons.push(menuButton);
		
		menuButton.style.fontSize = "24px";
		
		document.getElementById("menuButtonsDiv").appendChild(menuButton);

		mainDiv.appendChild(page[i][1]);
		page[i][1].style.position = "absolute";
		if(i == 0){
		} else {
			$(page[i]).hide();
		}
	}
}

function createMainDiv() {

	mainDiv = document.createElement("div");
	mainDiv.style.width = "980px";	
	mainDiv.style.height = "600px";
	mainDiv.style.position = "relative";
	mainDiv.style.backgroundColor = "#EEEEEE";
	mainDiv.setAttribute("id", "mainDiv");
	mainDiv.style.margin = "auto";
	document.body.appendChild(mainDiv);
	
}

function createMenuDiv() {
	
	menuButtonsDiv = document.createElement("div");
	menuButtonsDiv.style.width = "980px";	
	menuButtonsDiv.style.height = "50px";
	menuButtonsDiv.style.position = "relative";
	menuButtonsDiv.style.color = "#D90D32";
	menuButtonsDiv.style.backgroundColor = "#FFFFFF";
	menuButtonsDiv.setAttribute("id", "menuButtonsDiv");
	mainDiv.appendChild(menuButtonsDiv);
	
}


function getDiv(_id) {
	for(var i = 0; i < page.length; i ++) {
		if(_id == page[i][0]) {
			currentPageIndex = i;
			return i;
			break;
		}
	}
}

function openPage(_id) {
	
	var index = getDiv(_id);
	var xPos = $(page[index][1]).width();
	var yPos = $(page[index][1]).height() * 0.25;
	$(page[index]).fadeIn("fast");

	//document.getElementById("titleDiv").innerHTML = "<b>" + pageTitles[currentPageIndex] + "</b>";
}

function createPage(_title, _id) {
	page[pageIndex] = [];
	page[pageIndex][0] = _title;
	page[pageIndex][1] = document.getElementById(_id);
	pageIndex ++;
}


$(document).ready(function(){
    $(".navigateBtn").click(function(){
	
		$(page[currentPageIndex][1]).fadeOut("fast");
		openPage(this.id);
		
    });
	$(".navigateBtn").mouseover(function(){
	$(this).css("cursor", "pointer");
		$(this).css("cursor", "pointer");
		//this.className = "";
		//$(".navigateBtn").fadeTo(40, 0.5);
		
    });
	$(".navigateBtn").mouseout(function(){
	$(this).css("cursor", "pointer");
		$(this).css("cursor", "pointer");
		//this.className = "navigateBtn";
		//$(".navigateBtn").fadeTo(40, 1);
		
    });
});