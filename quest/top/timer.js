// タイマーの初期時間（5分 = 300秒）
var initialTime = 300; // タイマーを5分からスタート

// タイマーの初期化
var timeLeft;
var timerElement = document.getElementById('timer');

function initializeTimer() {
    var remainingTime = localStorage.getItem('remainingTime');
    if (remainingTime !== null) {
        timeLeft = parseInt(remainingTime, 10);
    } else {
        timeLeft = initialTime; // localStorageに保存された時間がない場合、初期時間をセット
    }
    
    // タイマーを表示
    displayTime();
}

function displayTime() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    if (timerElement) {
        timerElement.textContent = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    }
}

initializeTimer(); // ページロード時にタイマーを初期化

// タイマーの更新とカウントダウンを実行する関数
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        localStorage.setItem('remainingTime', timeLeft);
        displayTime();
    } else if (timeLeft === 0) {
        // タイマーが0になったときの処理
        if (timerElement) {
            timerElement.textContent = '終了';
        }
        clearInterval(timer); // タイマーを停止
    }
}

// タイマーを定期的に更新
var timer = setInterval(updateTimer, 1000);

// クエストを変更ボタンがクリックされたときの処理
document.getElementById('changeButton').addEventListener('click', function() {
    // 新しいクエストを取得
    getRandomQuestFromServer(); // サーバーから新しいクエストを取得する関数

    // タイマーをリセット（初期化）
    timeLeft = initialTime; // タイマーを初期時間に戻す
    localStorage.setItem('remainingTime', timeLeft);
    displayTime(); // 残り時間を表示
});

function getRandomQuestFromServer() {
    // サーバーから新しいクエストを非同期で取得
    fetch('/your-api-endpoint') // サーバーのAPIエンドポイントを指定
        .then(response => response.json())
        .then(data => {
            // クエストのデータを取得
            var newQuest = data.quest;
            
            // 新しいクエストを表示
            document.getElementById('currentQuest').textContent = newQuest;
        })
        .catch(error => {
            console.error('クエストの取得に失敗しました: ' + error);
        });
}
