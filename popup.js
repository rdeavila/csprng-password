function getPassword () {
    chrome.storage.sync.get(["passwordSize"], function (result) {
        var passwordSize = 10;
        var xhr = new XMLHttpRequest();

        if (result.passwordSize === undefined) {
            passwordSize = 10;
        } else {
            passwordSize = parseInt(result.passwordSize);
        }

        xhr.open("GET", "https://csprng.rda.run/v1/api?length=55", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var resp = JSON.parse(xhr.responseText);
                var pwd = resp.Data.replace(/[^\w\s]/gi, "").substring(0, passwordSize);

                document.getElementById("password").textContent = pwd;
                document.getElementById("date").textContent = pwd.length + " characters generated at " + resp.Time;
            }
        };
        xhr.send();
    });

}

document.addEventListener("DOMContentLoaded", function () {
    getPassword();
});
