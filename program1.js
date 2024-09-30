/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
<<<<<<< HEAD
    let stack = [];
    
=======
>>>>>>> c912a51257a30080470c180451190f2a5ca8b194
    let matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

   
    for (let char of s) {
       
        if (matchingBracket[char]) {
            
            let topElement = stack.length ? stack.pop() : '#';
            if (topElement !== matchingBracket[char]) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }

    
    return stack.length === 0;
};

module.exports = { isValid };
