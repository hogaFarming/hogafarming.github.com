$(document).ready(function  (argument) {

	var strUrl=window.location.href;
	var arrUrl=strUrl.split("/");
	var strPage=arrUrl[arrUrl.length-1];
	var pageName=strPage.split(".")[0]

	var menu = $(".nav a");
	var pageNameList = ["index","features","support","downloads","contacts"];
	$.each(pageNameList, function(i,n){
		if (pageName == n) { menu[i].id = "active" };
	})













})

	
