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
        ,Date_Created DATETIME DEFAULT NOW()
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

async function saveMemory() {
    /*
        show are you sure
        if yes
            save in db
            close textbox
            play animation?
            refresh memories or add newly saved to memorieslist
    */

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

    const response = fetch("./memorydao.php", {
        method: 'POST',
        body: JSON.stringify(request)
    }).then(hi => {
        console.log(hi);
    })
}

saveMemory();

// not sure how that is going to work
function preventSpam() {

}