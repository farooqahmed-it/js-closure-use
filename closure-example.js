/*
Use of JS Closure
Used for protecting variables for being on the global scope
can be useful to create private variables or functions.
*/
const globalVariable = 'global variable';

function outerFunction(param1) {
    const variable1 = 'var one';

    // Closure
    function innerFunction(param2) {
        const variable2 = 'var two';

        console.log('Global Variable: ', globalVariable);
        console.log('Outer Function Variable 1: ', variable1);
        console.log('Inner Function Variable 2: ', variable2);
        console.log('Outer Function Param 1: ', param1);
        console.log('Inner Function Param 2: ', param2);
    }

    return innerFunction;
}

var innerFunc = outerFunction('OuterFunc Param2');
innerFunc('InnerFunc Param1');


