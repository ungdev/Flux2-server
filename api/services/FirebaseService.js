var request = require('request');

module.exports = {

    /*
     * Send new message for a particular topic to the Firebase API endpoint
     *
     * @param {string} to: the topic
     * @param {string} message: the message to send
     */
    sendFirebaseMessage(to, message) {

        request({
            url: 'https://fcm.googleapis.com/fcm/send',
            method: 'POST',
            headers: {
                'Content-Type': ' application/json',
                'Authorization': 'key=' + sails.config.serverKey
            },
            body: JSON.stringify({
                to: toHex(to),
                data: {
                    message
                }
            }),
        }, (error, response, body) => {
            if (error) {
                console.error(error, response, body);
            }
            else if (response.statusCode >= 400) {
                console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
            }
            else {
                console.log('Done!')
            }
        });

    }

};

/**
 * String to hex
 * @param {string} str
 * @returns {string}
 */
function toHex(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}