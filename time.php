<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Humorous Units of Measurement | Time</title>
</head>
<body>
    <div>
        <form id="calculator">
            <h1>Humorous Units of Measurement</h1>
            <label>Your Name</label>
            <input type="text" name="username">
            <p>What do you want to convert?</p>
            <label>Time</label>
            <input type="number" name="convert-unit-time">
            <br>
            <label>From:</label>
            <select name="convert-from-time" id="convert-from-time"></select>
            <label>To:</label>
            <select name="convert-to-time" id="convert-to-time"></select>
            <br>
            <input type="submit">
            <p>Your conversion: <span id="result-time"></span></p>
            <hr>
            <p class="text-center"><a href="./index.php">Volume Conversion</a></p>
        </form>
    </div>

    <script src="./script-time.js"></script>
</body>
</html>