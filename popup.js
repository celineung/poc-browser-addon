"use strict";

const MESSAGE_SELECTOR = "#message_id";
const STORAGE_KEY = "isMessageSent";

document.querySelector("form").addEventListener("submit", setStateInStorage);

function setStateInStorage(e) {
    e.preventDefault();
    chrome.storage.local.set({
        [STORAGE_KEY]: document.querySelector(MESSAGE_SELECTOR).value
    });
    window.close();
}
