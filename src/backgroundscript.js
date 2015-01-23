function generateTocOnClick(info, tab) {
	// Default to H2
	var hstop = "h2";

	// Determine which item was clicked and set the max header depth
	switch (info.menuItemId){
		case h1:
			hstop = "h1";
			break;
		case h2:
			hstop = "h2";
			break;
		case h3:
			hstop = "h3";
			break;
		case h4:
			hstop = "h4";
			break;
		case h5:
			hstop = "h5";
			break;
		case h6:
			hstop = "h6";
			break;
	}

	// Send a message to the tab to generate the TOC
	chrome.tabs.sendMessage(tab.id, {action: "GenerateTOC", hstop: hstop}, function(response) { });
}

// Create menu items
var parent = chrome.contextMenus.create({
	"title": "Generate TOC", 
	"contexts": ["all"],
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});
var h1 = chrome.contextMenus.create({
	"parentId": parent,
	"title": "H1 only", 
	"contexts": ["all"],
	"onclick": generateTocOnClick,
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});
var h2 = chrome.contextMenus.create({
	"parentId": parent,
	"title": "H1 ... H2", 
	"contexts": ["all"],
	"onclick": generateTocOnClick,
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});
var h3 = chrome.contextMenus.create({
	"parentId": parent,
	"title": "H1 ... H3", 
	"contexts": ["all"],
	"onclick": generateTocOnClick,
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});
var h4 = chrome.contextMenus.create({
	"parentId": parent,
	"title": "H1 ... H4", 
	"contexts": ["all"],
	"onclick": generateTocOnClick,
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});
var h5 = chrome.contextMenus.create({
	"parentId": parent,
	"title": "H1 ... H5", 
	"contexts": ["all"],
	"onclick": generateTocOnClick,
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});
var h6 = chrome.contextMenus.create({
	"parentId": parent,
	"title": "H1 ... H6", 
	"contexts": ["all"],
	"onclick": generateTocOnClick,
	"documentUrlPatterns": [
		"*://*.github.com/*/wiki*"
	]
});