"use strict";

/**
 * Load Script In Sequence
 *
 * @param {Array} scriptArray
 * @method LoadScriptInSequence
 */
function LoadScriptInSequence(scriptArray) {
    const loadScriptDOM = function (index) {
        if (index >= scriptArray.length) return null;
            let script = document.createElement("script");
            script.src = scriptArray[index];
            script.addEventListener('load', ()=>{
                loadScript(index + 1);
            });
            document.head.appendChild(script);
    };

    const loadScriptFetch = function (index) {
        if (index >= scriptArray.length) return null;
        return fetch(scriptArray[index], {
            method: "GET",
            redirect: 'follow',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'text/javascript'
            },
        })
        .then(res => res.blob())
        .then((blob) => {
            let script = document.createElement("script");
            script.src = URL.createObjectURL(blob);
            document.head.appendChild(script);

            return loadScript(index + 1);
        });
    };
    const loadScript = loadScriptDOM;
    return loadScript(0);
}

/**
 * Try convert an object to array
 * @param obj
 * @returns {*}
 */
Array.prototype.toArray = (obj) => {
    return Array.prototype.slice.call(obj);
};

