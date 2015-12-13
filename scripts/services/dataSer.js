'use strict';

angular.module('tedTalksFeed')
.service('feedDataService',function(){
	this.getFeeds = function(callback){
		google.setOnLoadCallback(function(){
			var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
	        feed.setNumEntries(100);
	        feed.load(callback)
		});
	}
})
