// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    try {
    	let granted = await cordova.plugins.unlocksPlugin.hasPermission();
    	console.log('hasPermission:', granted);

    	if (!granted) {
	    	granted = await cordova.plugins.unlocksPlugin.requestPermission();
        	console.log('requestPermission:', granted);
		}

		if (granted) {
			const end = Date.now();
			const start = end - (24 * 60 * 60 * 1000); // past 24 hours
		    const events = await cordova.plugins.unlocksPlugin.unlockEvents(start, end);
		    console.log('count:', events.length);
		    alert('count: ' + events.length);
		} else {
			alert('permission not granted');
		}

	} catch (e) {
        console.log('error:', e);
        alert('error: ', e);
    }
}
