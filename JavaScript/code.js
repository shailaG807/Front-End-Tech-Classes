<!-- <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Events</h2>

<button onclick="showMessage()">Click Me</button>

<script>
function showMessage() {
    alert("Hello Words!!!!!!!!!!!");
}
</script>

</body>
</html> -->

<!-- 
<!DOCTYPE html>
<html>
<body>

<h3>Select Your Course</h3>

<select onchange="showCourse(this.value)">
    <option value="">Select Course</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JavaScript">JavaScript</option>
</select>

<p id="result"></p>

<script>
function showCourse(course) {
    document.getElementById("result").innerHTML =
        "You selected: " + course;
}
</script>

</body>
</html> -->


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2 onmouseover="changeColor(this)">
    Move your mouse here
</h2>


<h2
    onmouseover="this.style.color='red'"
    onmouseout="this.style.color='black'">

    Move Mouse Here

</h2>


<!DOCTYPE html>
<html>
<body>

<h3>Press any key</h3>

<input type="text" onkeydown="showKey(event)">

<p id="result"></p>

<script>
function showKey(event) {
    document.getElementById("result").innerHTML =
        "You pressed: " + event.key;
}
</script>

</body>
</html>






<script>
function changeColor(element) {
    element.style.color = "blue";
}
</script>

</body>
</html> -->


<!-- <!DOCTYPE html>
<html>
<body onload="welcome()">

<h2>Welcome to our website</h2>

<script>
function welcome() {
    alert("Website loaded successfully!");
}
</script>

</body>
</html> -->


<!DOCTYPE html>
<html>
<body>

<button id="myButton">Click Me</button>

<script>

let button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button clicked!");
});

</script>

</body>
</html>

