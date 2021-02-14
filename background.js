"use strict";

const STORAGE_KEY = "isMessageSent";

chrome.storage.onChanged.addListener(receiveEventFromStorage);
chrome.browserAction.onClicked.addListener(displayConsoleLog);

function receiveEventFromStorage() {
    chrome.storage.local.get(STORAGE_KEY, keepPopupClosedAndEnableAddon)
}

function keepPopupClosedAndEnableAddon(result) {
    const isMessageSent = result[STORAGE_KEY] || '';

    if (isMessageSent) {
        chrome.browserAction.setPopup({
            popup: ''
        });
    }
}

function displayConsoleLog() {
    console.log('Voilà');
}
