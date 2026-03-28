function isUser(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    var obj = value;
    return (typeof obj.id === "number" &&
        typeof obj.name === "string" &&
        typeof obj.email === "string" &&
        typeof obj.age === "number");
}
var input = document.getElementById("jsonInput");
var button = document.getElementById("validateBtn");
var output = document.getElementById("output");
button.addEventListener("click", function () {
    try {
        var data = JSON.parse(input.value);
        if (isUser(data)) {
            output.textContent =
                "Valid User\n\n" + JSON.stringify(data, null, 2);
        }
        else {
            output.textContent = "Invalid User Shape";
        }
    }
    catch (_a) {
        output.textContent = "Invalid JSON";
    }
});
function fillExample() {
    input.value = "{\n  \"id\": 1,\n  \"name\": \"Renuka\",\n  \"email\": \"abc@gmail.com\",\n  \"age\": 21\n}";
}
