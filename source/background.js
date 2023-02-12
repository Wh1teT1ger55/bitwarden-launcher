chrome.runtime.onStartup.addListener(function() {
  chrome.tabs.create({ url: "chrome-extension://nngceckbapebfimnlniiiahkandclblb/popup/index.html?uilocation=popout#/lock" });
});