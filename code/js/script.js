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
const correctAnimal = animals.find(a => a.en === randomWord);

const correctIndex = Math.floor(Math.random() * options.length);

// кнопки
options.forEach((btn, i) => {

    if (i === correctIndex) {
        btn.innerText = correctAnimal.nl;
    } else {
        let randomWrong;

        do {
            const rand = Math.floor(Math.random() * animals.length);
            randomWrong = animals[rand].nl;
        } while (randomWrong === correctAnimal.nl);

        btn.innerText = randomWrong;
    }

});


document.getElementById('btn1').addEventListener('click', function() {
    alert('button1');
  });
document.getElementById('btn2').addEventListener('click', function() {
    alert('button2');
  })
document.getElementById('btn3').addEventListener('click', function() {
    alert('button3');
  })
document.getElementById('btn4').addEventListener('click', function() {
    alert('button4');
  })


