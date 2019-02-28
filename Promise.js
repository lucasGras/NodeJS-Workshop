const request = require('request');

/**
 * Simple request example using Promise and classic function notation
 */

/*
 * Promise usage:
 * '.then' est l'état 'onfullfilled', l'état où l'opération a réussi. C'est l'appel à 'resolve()'
 * '.catch' est l'état 'onrejected', l'état où l'opération a échoué. C'est l'appel à 'reject()'
 */
simplePromiseExample()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.error((err));
    });

/**
 * Création d'une Promise réalisant une requête.
 * On appel l'état reject ou resolve en fonction du résultat de la callback de request.
 * On return la promise que l'on a créé
 */
function simplePromiseExample() {
    let promise = new Promise(function (resolve, reject) {
        request('http://google.com', function (error, response, body) {
            if (error)
                return reject(error);
            return resolve(body);
        });
    });

    return promise;
}

// --------------------------------------------------------------------------------------

/**
 * Simple request example using Promise and arrow function notation (Good syntax practice)
 */

simplePromiseExampleUsingArrowNotation()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

function simplePromiseExampleUsingArrowNotation() {
    return new Promise((resolve, reject) => {
        request('http://google.com', (error, response, body) => {
            if (error)
                return reject(error);
            return resolve(body);
        });
    });
}