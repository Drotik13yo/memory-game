const animals = [
    { en: "cat", nl: "kat" },
    { en: "dog", nl: "hond" },
    { en: "cow", nl: "koe" },
    { en: "horse", nl: "paard" },
    { en: "pig", nl: "varken" },
    { en: "sheep", nl: "schaap" },
    { en: "goat", nl: "geit" },
    { en: "chicken", nl: "kip" },
    { en: "duck", nl: "eend" },
    { en: "rabbit", nl: "konijn" },
    { en: "mouse", nl: "muis" },
    { en: "bear", nl: "beer" },
    { en: "lion", nl: "leeuw" },
    { en: "tiger", nl: "tijger" },
    { en: "elephant", nl: "olifant" },
    { en: "monkey", nl: "aap" },
    { en: "zebra", nl: "zebra" },
    { en: "giraffe", nl: "giraf" },
    { en: "frog", nl: "kikker" },
    { en: "fish", nl: "vis" }
];

const food = [
    { en: "bread", nl: "brood" },
    { en: "cheese", nl: "kaas" },
    { en: "milk", nl: "melk" },
    { en: "egg", nl: "ei" },
    { en: "meat", nl: "vlees" },
    { en: "apple", nl: "appel" },
    { en: "banana", nl: "banaan" },
    { en: "potato", nl: "aardappel" },
    { en: "rice", nl: "rijst" },
    { en: "soup", nl: "soep" }
];

const colors = [
    { en: "red", nl: "rood" },
    { en: "blue", nl: "blauw" },
    { en: "green", nl: "groen" },
    { en: "yellow", nl: "geel" },
    { en: "black", nl: "zwart" },
    { en: "white", nl: "wit" },
    { en: "orange", nl: "oranje" },
    { en: "purple", nl: "paars" },
    { en: "pink", nl: "roze" },
    { en: "gray", nl: "grijs" }
];

const body = [
    { en: "head", nl: "hoofd" },
    { en: "hand", nl: "hand" },
    { en: "leg", nl: "been" },
    { en: "eye", nl: "oog" },
    { en: "ear", nl: "oor" },
    { en: "nose", nl: "neus" },
    { en: "mouth", nl: "mond" },
    { en: "arm", nl: "arm" },
    { en: "foot", nl: "voet" },
    { en: "hair", nl: "haar" }
];

const clothes = [
    { en: "shirt", nl: "shirt" },
    { en: "pants", nl: "broek" },
    { en: "dress", nl: "jurk" },
    { en: "jacket", nl: "jas" },
    { en: "shoes", nl: "schoenen" },
    { en: "hat", nl: "hoed" },
    { en: "socks", nl: "sokken" },
    { en: "skirt", nl: "rok" },
    { en: "coat", nl: "jas" },
    { en: "gloves", nl: "handschoenen" }
];

const house = [
    { en: "table", nl: "tafel" },
    { en: "chair", nl: "stoel" },
    { en: "bed", nl: "bed" },
    { en: "door", nl: "deur" },
    { en: "window", nl: "raam" },
    { en: "kitchen", nl: "keuken" },
    { en: "bathroom", nl: "badkamer" },
    { en: "floor", nl: "vloer" },
    { en: "wall", nl: "muur" },
    { en: "lamp", nl: "lamp" }
];

const transport = [
    { en: "car", nl: "auto" },
    { en: "bus", nl: "bus" },
    { en: "train", nl: "trein" },
    { en: "bike", nl: "fiets" },
    { en: "plane", nl: "vliegtuig" },
    { en: "boat", nl: "boot" },
    { en: "truck", nl: "vrachtwagen" },
    { en: "metro", nl: "metro" },
    { en: "taxi", nl: "taxi" },
    { en: "tram", nl: "tram" }
];

const weather = [
    { en: "sun", nl: "zon" },
    { en: "rain", nl: "regen" },
    { en: "snow", nl: "sneeuw" },
    { en: "wind", nl: "wind" },
    { en: "cloud", nl: "wolk" },
    { en: "storm", nl: "storm" },
    { en: "fog", nl: "mist" },
    { en: "ice", nl: "ijs" },
    { en: "heat", nl: "hitte" },
    { en: "cold", nl: "kou" }
];

const school = [
    { en: "book", nl: "boek" },
    { en: "pen", nl: "pen" },
    { en: "pencil", nl: "potlood" },
    { en: "teacher", nl: "leraar" },
    { en: "student", nl: "student" },
    { en: "desk", nl: "bureau" },
    { en: "board", nl: "bord" },
    { en: "lesson", nl: "les" },
    { en: "homework", nl: "huiswerk" },
    { en: "school", nl: "school" }
];

const verbs = [
    { en: "eat", nl: "eten" },
    { en: "drink", nl: "drinken" },
    { en: "go", nl: "gaan" },
    { en: "come", nl: "komen" },
    { en: "see", nl: "zien" },
    { en: "hear", nl: "horen" },
    { en: "speak", nl: "spreken" },
    { en: "walk", nl: "lopen" },
    { en: "run", nl: "rennen" },
    { en: "sleep", nl: "slapen" }
];

const levelNames = [
    "Animals", "Food", "Colors", "Body",
    "Clothes", "House", "Transport",
    "Weather", "School", "Verbs"
];

//переключение между  масивами уровней
const allLevels = [ animals, food, colors, body, clothes, house, transport, weather, school, verbs]

let currentLevel = 0;

let remainingWords = [];

let currentLevels = allLevels[currentLevel];
remainingWords = [...currentLevels];

//счетчик слов
let count = 0;
//правильное слово
let correctWord;
//cчетчик правильных
let totalAnswers = 0;
let rightAnswer = 0;
//подсчет баллов за уровень
let totalRightAnswers = 0;
let levelResults = [];
//время через сколько закроеться всплывающие окно
let popupTimer;
//от прокликивание
let isLocked = false;
//пройденные уровни
let levelsCompleted = 0;

let startLevelIndex = 0;

// updateLevelUI();
// generateQuestion();
menu();

function nextLevel() {
    levelResults.push({ level: currentLevel, score: rightAnswer });

    currentLevel++;

    if (currentLevel >= allLevels.length) {
        currentLevel = 0;
    }

    if (currentLevel === startLevelIndex) {
        showFinalResult();
        return false;
    }

    currentLevels = allLevels[currentLevel];
    remainingWords = [...currentLevels];

    count = 0;
    rightAnswer = 0;
    updateCounter();
    document.getElementById("right-answer-count").textContent = rightAnswer;

    updateLevelUI();

    return true;
}

// генерирует главное слово из массива
function generateQuestion() {
    let mainword = document.getElementById("main-word");

    if (remainingWords.length === 0) {
        remainingWords = [...currentLevels];
    }

    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    const correctWordObj = remainingWords[randomIndex];

    remainingWords.splice(randomIndex, 1);

    mainword.innerHTML = correctWordObj.en;

    const options = [
        document.getElementById("word1"),
        document.getElementById("word2"),
        document.getElementById("word3"),
        document.getElementById("word4")
    ];

    correctWord = correctWordObj;

    const correctIndex = Math.floor(Math.random() * options.length);

    let used = [correctWord.nl];

    options.forEach((btn, i) => {
        if (i === correctIndex) {
            btn.innerText = correctWord.nl;
        } else {
            let randomWrong;

            do {
                const rand = Math.floor(Math.random() * currentLevels.length);
                randomWrong = currentLevels[rand].nl;
            } while (used.includes(randomWrong));

            used.push(randomWrong);
            btn.innerText = randomWrong;
        }
    });
};
//если больше 10 слов отвечено, попап некст
function checklevels(){
    if (count >= 10){
        clearTimeout(popupTimer);

        setTimeout(() => {
            nextPopup();
        }, 500);
    } else {
        generateQuestion();
    }
}

function nextPopup() {
    isLocked = false;
    const popup = document.getElementById("popup");

    popup.innerHTML = `
        <div class="title">Good job, ${rightAnswer}/10 correct</div>
        <div class="buttons">
            <button class="next">Next level</button>
            <button class="result">Result</button>
        </div>
    `;

    popup.classList.add("finishlevel");
    popup.classList.remove("correct", "wrong", "final");

    showOverlay();
    openPopup();

    popup.querySelector(".next").onclick = () => {
        hideOverlay();
        closePopup();

        const hasNext = nextLevel();

        if (!hasNext) {
            return;
        }

        isLocked = false;
        generateQuestion();
    };

    popup.querySelector(".result").onclick = () => {
        if (!levelResults.find(r => r.level === currentLevel)) {
            levelResults.push({ level: currentLevel, score: rightAnswer });
        }

        hideOverlay();
        closePopup();
        showFinalResult();
    };
}

//очистка 
function resetStats() {
    count = 0;
    rightAnswer = 0;

    updateCounter();
    document.getElementById("right-answer-count").textContent = rightAnswer;
}
//открытие закрытие всплывающего окна
function openPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add('show');
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove('show');
}

//обновление счетчика на екране
function updateCounter() {
    let current = document.getElementById("current");
    current.textContent = count;
}

function updateRightAnswer(){
    rightAnswer++;
    totalRightAnswers++;
    document.getElementById("right-answer-count").textContent = rightAnswer;
}

function autoClosePopup() {
    clearTimeout(popupTimer);
    popupTimer = setTimeout(closePopup, 550);
}

//проверка на правильность ответа
["btn1", "btn2", "btn3", "btn4"].forEach((id, i) => {
    document.getElementById(id).addEventListener("click", () => {

        if (isLocked) return;
        isLocked = true;

        totalAnswers++;

        const btnText = document.getElementById(`word${i + 1}`).innerText;
        let popup = document.getElementById("popup");

        if (btnText === correctWord.nl){
            popup.innerHTML = "Correct!";
            popup.classList.add('correct');
            popup.classList.remove('wrong', 'finishlevel', 'final');

            count++;
            updateCounter();
            updateRightAnswer();
        } else {
            popup.innerHTML = "Not correct!!";
            popup.classList.add('wrong');
            popup.classList.remove('correct', 'finishlevel', 'final');

            count++;
            updateCounter();
        }

        openPopup();

        if (count >= 10) {
            checklevels();
        } else {
            autoClosePopup();
            showOverlay();

            setTimeout(hideOverlay, 300);

            setTimeout(() => {
                generateQuestion();
                isLocked = false;
            }, 550);
        }
    });
});

//затемнение
function showOverlay() {
    document.getElementById("overlay").classList.add("show");
}

function hideOverlay() {
    document.getElementById("overlay").classList.remove("show");
}

function showFinalResult() {
    const popup = document.getElementById("popup");

    popup.innerHTML = `
    <div class="title">Game completed!</div>

    <div class="results">
        ${levelResults.filter(r => r && getLevelName(r.level)).map(r => `
            <div class="result-row">
                <div class="level-name">${getLevelName(r.level)}</div>
                <div class="level-score">${r.score}/10</div>
            </div>
        `).join("")}
    </div>

    <div class="total">
        Total: ${totalRightAnswers}/${totalAnswers}
    </div>

    <div class="buttons">
        <button class="menu">Menu</button>
    </div>
`;

    popup.classList.add("finishlevel");
    popup.classList.add("final");
    popup.classList.remove("correct", "wrong", "finishlevel");

    showOverlay();
    openPopup();

    popup.querySelector(".menu").addEventListener("click", () => {
        location.reload();
    });
}

function getLevelName(index) {
    return levelNames[index];
}

function updateLevelUI() {
    document.getElementById("level-name").textContent = levelNames[currentLevel];
    document.getElementById("level-number").textContent = `Level ${currentLevel + 1}`;
}


function menu() {
    const container = document.getElementById("level-buttons");

    levelNames.forEach((name, index) => {
        const btn = document.createElement("button");
        btn.innerText = `Level ${index + 1} - ${name}`;

        btn.addEventListener("click", () => startLevel(index));

        container.appendChild(btn);
    });
}

function startLevel(levelIndex) {
    currentLevel = levelIndex;
    startLevelIndex=levelIndex;

    currentLevels = allLevels[currentLevel];
    remainingWords = [...currentLevels];

    // сброс
    count = 0;
    rightAnswer = 0;
    totalAnswers = 0;
    totalRightAnswers = 0;
    levelResults = [];

    updateCounter();
    document.getElementById("right-answer-count").textContent = 0;

    updateLevelUI();

    // скрыть меню, показать игру
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    generateQuestion();
}