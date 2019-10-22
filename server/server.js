const YouTube = require("simple-youtube-api");
var fetchVideoInfo = require("youtube-info");
var d = new Date();
d.setDate(d.getDate() - 1);
d = new Date(d);
const youtube = new YouTube("AIzaSyDUsZYtfC_JFXqOyclzgc_E2zIQzPmAWHs");
youtube
  .searchVideos("naat", 1000000000)
  .then(results => {
    console.log(results.length);
    for (var i = 0; i < results.length; i++) {
      if (new Date(results[i].publishedAt) >= d)
        fetchVideoInfo(results[i].id).then(function(videoInfo) {
          console.log(videoInfo);
        });
    }
  })
  .catch(console.log);

// var YouTube = require("youtube-node");

// var youTube = new YouTube();

// youTube.setKey("AIzaSyDUsZYtfC_JFXqOyclzgc_E2zIQzPmAWHs");

// youTube.search("World War z Trailer", 2, { order: "date" }, function(
//   error,
//   result
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(result, null, 2));
//   }
// });
