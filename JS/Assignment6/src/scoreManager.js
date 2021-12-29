//check if a local highscore exists.
function chkHighScore() {
  try {
    highScoreFlappy = localStorage.getItem('highestScore');
  }
  catch (err) {
    localStorage.setItem('highestScoreFlappy', 0);
  }
  finally {
    if (highScoreFlappy == null)
      highScoreFlappy = 0;
  }
}
