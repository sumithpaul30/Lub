function openHeart() {
    document.getElementById("letterPage").classList.add("show");

    const music = document.getElementById("backgroundMusic");

    music.play().then(function() {
        document.getElementById("musicButton").innerHTML = "🎵";
    }).catch(function(error) {
        console.log("Music could not start:", error);
    });
}

function closeHeart() {
    document.getElementById("letterPage").classList.remove("show");
}

function showMemories() {
    document.getElementById("memoriesPage").classList.add("show");
}

function backToLetter() {
    document.getElementById("memoriesPage").classList.remove("show");
}

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {
        music.play().then(function() {
            button.innerHTML = "🎵";
        }).catch(function(error) {
            console.log("Music could not start:", error);
        });
    } else {
        music.pause();
        button.innerHTML = "🔇";
    }
}