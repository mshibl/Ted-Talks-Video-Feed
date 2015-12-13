'use strict';
	google.load("feeds", "1");

angular.module('tedTalksFeed')
.controller('mainCtrl', function($scope,feedDataService){
	feedDataService.getFeeds(function(response){
		$scope.videoFeeds = response.feed.entries;
		$scope.$apply();
	})

})