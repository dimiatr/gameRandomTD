
let tds = document.querySelectorAll('.tds');
let usedIndex = [];

console.log(tds);

while (usedIndex.length < 10) {
    let randomIndex = getRandomInt(0, tds.length - 1);
    if (!usedIndex.includes(randomIndex)) {
        usedIndex.push(randomIndex);
    } else continue;
}

for (let el of usedIndex) {
    let elem = tds[el];
    elem.addEventListener('click', () => {
    	if (elem) {
            elem.classList.remove('bg-pink-500')
    		elem.classList.add('bg-black');
            elem.textContent = '♥';
    	}
    })
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}