// Problem-05: Exam Result Report Generator
function resultReport(marks) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let totalMark = 0;
    let pass = 0;
    let fail = 0;
    for (let i of marks) {
        totalMark = totalMark + i;
        if (i >= 40) {
            pass++;
        }
        else {
            fail++;
        }
    }
    let finalScore = Math.round(totalMark / marks.length);
    return { finalScore, pass, fail };
}

console.log(resultReport([50, 30, 80, 70]));
console.log(resultReport("Rakib")); 