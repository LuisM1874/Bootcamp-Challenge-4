var scoresBtn = document.querySelector("#viewLeaderboard")

function printLeaderboard() {
    var leaderboard = JSON.parse(window.localStorage.getItem("leaderboard")) || [];
    leaderboard.sort(function(a, b) {
      return b.score - a.score;
    });
    leaderboard.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
      var olEl = document.getElementById("leaderboard");
      olEl.appendChild(liTag);
    });
}

// Clear previous score
  function clearLeaderboard() {
    localStorage.removeItem("leaderboard");
    location.reload();
  } document.getElementById("clear").onclick = clearLeaderboard;
  
printLeaderboard();