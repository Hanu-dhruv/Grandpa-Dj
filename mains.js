document.addEventListener("DOMContentLoaded", function () {
    const grandpaImage = document.getElementById("grandpaImage");
    const playButton = document.getElementById("playButton");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    playButton.addEventListener("click", function () {
        playMusic();
    });

    function playMusic() {
        // Simulate playing music action here
        alert("Grandpa is playing the music!");
    }
});