// Workshop NodeJS
// Callback examples

// Don't worry about this line
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

/**
 * This function Adds two numbers and return the result in the callback
 * A callback is a function !
 */
function simpleCallbackExample(nb1, nb2, callback) {
    if (nb1 < 0 || nb2 < 0)
        return callback(new Error("This function doesn't support negative additions"), null);
    return callback(null, nb1 + nb2);
}

/**
 * This function wait for the number of seconds passed in parameters
 * A callback is a function !
 */
function simpleCallbackExecutionExample(seconds, callback) {
    sleep(seconds * 1000).then(() => {
        callback("Callback after " + seconds + " seconds.");
    });
}

/**
 * Usage of the previous function 'simpleCallbackExample':
 */

mainSimpleCallbackExample();

function mainSimpleCallbackExample() {

    // Simple notation
    simpleCallbackExample(3, 6, function (err, result) {
        if (err)
            console.error(err.message);
        else
            console.log("Result: " + result);
    });

    // Arrow function notation
    simpleCallbackExample(3, 6, (err, result) => {
        if (err)
            console.error(err.message);
        else
            console.log("Result: " + result);
    });

    // Simple notation error
    simpleCallbackExample(-213, 6, function (err, result) {
        if (err)
            console.error(err.message);
        else
            console.log("Result: " + result);
    });
}

/**
 * Usage of the previous function 'simpleCallbackExecutionExample':
 */

mainSimpleCallbackExecutionExample();

function mainSimpleCallbackExecutionExample() {

    // Arrow notation
    simpleCallbackExecutionExample(2, (res) => console.log(res));
    simpleCallbackExecutionExample(1, (res) => console.log(res));
    simpleCallbackExecutionExample(5, (res) => console.log(res));
    console.log("All simpleCallbackExecutionExample function called !");
}

/**
 * Exemple d'un 'callback hell"
 * Le code devient illisible par l'imbrication de nombreux callback.
 * Les callbacks sont utiles mais il fait savoir quand les utiliser
 * et quand il vaut mieux partir sur une autre architecture (lib async par exemple).
 */
function mainSimpleCallbackHellExample(callback) {
    simpleCallbackExample(3, 5, (err, result) => {
        if (err)
            return callback(err, null);
        simpleCallbackExample(result, 1, (err, result2) => {
            if (err)
                return callback(err, null);
            simpleCallbackExample(result2, 8394, (err, result3) => {
                if (err)
                    return callback(err, null);
                simpleCallbackExample(result3, 84726384, (err, result4) => {
                    if (err)
                        return callback(err, null);
                    return callback(null, result4);
                })
            })
        })
    })
}