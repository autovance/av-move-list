/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate',		//additional angular modules
'autovance.av-move-list'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server

	var staticPath ='/';
	// var staticPath;
	// staticPath ='/angular-directives/ng-move-list/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/ng-move-list/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'pages/';


	$routeProvider.when(appPathRoute+'home', {
		controller: 'HomeCtrl as home',
		templateUrl: 'pages/home/home.html'
	});

	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});

}]);
