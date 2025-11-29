function save() {
    localStorage.setItem("laps", document.getElementById("laps").value);
    localStorage.setItem("lapTime", document.getElementById("lapTime").value);
    localStorage.setItem("pits", document.getElementById("pits").value);
    localStorage.setItem("pitDuration", document.getElementById("pitDuration").value);
    localStorage.setItem("currentTime", document.getElementById("currentTime").value);
}

function load() {
    document.getElementById("laps").value = localStorage.getItem("laps") || "";
    document.getElementById("lapTime").value = localStorage.getItem("lapTime") || "";
    document.getElementById("pits").value = localStorage.getItem("pits") || "";
    document.getElementById("pitDuration").value = localStorage.getItem("pitDuration") || "";
    document.getElementById("currentTime").value = localStorage.getItem("currentTime") || "";
}
load();

function calculate() {
    save();

    let laps = parseInt(document.getElementById("laps").value) || 0;
    let lapSec = parseFloat(document.getElementById("lapTime").value) || 0;
    let pits = parseInt(document.getElementById("pits").value) || 0;
    let pitSec = parseFloat(document.getElementById("pitDuration").value) || 0;
    let currentTime = document.getElementById("currentTime").value;

    let totalSec = laps * lapSec + pits * pitSec;

    let hours = Math.floor(totalSec / 3600);
    let minutes = Math.floor((totalSec % 3600) / 60);
    let seconds = Math.floor(totalSec % 60);

    document.getElementById("resultTime").innerText =
        "Time Remaining: " + hours + "h " + minutes + "m " + seconds + "s";

    let parts = currentTime.split(":");
    if (parts.length === 2) {
        let curH = parseInt(parts[0]);
        let curM = parseInt(parts[1]);

        let nowSec = curH * 3600 + curM * 60;
        let finishSec = nowSec + totalSec;

        let finH = Math.floor(finishSec / 3600) % 24;
        let finM = Math.floor((finishSec % 3600) / 60);

        document.getElementById("resultFinish").innerText =
            "Expected Finish: " + String(finH).padStart(2,'0') + ":" + String(finM).padStart(2,'0');
    } else {
        document.getElementById("resultFinish").innerText = "Invalid time format.";
    }
}

function resetForm() {
    localStorage.clear();
    document.getElementById("laps").value = "";
    document.getElementById("lapTime").value = "";
    document.getElementById("pits").value = "";
    document.getElementById("pitDuration").value = "";
    document.getElementById("currentTime").value = "";
    document.getElementById("resultTime").innerText = "";
    document.getElementById("resultFinish").innerText = "";
}

function toggleDark() {
    document.body.classList.toggle("light");
}
