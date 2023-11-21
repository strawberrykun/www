<html>

<head>
    <meta charset="UTF-8">
    <title>クエストトップ</title>
    <link rel="stylesheet" href="./top.css">
    <script src="./top.js"></script>
</head>

<body>
    <div class="quest_area">
        <div class="title">現在受けれるクエストはこちら！</div>
        <div class="box_area">
            <div class="quest_title inbox">クエストを思い出しています...</div>
            <div class="quest_time inbox">目標時間:0時間0分</div>
        </div>
        <button class="quest_pass_btn">クエストをスキップ</button>
        <div class="skip_count_txt">残り回数:<div class="skip_count">10</div>
        </div>
        <a href="../report/report.html"><button class="quest_end_report">報告して終了</button></a>
        <button class="quest_end_non_report" onclick="nonReport()">報告しないで終了</button>
    </div>
</body>

</html>