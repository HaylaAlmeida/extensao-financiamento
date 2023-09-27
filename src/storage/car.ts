function getAll() {
   return chrome.storage.local.get(null);
}

function set(obj) {
    const key = "car_" + obj.id;
    chrome.storage.local.set({key: obj}).then(r => console.log("Value is set."))
}