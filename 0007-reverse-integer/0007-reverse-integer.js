var reverse = function(x) {
    const reverseVal = x.toString().split("").reverse().join("");
    const result = parseInt(reverseVal) * Math.sign(x);
    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }
    return result;
};
