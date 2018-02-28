// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 50;
    let Q = 25;
    let D = 10;
    let N = 5;
    let P = 1;
    let answer = {};
    if (currency <= 0) {
    } else if (currency >= 10000) {
        answer = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        let newH = Math.floor(currency / H);
        currency -= Math.floor(currency / H) * H;
        let newQ = Math.floor(currency / Q);
        currency -= Math.floor(currency / Q) * Q;
        let newD = Math.floor(currency / D);
        currency -= Math.floor(currency / D) * D;
        let newN = Math.floor(currency / N);
        currency -= Math.floor(currency / N) * N;
        let newP = Math.floor(currency / P);
        if (newH) answer.H = newH;
        if (newQ) answer.Q = newQ;
        if (newD) answer.D = newD;
        if (newN) answer.N = newN;
        if (newP) answer.P = newP;
    }
    return answer;
};
