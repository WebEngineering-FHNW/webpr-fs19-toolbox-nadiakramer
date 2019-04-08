"use strict";

// find a solution for suite, test, assert



// test result report
// report :: String, [Bool] -> DOM ()

// test
//     in einem Scope
//     das ok anlegen
//     das ok befüllen
//     report mit name und ok aufrufen

//find a solution for suite, test, assert

const Assert = () => {
    const ok = [];
    const equals = (actual, expected) => {
        const result = (actual === expected);
        if (!result) {
            try {
                throw new Error("bla")
            } catch (e){
                console.dir(e);
            }
        }
        ok.push(result);
    };
    return{
        getOk: () => ok,
        equals: equals(),
    }
}
/**
 *providing a scope and name for a test callback that fills the array
 * @param {string} origin
 * @param {function ([boolean]): *}callback
 */
const test = (origin, callback) => {
    const assert = Assert();       //das ok anlegen
    callback(assert);        //das ok befüllen
    report(origin, getOk());  //report mit name und ok aufrufen
};


/**
 * report :: String, [Bool] -> DOM ()
 * Report reports the list of boolean checks
 * @param {string}      origin: where the reported tests come from
 * @param { [boolean] } ok: list of applied checks
 */
function report(origin, ok) {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        document.writeln(" "+ padLeft(ok.length, 3) +" tests in " + padRight(origin, extend) + " ok.");
        return;
    }
    let reportLine = "    Failing tests in " + padRight(origin, extend);
    bar(reportLine.length);
    document.writeln("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            document.writeln("|    Test #"+ padLeft(i, 3) +" failed                     |");
        }
    }
    bar(reportLine.length);
}

function bar(extend) {
    document.writeln("+" + "-".repeat(extend) + "+");
}

// padRight :: String, Int -> String
function padRight(str, extend) {
    return "" + str + fill(str, extend);
}

function padLeft(str, extend) {
    return "" + fill(str, extend) + str;
}

function fill(str, extend) {
    const len = str.toString().length; // in case str is not a string
    if (len > extend) {
        return str;
    }
    return " ".repeat(extend - len);
}