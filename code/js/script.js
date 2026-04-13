
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



let count = 0;
let correctWord;

generateQuestion();

function generateQuestion() {
    console.log("works");
// генерирует главное слово из массива
let mainword = document.getElementById("main-word"); 
const randomIndex = Math.floor(Math.random() * animals.length);
const randomWord = animals[randomIndex].en;
mainword.innerHTML = randomWord;


// генерирует варианты
const options = [
    document.getElementById("word1"),
    document.getElementById("word2"),
    document.getElementById("word3"),
    document.getElementById("word4")
]; 

// берет перевод слова
correctWord = animals.find(a => a.en === randomWord);

const correctIndex = Math.floor(Math.random() * options.length);

// кнопки
options.forEach((btn, i) => {

    if (i === correctIndex) {
        btn.innerText = correctWord.nl;
    } else {
        let randomWrong;

        do {
            const rand = Math.floor(Math.random() * animals.length);
            randomWrong = animals[rand].nl;
        } while (randomWrong === correctWord.nl);

        btn.innerText = randomWrong;
    }

});

};

function checklevels(){
    if (count > 10){
        let popup = document.getElementById("popup");
            popup.innerHTML = "WORKS!";
            popup.classList.add('correct');
            popup.classList.remove('wrong');
            openPopup();
    }
    else {
        generateQuestion();
    }
};

function openPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add('show');
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove('show');
}

function updateCounter() {
    let current = document.getElementById("current");
    current.textContent = count;
}

function autoClosePopup() {
    setTimeout(closePopup, 3000);
}


["btn1", "btn2", "btn3", "btn4"].forEach((id, i) => {
    document.getElementById(id).addEventListener("click", () => {
        const btnText = document.getElementById(`word${i + 1}`).innerText;
        if (btnText === correctWord.nl){
            let popup = document.getElementById("popup");
            popup.innerHTML = "Correct!";
            popup.classList.add('correct');
            popup.classList.remove('wrong');
            openPopup();
            count++;
            checklevels();
            autoClosePopup();
            updateCounter();
        }
        else {
            let popup = document.getElementById("popup");
            popup.innerHTML = "Not correct!!";
            popup.classList.add('wrong');
            popup.classList.remove('correct');
            openPopup();
            count++;
            checklevels();
            autoClosePopup();
            updateCounter();
            
        }

    });

    
});









