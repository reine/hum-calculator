<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Humorous Units of Measurement</title>
</head>
<body>
    <div>
        <form id="calculator">
            <h1>Humorous Units of Measurement</h1>
            <label>Your Name</label>
            <input type="text" name="username">
            <p>What do you want to convert?</p>
            <label>Volume</label>
            <input type="number" name="convert-unit-volume">
            <br>
            <label>From:</label>
            <select name="convert-from-volume" id="convert-from-volume"></select>
            <label>To:</label>
            <select name="convert-to-volume" id="convert-to-volume"></select>
            <br>
            <input type="submit">
            <p>Your conversion: <span id="result-volume"></span></p>
        </form>
    </div>

    <script src="./script.js"></script>
</body>
</html>