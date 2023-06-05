import "./lib/slider-color-picker.js";

const MAX_TEXT_LENGTH = 50000;
let longestTextLength = 0;
const MIN_BUBBLE_SIZE = 70;
const MAX_BUBBLE_SIZE = 200;
let benchMemories = [];
let shownQuestion = "";
let pageScaling;
let messageBox;
let selectedColor = "#FFFFFF";
let bubbleCollection;
let modalQuestion;
let modalText;
let modalDate;
let modal;
let closeModal;
window.onload = function () {
    readMemories();
    prepareColorPicker();
    let titleImageContainer = document.getElementById("container1");
    titleImageContainer.style.height = "" + (titleImageContainer.offsetWidth / 9 * 16) + "px";
    let diaryImageContainer = document.getElementById("container2");
    diaryImageContainer.style.height = "" + (diaryImageContainer.offsetWidth * 1.1) + "px";

    pageScaling = 1 / 800 * diaryImageContainer.offsetWidth;
    let titleText = document.getElementById("title");
    titleText.style.fontSize = "" + (500 * pageScaling) + "%";
    let speechBubble = document.getElementById("speechBubble");
    speechBubble.style.fontSize = "" + (220 * pageScaling) + "%";
    messageBox = document.getElementById("messageBox");
    messageBox.setAttribute("placeholder", getRandomQuestion());
    messageBox.setAttribute("maxlength", MAX_TEXT_LENGTH)
    let saveMemoryButton = document.getElementById("saveMemoryButton");
    saveMemoryButton.addEventListener("click", saveMemory);
    saveMemoryButton.style.fontSize = "" + (120 * pageScaling) + "%";
    saveMemoryButton.style.height = "" + (57 * pageScaling) + "px";
    saveMemoryButton.style.width = "" + (180 * pageScaling) + "px";
    bubbleCollection = document.getElementById("bubbleCollection");

    modalQuestion = document.getElementById("modalQuestion");
    modalText = document.getElementById("modalText");
    modalDate = document.getElementById("modalDate");

    modal = document.getElementById("memoryDetails");
    closeModal = document.getElementsByClassName("close")[0];
    closeModal.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

window.onresize = function () {
    let titleImageContainer = document.getElementById("container1");
    titleImageContainer.style.height = "" + (titleImageContainer.offsetWidth / 9 * 16) + "px";
    let diaryImageContainer = document.getElementById("container2");
    diaryImageContainer.style.height = "" + (diaryImageContainer.offsetWidth * 1.1) + "px";
    pageScaling = 1 / 800 * diaryImageContainer.offsetWidth;
    let titleText = document.getElementById("title");
    titleText.style.fontSize = "" + (500 * pageScaling) + "%";
    let speechBubble = document.getElementById("speechBubble");
    speechBubble.style.fontSize = "" + (220 * pageScaling) + "%";
    messageBox = document.getElementById("messageBox");
    let saveMemoryButton = document.getElementById("saveMemoryButton");
    saveMemoryButton.style.fontSize = "" + (120 * pageScaling) + "%";
    saveMemoryButton.style.height = "" + (57 * pageScaling) + "px";
    saveMemoryButton.style.width = "" + (180 * pageScaling) + "px";
};

function getRandomQuestion() {
    const RANDOM_QUESTIONS = [
        "How are you feeling right now?",
        "What are you seeing?",
        "What memory comes to you on this bench?"
    ]
    let randomIndex = Math.floor(Math.random() * RANDOM_QUESTIONS.length)
    shownQuestion = RANDOM_QUESTIONS[randomIndex];
    return shownQuestion;
}

async function readMemories() {
    const request = {
        action: "readAllMemories"
    }

    fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    }).then(response => response.text())
        .then(data => {
            try {
                benchMemories = JSON.parse(data)
                bubbleCollection.innerHTML = "";
                displayMemories();
            } catch (error) {
            }
        });
}

function displayMemories() {
    for (let i = 0; i < benchMemories.length; i++) {
        const memory = benchMemories[i];
        longestTextLength = (memory.Message.length > longestTextLength) ? memory.Message.length : longestTextLength;
    }
    for (let i = 0; i < benchMemories.length; i++) {
        const memory = benchMemories[i];
        createMemoryBubble(memory)
    }
}

function createMemoryBubble(memory) {
    const bubbleID = "bubble" + memory.ID_Memory;
    let newBubble = document.createElement("BUTTON");
    newBubble.classList.add("bubble");
    newBubble.setAttribute("id", bubbleID)
    let bubbleSize = ((MAX_BUBBLE_SIZE - MIN_BUBBLE_SIZE) * memory.Message.length / longestTextLength) + MIN_BUBBLE_SIZE * pageScaling + Math.random() * 10;
    if(memory.Message.length < 1) {
        bubbleSize = 30;
    }
    newBubble.style.height = "" + bubbleSize + "px";
    newBubble.style.width = "" + bubbleSize + "px";
    newBubble.style.margin = "" + (Math.random() * 3 + 1) + "px";
    newBubble.style.backgroundColor = "" + memory.Color;
    newBubble.onclick = function () {
        modal.style.display = "block";
        modalQuestion.innerHTML = memory.Question;
        modalText.innerHTML = memory.Message
        modalText.style.backgroundColor = "" + memory.Color;
        modalDate.innerHTML = memory.Date_Created;
        modalDate.style.backgroundColor = "" + memory.Color;
    }
    bubbleCollection.appendChild(newBubble);
}

function prepareColorPicker() {
    const picker = document.querySelector('slider-color-picker');
    picker.value = '#ffa0a0';
    picker.addEventListener('change', () => {
        selectedColor = picker.value;
        messageBox.style.backgroundColor = selectedColor;
    });
}

function saveMemory() {
    const memory = {
        question: shownQuestion,
        message: messageBox.value,
        color: selectedColor
    }
    const request = {
        action: "newMemory",
        data: memory
    }
    fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    }).then(response => response.text())
        .then(() => {
            messageBox.value = "";
            selectedColor = "#FFFFFF";
            messageBox.style.backgroundColor = selectedColor;
            readMemories();
        });
}
