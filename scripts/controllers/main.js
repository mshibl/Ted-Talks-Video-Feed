'use strict';

angular.module('tedTalksFeed')
.controller('mainCtrl', function($scope){
	$scope.helloWorld = function(){
		console.log('Hello World')
	}

	$scope.videoFeeds = [
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"},
		{"image": "http://improvephotography.com/wp-content/uploads/2015/05/manarola-cinque-terre.jpg"}
	]
})