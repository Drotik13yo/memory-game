//menu
 
function menu(){

    const level = document.getElementById("level");

    level.innerHTML = `
        <div class="title">Good job, ${rightAnswer}/10 correct</div>
        <div class="buttons">
            <button class="next">Next level</button>
            <button class="result">Result</button>
        </div>
    `;
}
