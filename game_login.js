function addUser()
{
    playerName = document.getElementById("playerNameInput").value;
    player2Name = document.getElementById("player2NameInput").value;

    localStorage.setItem("playerName", playerName);
    localStorage.setItem("player2Name", player2Name);

    window.location = "game_page.html";
}