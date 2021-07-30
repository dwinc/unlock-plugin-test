// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    window.plugins.unlocksPlugin.unlocks('1627513200', '1627513200', function(result) {
        alert('something happened: '+result);
    }, function(err) {
        alert('something went wrong');
        console.log('Uh oh... ' + err);
    });
    

}
