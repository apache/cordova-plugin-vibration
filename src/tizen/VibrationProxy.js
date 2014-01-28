module.exports = {
    vibrate: function(milliseconds) {
        if (navigator.vibrate) {
            navigator.vibrate(milliseconds);
        }
    }
};

require("cordova/tizen/commandProxy").add("Vibration", module.exports);
