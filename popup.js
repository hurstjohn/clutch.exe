 let changeColor = document.getElementById('fire');


  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });




changeColor.onclick = function(element) {
  console.log("fired! 2");
  var keepGoing = {
    type: "basic",
    title: "Test",
    message: "Test",
    iconUrl: "images/logo.PNG"

  };
  chrome.notifications.create('notif', keepGoing, function() { console.log('fired! 3'); });

  var alarmInfo = {
    when: Date.now(),
    periodInMinutes: (1*12)


  };
  chrome.alarms.create('fires', alarmInfo);
  chrome.alarms.onAlarm.addListener(function () {

      var keepGoing = {
        type: 'basic',
        iconUrl: 'images/logo.png',
        title: 'Keep Going!',
        message: "You are doing great!"

      };
      chrome.notifications.create('notifOne', keepGoing, function() { console.log('fired! 4'); });


  });
	let color = element.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

	chrome.tabs.executeScript(

	  tabs[0].id,
	  {code: 'document.body.style.backgroundColor = "' + color + '";'});

	  });
	}
