
// todo: implement the times function

/*
Number.prototype.times = function (fn) {
    for (let i = 0; i < this; i++) {
        fn(i);
    }
}
*/
Number.prototype.times = function (fn) {
    return Array.from({length: this}, (cur, index) => fn(index))
};