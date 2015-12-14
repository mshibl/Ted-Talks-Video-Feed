'use strict';
google.load("feeds", "1");

angular.module('tedTalksFeed')
.service('feedDataService',function(){
	this.getFeeds = function(callback){
		google.setOnLoadCallback(function(){
			var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
	    feed.setNumEntries(5);
      feed.load(function(response){
				var videoFeeds = [];
				for (var i = 0; i < response.feed.entries.length; i++) {
					videoFeeds.push({
						"title": response.feed.entries[i].title,
						"url": response.feed.entries[i].link,
						"publishedDate": response.feed.entries[i].publishedDate,
						"contentSnippet": response.feed.entries[i].contentSnippet,
						"content": response.feed.entries[i].content.replace(/<\w+((\s+\w+(\s*=\s*(?:.*?|.*?|[^>\s]+))?)+\s*|\s*)>/g,""),
						"image": response.feed.entries[i]['mediaGroups'][0]['contents'][0]['thumbnails']['0']['url'],
						"videoUrl": response.feed.entries[i]['mediaGroups'][0]['contents'][0]['url']
					})
				}
				callback(videoFeeds)
			})
		});
	}
})