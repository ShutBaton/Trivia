import data from './questions.json' assert { type: 'json' };

let r_qs = localStorage.getItem("remaining_qs").split(",");
let questionnum = r_qs[Math.floor(Math.random()*r_qs.length)];

if(r_qs[0] == ''){
    location.href ="/finish.html";
}

let score = Number(localStorage.getItem("score"));
let nums = [0, 1, 2, 3];

let answerselected = false;

while(true){
    let randomnum = Math.round(Math.random()*4);
    if(nums.includes(randomnum)){
        document.getElementById('AnswerTL').innerHTML = data["question"+questionnum]["answer"+(randomnum+1)];
        nums = nums.filter(item => item !== randomnum)
        break;
    };
};

while(true){
    let randomnum = Math.round(Math.random()*4);
    if(nums.includes(randomnum)){
        document.getElementById('AnswerTR').innerHTML = data["question"+questionnum]["answer"+(randomnum+1)];
        nums = nums.filter(item => item !== randomnum)
        break;
    };
};

while(true){
    let randomnum = Math.round(Math.random()*4);
    if(nums.includes(randomnum)){
        document.getElementById('AnswerBL').innerHTML = data["question"+questionnum]["answer"+(randomnum+1)];
        nums = nums.filter(item => item !== randomnum)
        break;
    };
};

while(true){
    let randomnum = Math.round(Math.random()*4);
    if(nums.includes(randomnum)){
        document.getElementById('AnswerBR').innerHTML = data["question"+questionnum]["answer"+(randomnum+1)];
        nums = nums.filter(item => item !== randomnum)
        break;
    };
};

document.getElementById('question').innerHTML = data["question"+questionnum].question;
document.getElementById('score').innerHTML = "Score: "+score;

document.getElementById("AnswerTL").onclick = function () {
    if(!answerselected){
        if(document.getElementById("AnswerTL").innerHTML == data["question"+questionnum]["answer1"]){
            document.getElementById("AnswerTLO").style.background = "green";
            score+=1;
        }
        else if(data["question"+questionnum].funny && document.getElementById("AnswerTL").innerHTML == data["question"+questionnum]["answer4"]){
            document.getElementById("AnswerTLO").style.background = "green";
            score+=1;
        }
        else{
            score+=-1;
            document.getElementById("AnswerTLO").style.background = "red";
        }
        localStorage.setItem("score", score);
        answerselected = true;
        let index = r_qs.indexOf(questionnum);
        if(index > -1){
            r_qs.splice(index, 1);
        }
        localStorage.setItem("remaining_qs", r_qs);
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
};

document.getElementById("AnswerTR").onclick = function () {
    if(!answerselected){
        if(document.getElementById("AnswerTR").innerHTML == data["question"+questionnum]["answer1"]){
            document.getElementById("AnswerTRO").style.background = "green";
            score+=1;
        }
        else if(data["question"+questionnum].funny && document.getElementById("AnswerTR").innerHTML == data["question"+questionnum]["answer4"]){
            document.getElementById("AnswerTRO").style.background = "green";
            score+=1;
        }
        else{
            score+=-1;
            document.getElementById("AnswerTRO").style.background = "red";
        }
        localStorage.setItem("score", score);
        answerselected = true;
        let index = r_qs.indexOf(questionnum);
        if(index > -1){
            r_qs.splice(index, 1);
        }
        localStorage.setItem("remaining_qs", r_qs);
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
};

document.getElementById("AnswerBL").onclick = function () {
    if(!answerselected){
        if(document.getElementById("AnswerBL").innerHTML == data["question"+questionnum]["answer1"]){
            document.getElementById("AnswerBLO").style.background = "green";
            score+=1;
        }
        else if(data["question"+questionnum].funny && document.getElementById("AnswerBL").innerHTML == data["question"+questionnum]["answer4"]){
            document.getElementById("AnswerBLO").style.background = "green";
            score+=1;
        }
        else{
            score+=-1;
            document.getElementById("AnswerBLO").style.background = "red";
        }
        localStorage.setItem("score", score);
        answerselected = true;
        let index = r_qs.indexOf(questionnum);
        if(index > -1){
            r_qs.splice(index, 1);
        }
        localStorage.setItem("remaining_qs", r_qs);
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
};

document.getElementById("AnswerBR").onclick = function () {
    if(!answerselected){
        if(document.getElementById("AnswerBR").innerHTML == data["question"+questionnum]["answer1"]){
            document.getElementById("AnswerBRO").style.background = "green";
            score+=1;
        }
        else if(data["question"+questionnum].funny && document.getElementById("AnswerBR").innerHTML == data["question"+questionnum]["answer4"]){
            document.getElementById("AnswerBRO").style.background = "green";
            score+=1;
        }
        else{
            score+=-1;
            document.getElementById("AnswerBRO").style.background = "red";
        }
        localStorage.setItem("score", score);
        answerselected = true;
        let index = r_qs.indexOf(questionnum);
        if(index > -1){
            r_qs.splice(index, 1);
        }
        localStorage.setItem("remaining_qs", r_qs);
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
};