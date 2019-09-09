
 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    }

  );

  var testOne = {
    type: "basic",
   title: "Primary Title",
   message: "Primary message to display",
   iconUrl: "images/logo.PNG"

 };


  chrome.notifications.create('notif', testOne, function() { console.log('fired!'); });
/*
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });*/
  });
