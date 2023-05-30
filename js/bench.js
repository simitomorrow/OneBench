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
        ,Date_Created DATE
        );
*/

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

function getRandomQuestion() {
    return null;
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
    /*
        read from db
        create objects?
        memory = {
            id: "1"
            question: "how?"
            text: "asdf"
            color: "AABBCCDD"
            userHash: "hexhash32"
            date: "xx-xx-xxxx xx:xx:xx"
        }
        benchMemories.pusH(memory)
    */
}

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

function showTextBox() {
    /*
        on question press?
        always viewable?
        alexandras design
    */
}

function colorPicker() {
    /*
        colorgradient as a slider
        convert to pastel
        apply to textbox
    */
}

function showAreYouSurePrompt() {
    /*
        if yes -> saveMemory()
    */


    let memory = {
        question: "how you doin?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        color: "AABBCCDD",
        userHash: "notsureyet"
    }
    saveMemory();

    async function saveMemory() {
        /*
            save in db
            close textbox
            play animation?
            refresh memories or add newly saved to memorieslist
        */

        const response = await fetch("./memorydao.php", {
            method: 'POST',
            body: JSON.stringify(memory)
        })
    }
}
showAreYouSurePrompt();

// not sure how that is going to work
function preventSpam() {

}