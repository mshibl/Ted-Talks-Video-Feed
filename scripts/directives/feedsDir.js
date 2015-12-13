angular.module("tedTalksFeed")
.directive('feeds',function(){
	return {
		templateUrl: 'templates/feeds.html',
		controller: 'mainCtrl',
		replace: true
	}
})

