let studentsList = [];

const name = document.getElementById("studentName");
const g1 = document.getElementById("grade1");
const g2 = document.getElementById("grade2");
const g3 = document.getElementById("grade3");
const attendance = document.getElementById("attendance");

const error = document.getElementById("errorBox");
const students = document.getElementById("studentsDisplay");
const report = document.getElementById("reportDisplay");

document.getElementById("addStudentBtn").onclick = function () {

try {
    error.textContent = "";

    if (name.value.trim() === "")
        throw new Error("Enter student name");

    let s = new Student(name.value, g1.value, g2.value, g3.value, attendance.value);

    studentsList.push(s);

    students.innerHTML = studentsList.map(s =>
        `<div class="student">
            <b>${s.name}</b> - Average: ${s.average.toFixed(2)}
        </div>`
    ).join("");

    name.value = "";
    g1.value = g2.value = g3.value = attendance.value = "";

} catch (e) {
    error.textContent = e.message;
}
};

document.getElementById("committeeBtn").onclick = function () {

let weak = studentsList.filter(s => s.average >= 40 && s.average <= 49);

let result = weak.map(s => ({
    name: s.name,
    average: s.average + 5
}));

if (result.length === 0) {
    report.innerHTML = "No struggling students found";
    return;
}

let total = result.reduce((sum, s) => sum + s.average, 0);

let generalAverage = total / result.length;

report.innerHTML = `
    <div class="report">
        <b>Number of students:</b> ${result.length}<br>
        <b>General Average:</b> ${generalAverage.toFixed(2)}
    </div>

    ${result.map(s => `
        <div class="report">
            ${s.name} - New Average: ${s.average.toFixed(2)}
        </div>
    `).join("")}
`;
};