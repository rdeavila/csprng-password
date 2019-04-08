function getPassword () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://csprng.xyz/v1/api?length=64", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var resp = JSON.parse(xhr.responseText);
            document.getElementById("password").innerHTML = resp.Data
        }
    }
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
    getPassword();
});
