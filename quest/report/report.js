document.addEventListener("DOMContentLoaded", function () {
    var title = document.querySelector(".quest_title");
    title.innerHTML = "クエスト名を思い出しています...";

    var questTime = document.querySelector(".quest_time");
    questTime.innerHTML = ("目標時間：" + 3 + "時間" + 0 + "分");
});

function uploadFile() {
    var fileInput = document.getElementById("quest_file");
    if (fileInput.files.length === 0) {
        alert("ファイルを選択してください。");
        return;
    }
    
}