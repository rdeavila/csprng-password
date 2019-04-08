function getPassword () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://csprng.xyz/v1/api?length=25", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var resp = JSON.parse(xhr.responseText);
            var pwd = resp.Data.replace(/[^\w\s]/gi, '')

            document.getElementById("password").innerHTML = pwd
            document.getElementById("date").innerHTML = pwd.length + " characters generated at " + resp.Time
        }
    }
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
    getPassword();
});
