import data from './questions.json' assert { type: 'json' };
let r_qs = [];
for(let i = 1; i<=data.numberofquestions; i++){
    r_qs.push(i);
}
localStorage.setItem("remaining_qs", r_qs);
localStorage.setItem("score", 0);