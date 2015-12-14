'use strict';

angular.module('tedTalksFeed')
.controller('mainCtrl', function($scope,feedDataService,$uibModal){
	// Loading Feeds
	feedDataService.getFeeds(function(response){
		$scope.videoFeeds = response
		$scope.$apply();
	})

	// Opening Video on Page
  $scope.open = function (videoUrl) {
  	$scope.videoUrl = videoUrl
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'templates/videoPlayer.html',
      controller: 'ModalInstanceCtrl',
      backdropClass: 'backdrop',
      resolve: {
        videoUrl: function () {
          return $scope.videoUrl;
        }
      }
    });
  };
})

// Video Player Instance
.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, $sce, videoUrl) {
	$scope.videoSrc = $sce.trustAsResourceUrl(videoUrl)
})