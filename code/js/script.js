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
//переключение между  масивами уровней
const allLevels = [ animals, food, colors, body, clothes, house, transport, weather, school, verbs]

let currentLevel = 0;

let currentLevels = allLevels[currentLevel];

function nextLevel() {
    levelResults.push(rightAnswer);

    currentLevel++;

    if (currentLevel >= allLevels.length) {
        showFinalResult();
        return false;
    }

    currentLevels = allLevels[currentLevel];

    count = 0;
    rightAnswer = 0;
    updateCounter();
    document.getElementById("right-answer-count").textContent = rightAnswer;

    return true;
}

//счетчик слов
let count = 0;
//правильное слово
let correctWord;

generateQuestion();

// генерирует главное слово из массива
function generateQuestion() {

    let mainword = document.getElementById("main-word"); 
    const randomIndex = Math.floor(Math.random() * currentLevels.length);
    const correctWordObj = currentLevels[randomIndex];
    const randomWord = correctWordObj.en;
    mainword.innerHTML = randomWord;

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

function nextPopup(){

    isLocked = false;
    const popup = document.getElementById("popup");
            popup.innerHTML = `
                <div class="title">Good job, ${rightAnswer}/10 correct </div>
                <div class="buttons">
                    <button class="next">Next level</button>
                    <button class="menu">Menu</button>
                </div>
            `;
            popup.classList.add('finishlevel');
            popup.classList.remove('correct', 'wrong');

            showOverlay();
            openPopup();
            

            popup.querySelector(".next").addEventListener("click", () => {
                levelResults.push(rightAnswer);

                resetStats();

                const hasNext = nextLevel();
                if (!hasNext) return;

                hideOverlay();
                closePopup();

                isLocked = false;

                generateQuestion();
            });

            popup.querySelector(".menu").addEventListener("click", () => {
                location.reload();
            });
};
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
//cчетчик правильных
let rightAnswer = 0;
function updateRightAnswer(){
    rightAnswer++;
    document.getElementById("right-answer-count").textContent = rightAnswer;
};

//время через сколько закроеться всплывающие окно
let popupTimer;
function autoClosePopup() {
    clearTimeout(popupTimer);
    popupTimer = setTimeout(closePopup, 550);
}
//от прокликивание
let isLocked = false;
//проверка на правильность ответа
["btn1", "btn2", "btn3", "btn4"].forEach((id, i) => {
    document.getElementById(id).addEventListener("click", () => {

        if (isLocked) return;
        isLocked = true;

        const btnText = document.getElementById(`word${i + 1}`).innerText;
        let popup = document.getElementById("popup");

        if (btnText === correctWord.nl){
            popup.innerHTML = "Correct!";
            popup.classList.add('correct');
            popup.classList.remove('wrong', 'finishlevel');

            count++;
            updateCounter();
            updateRightAnswer();
        } else {
            popup.innerHTML = "Not correct!!";
            popup.classList.add('wrong');
            popup.classList.remove('correct', 'finishlevel');

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

//пройденные уровни
let levelsCompleted = 0;

function showFinalResult() {
    const popup = document.getElementById("popup");

    popup.innerHTML = `
        <div class="title">Game completed!</div>
        <div class="result">
            Correct answers: ${rightAnswer}
        </div>
        <div class="buttons">
            <button class="menu">Restart</button>
        </div>
    `;

    popup.classList.add("finishlevel");
    popup.classList.remove("correct", "wrong");

    showOverlay();
    openPopup();

    popup.querySelector(".menu").addEventListener("click", () => {
        location.reload();
    });
}

//подсчет баллов за уровень
let totalRightAnswers = 0;

function updateRightAnswer(){
    rightAnswer++;
    totalRightAnswers++;
    document.getElementById("right-answer-count").textContent = rightAnswer;
}

function resetStats() {
    count = 0;
    rightAnswer = 0;

    updateCounter();
    document.getElementById("right-answer-count").textContent = rightAnswer;
}

let levelResults = [];
function showFinalResult() {
    const popup = document.getElementById("popup");

    popup.innerHTML = `
        <div class="title">Game completed!</div>

        <div class="results">
            ${allLevels.map((_, i) => `
                <div class="result-row">
                    <div class="level-name">${getLevelName(i)}</div>
                    <div class="level-score">${levelResults[i]}/10</div>
                </div>
            `).join("")}
        </div>

        <div class="total">
            Total: ${totalRightAnswers}/100
        </div>

        <div class="buttons">
            <button class="menu">Restart</button>
        </div>
    `;

    popup.classList.add("finishlevel");
    popup.classList.remove("correct", "wrong");

    showOverlay();
    openPopup();

    popup.querySelector(".menu").addEventListener("click", () => {
        location.reload();
    });
}

function getLevelName(index) {
    const names = [
        "Animals", "Food", "Colors", "Body",
        "Clothes", "House", "Transport",
        "Weather", "School", "Verbs"
    ];
    return names[index];
}