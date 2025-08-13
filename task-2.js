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
console.log(onlyCharacter("Ras g td!@9"));


