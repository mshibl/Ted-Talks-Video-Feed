'use strict';

angular.module('tedTalksFeed')
.controller('mainCtrl', function($scope,feedDataService){
	feedDataService.getFeeds(function(response){
		$scope.videoFeeds = response
		$scope.$apply();
	})
})