chrome.contextMenus.create(
  {
  "title": "Fav This!",
  "contexts": ["all"],
  "onclick": getImage
  },
  function() {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});


function getImage(info, tab) {
 // get image URl
 // get tab URL
 data = {image: info.srcUrl, website: tab.url, title: tab.title};
fetch('http://localhost:3000/data', {
   method: 'POST',
   mode: 'cors',
   headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
 })
 .then(response => response.json())
 .then(data => console.log('Successful!'))
};

