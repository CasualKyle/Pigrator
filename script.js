$(document).ready(function(){
	$("#instagram button").click(authenticateInstagram);
});

function authenticateInstagram()
{
	var clientID = "7776e80612704450ac61d5698051c743";
	var redirectURI = "http://localhost/pigrator";

	var url = "https://api.instagram.com/oauth/authorize/?client_id=" + clientID + "&redirect_uri=" + redirectURI + "&response_type=code";
	window.open(url);
}