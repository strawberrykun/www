<?php
session_start();

if (isset($_POST['timeLeft'])) {
    $_SESSION['timer'] = intval($_POST['timeLeft']);
}
