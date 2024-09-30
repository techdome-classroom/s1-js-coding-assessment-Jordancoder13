/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
<<<<<<< HEAD
    const roman = {
=======
     const roman = {
>>>>>>> c912a51257a30080470c180451190f2a5ca8b194
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = roman[s[i]];
        const next = roman[s[i + 1]];

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};


module.exports={romanToInt}
