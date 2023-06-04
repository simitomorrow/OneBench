import "./lib/slider-color-picker.js";

const MAX_TEXT_LENGTH = 5000;
let benchMemories = [];
let shownQuestion = "";
let textbox;
let selectedColor = "#FFFFFF";
window.onload = function () {
    prepareColorPicker();
    showRandomQuestion();
    textbox = document.getElementById('messageBox');
    document.getElementById("saveMemoryButton").addEventListener("click", saveMemory);
    
    let titleImageContainer = document.getElementById("container1");
    titleImageContainer.style.height = "" + (titleImageContainer.offsetWidth / 9 * 16) + "px";
    let diaryImageContainer = document.getElementById("container2");
    diaryImageContainer.style.height = "" + (diaryImageContainer.offsetWidth / 9 * 16) + "px";
};

function showRandomQuestion() {
    const RANDOM_QUESTIONS = [
        "How are you?",
        "What are you seeing?",
        "do memories ever fade?",
        "should people be able to delete their memories?"
    ]
    let randomIndex = Math.floor(Math.random() * RANDOM_QUESTIONS.length)
    shownQuestion = RANDOM_QUESTIONS[randomIndex];
    document.getElementById("randomQuestion").innerHTML = shownQuestion;
}

function readMemories() {
    const request = {
        action: "readAllMemories"
    }

    fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    }).then(response => response.text())
        .then(data => {
            benchMemories = JSON.parse(data)
            displayMemories();
        });
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

function saveMemory() {
    console.log(textbox.value)
    const memory = {
        question: shownQuestion,
        message: textbox.value,
        color: selectedColor
    }
    const request = {
        action: "newMemory",
        data: memory
    }
    fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    });
}

