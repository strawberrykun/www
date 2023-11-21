<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>クエスト受注履歴</title>
    <link rel="stylesheet" href="./report.css">
    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
    <script src="./report.js"></script>
</head>

<body>
    <?php for($i = 0;$i < 10; $i++):?>
    <p class="nav-open">クエスト名</p>
    <nav>
        <ul>
            <li class="basic">基礎ポイント：<span class="basic_pt">100</span></li>
            <li class="bonus">追加ポイント：<span class="bonus_pt">10</span></li>
            <li class="balance">ポイント残高：<span class="before_pt">190</span>→<span class="after_pt">300</span></li>
        </ul>
    </nav>
    <?php endfor;?>
</body>


</html>