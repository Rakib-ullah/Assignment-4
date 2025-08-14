// Problem-01 : Train TT's Fine Calculator 
function totalFine(fare) {
    // You have to write your code here
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let txtcharge = fare * 0.20;
    let ServiceCharge = 30;
    let fine = fare + txtcharge + ServiceCharge;
    return fine.toFixed(2);
}




// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
    // You have to write your code here
    if (typeof str !== "string") {
        return "Invalid";
    }
    let charonly = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= "a" && char <= "z" || char >= "A" && char <= "Z")) {
            charonly = charonly + char;
        }
    }
    return charonly.toUpperCase();

}





// Problem-03 : FIFA Best Team Award 
function bestTeam(player1, player2) {
    // You have to write your code here
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    const team1 = player1.foul + player1.cardR + player1.cardY;
    const team2 = player2.foul + player2.cardR + player2.cardY;
    if (team1 < team2) {
        return player1.name;
    }
    else if (team1 > team2) {
        return player2.name
    }
    else {
        return "Tie"
    }

}
// const Germany = { name: "Germany", foul: 12, cardY: 0, cardR: 0 };
// const Sweden = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 };


// const wellplayed = bestTeam(Germany, Sweden);
// console.log(wellplayed);






// Problem-04: Same Same But Different  😕 
function isSame(arr1, arr2) {
    // You have to write your code here
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
        return true;
    }
}
// console.log(isSame(123, [1, 2]));
// console.log(isSame([1, 2, 3], [1, 2, 3]));





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

// console.log(resultReport([50, 30, 80, 70]));
// console.log(resultReport("Rakib")); 
