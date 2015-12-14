angular.module("tedTalksFeed")
.directive('navbar',function(){
	return {
		templateUrl: 'templates/navBar.html',
		controller: 'mainCtrl',
		replace: true
	}
})

