var i=0;
const window = {
    crypto: self.crypto,
    TextEncoder: self.TextEncoder,
    TextDecoder: self.TextDecoder,
    WebSocket: self.WebSocket,
  }
  
importScripts('https://cdn.jsdelivr.net/npm/gun/gun.js')
importScripts('https://cdn.jsdelivr.net/npm/gun/sea.js')
importScripts('https://cdn.jsdelivr.net/npm/gun/lib/radix.js')
importScripts('https://cdn.jsdelivr.net/npm/gun/lib/radisk.js')
importScripts('https://cdn.jsdelivr.net/npm/gun/lib/store.js')
importScripts('https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js') 
const gun = new window.Gun({ localStorage: false })

function timedCount()
  {
    i=i+1;
    postMessage(i);                   //posts a message back to the HTML page.
    setTimeout("timedCount()",500);
  }

timedCount();
onmessage = function(e) {
    console.log('Message received from main script');
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('Posting message back to main script');
    postMessage(workerResult);
  }
  
