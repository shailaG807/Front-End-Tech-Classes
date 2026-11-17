1. JSON – 5 Simple Examples

Example 1: Student Details

{
    "name": "Neha",
    "age": 22,
    "course": "JavaScript"
}

Example 2: Employee Details

{
    "id": 101,
    "name": "Rahul",
    "salary": 25000,
    "city": "Bangalore"
}

Example 3: Product Details

{
    "product": "Laptop",
    "price": 45000,
    "brand": "HP",
    "available": true
}

Example 4: JSON Array

{
    "students": ["Neha", "Rahul", "Amit", "Priya"]
}

Accessing values:
console.log(data.students[0]);
console.log(data.students[1]);

Example 5: Multiple Student Objects

{
    "students": [
        {
            "name": "Neha",
            "age": 22
        },
        {
            "name": "Rahul",
            "age": 23
        }
    ]
}

2. XML – 5 Simple Examples

Example 1: Student Details

<student>
    <name>Neha</name>
    <age>22</age>
    <course>JavaScript</course>
</student>

Example 2: Employee Details

<employee>
    <id>101</id>
    <name>Rahul</name>
    <salary>25000</salary>
    <city>Bangalore</city>
</employee>

Example 3: Product Details

<product>
    <name>Laptop</name>
    <price>45000</price>
    <brand>HP</brand>
</product>

Example 4: Multiple Students

<students>
    <student>
        <name>Neha</name>
        <age>22</age>
    </student>

    <student>
        <name>Rahul</name>
        <age>23</age>
    </student>
</students>

Example 5: College Details

<college>
    <name>ABC College</name>
    <location>Bangalore</location>
    <department>CSE</department>
    <students>500</students>
</college>

3. AJAX – 5 Simple Examples

Example 1: Display Data from Server

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function() {
    console.log(xhr.responseText);
};

xhr.send();


Example 2: Display First User Name

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function() {

    let data = JSON.parse(xhr.responseText);

    console.log(data[0].name);

};

xhr.send();

Example 3: Display Multiple User Names

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function() {

    let data = JSON.parse(xhr.responseText);

    data.forEach(function(user) {
        console.log(user.name);
    });

};

xhr.send();

Example 4: Display User Email

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function() {

    let data = JSON.parse(xhr.responseText);

    console.log(data[0].email);

};

xhr.send();

Example 5: Display Data on HTML Page

<!DOCTYPE html>
<html>
<body>

<h2>Student Details</h2>

<button onclick="loadData()">Load User</button>

<p id="result"></p>

<script>

function loadData() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");

    xhr.onload = function() {

        let data = JSON.parse(xhr.responseText);

        document.getElementById("result").innerHTML =
            "Name: " + data.name + "<br>" +
            "Email: " + data.email;

    };

    xhr.send();
}

</script>

</body>
</html>



