function entireTimerFunction() {
  try {
    let min = 0;
    let sec = 0;
    let timeArea = document.getElementById("timeArea");

    let intervalID = setInterval(timeCountFunction, 1000);
    // 第二引数ミリ秒後にカウント停止用ファンクションを呼び出して、タイマーを停止させる
    setTimeout(stopTimer, 6000);

    // 時間をカウントするファンクション
    function timeCountFunction() {
      try {
        // 1秒カウント
        sec = Number(sec) + 1;

        // ssが60秒なら、mmを+1してssをリセット
        if (sec == 60) {
          min = Number(min) + 1;
          sec = 0;
        }

        // mm と ssが1桁だった場合に先頭に0をつける
        if (String(min).length < 2) {
          min = "0" + min;
        }
        if (String(sec).length < 2) {
          sec = "0" + sec;
        }

        // 画面上(HTML)の表示時間を更新
        timeArea.innerHTML = `${min} : ${sec}`;
      } catch (e) {
        console.log("Somehow error happened on timeCountFunction!");
        console.log(e);
      }
    }

    // カウント停止用ファンクション
    function stopTimer() {
      clearInterval(intervalID);
      var clickTarget = document.getElementById("timeArea");
      // タイマー開始ボタンを入れたら以下のクリック処理をコメントアウトする(2022/2/23)
      clickTarget.click();
      var finishSound = new Audio("Recover.wav");
      finishSound.play();
    }
  } catch (e) {
    console.log("Somehow error happened on entireTimerFunction!");
    console.log(e);
  }
}

entireTimerFunction();
