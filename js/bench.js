import "./lib/slider-color-picker.js";
/*
    db-connection:
    localhost 
    user: smizz_onebench
    pw: GE-9YAu:8gy;6c

    DB TABLE: MEMORY
    id: long, autoincrement
    question: varchar(300)
    message: varchar(5000)
    color: varchar(8)
    byUserHash: varchar(32)
    dateCreated: date

    CREATE TABLE MEMORY(
        ID_Memory INT AUTO_INCREMENT PRIMARY KEY
        ,Question VARCHAR(300)
        ,Message VARCHAR(5000)
        ,Color VARCHAR(9)
        ,By_User_Hash VARCHAR(64)
        ,Date_Created DATETIME DEFAULT CURRENT_TIMESTAMP
        );
*/

let shownQuestion = "";
let textbox;
let selectedColor = "#FFFFFF";
window.onload = function () {
    prepareColorPicker();
    showRandomQuestion();
    textbox = document.getElementById('messageBox');
};

const RANDOM_QUESTIONS = [
    "How are you?",
    "What are you seeing?",
    "do memories ever fade?",
    "should people be able to delete their memories?"
]

const MAX_TEXT_LENGTH = 5000;
const MIN_BUBBLE_SIZE = 80;
const MAX_BUBBLE_SIZE = 400;
let benchMemories = [];

function showRandomQuestion() {
    let randomIndex = Math.floor(Math.random() * RANDOM_QUESTIONS.length)
    shownQuestion = RANDOM_QUESTIONS[randomIndex];
    document.getElementById("randomQuestion").innerHTML = shownQuestion;
}

function getID() {
    /*
        read from cookie
        if nothing, create new and save in cookie
    */

    function createNewID() {
        //id saved in db or
        //hash32 of hardware/browser?
    }
}

function readMemories() {
    console.log("do the thing")
    let request = {
        action: "readAllMemories"
    }

    const response = fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    }).then(response => response.text())
    .then(data => console.log(JSON.parse(data)));
}
readMemories();

function displayMemories() {
    /*
        after reading from db (ASYNC BTW)
        benchMemories.forEach(memory => {
            question
            text
            color
            texture (if id of text is same as cookie)
            size: ((MAX_BUBBLE_SIZE - MIN_BUBBLE_SIZE) * textLength / MAX_TEXT_LENGTH) + MIN_BUBBLE_SIZE;
            date

            glass of marbles effect based on date?
        })
    */
}

function prepareColorPicker() {
    const picker = document.querySelector('slider-color-picker');
    picker.value = '#ffa0a0';
    picker.addEventListener('change', () => {
        selectedColor = picker.value;
        textbox.style.backgroundColor = selectedColor;
    });
}

async function saveMemory() {
    let memory = {
        question: "questione",
        message: "massage",
        color: "AABBCCDD",
        userHash: "notsureyet"
    }
    let request = {
        action: "newMemory",
        data: memory
    }
    fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    });
}

