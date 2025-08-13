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
