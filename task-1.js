function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let txtcharge = fare * 0.20;
    let ServiceCharge = 30;
    let fine = fare + txtcharge + ServiceCharge;
    return fine.toFixed(2);
}
console.log(totalFine(230));