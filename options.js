function saveOptions () {
    var choosenSize = document.getElementById("size").value;
    var help = document.getElementById("help");

    if (isNaN(parseInt(choosenSize)) || parseInt(choosenSize) < 10 || parseInt(choosenSize) > 50) {
        help.textContent = "ERROR: number must be an integer between 10 and 50.";
    } else {
        chrome.storage.sync.set({ passwordSize: choosenSize }, function () {
            help.textContent = "Value saved!";
            setTimeout(function () {
                help.textContent = "";
                window.close();
            }, 1000);
        });
    }
}

function restoreOptions () {
    chrome.storage.sync.get(["passwordSize"], function (result) {
        if (result.passwordSize === undefined) {
            document.getElementById("size").value = "10";
        } else {
            document.getElementById("size").value = result.passwordSize;
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    restoreOptions();
});
document.getElementById("save").addEventListener("click", function () {
    saveOptions();
});
