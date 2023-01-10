let cards = document.querySelectorAll('.Memory-Card');
let scores = document.getElementById("NuScor");

let hosFlippedCard = false;
let lockBoord = false;
let FirstCard , SecandCard;
let Score = 0;

function flipCard()
{
    if(lockBoord)
    return;
    if(this === FirstCard)
    return;

    this.classList.add('flip');
    if(!hosFlippedCard)
    {
        hosFlippedCard = true;
        FirstCard = this;
    }else{
        hosFlippedCard = false;
        SecandCard = this;
        // console.log(FirstCard.dataset.framework);
        // console.log(SecandCard.dataset.framework);
        checkMatch();
    }
}
function checkMatch()
{
    if(FirstCard.dataset.framework ===  SecandCard.dataset.framework)
        {
            Score++;
            disablCards()
            console.log(Score);
           
           
        }else{
            unFilpCards () 
            Score--
            if (Score == -5)
            Score = 0;
        }
        scores.innerText = Score;
        return Score ;
}

function disablCards()
{
    FirstCard. removeEventListener('clack', flipCard);
    SecandCard. removeEventListener('clack', flipCard);
    setTimeout( ()=>{
        FirstCard.style.background = "green";
        SecandCard.style.background = "green";
    },1500);
}
function unFilpCards ()
{
    lockBoord = true;
    setTimeout( ()=>{
        FirstCard.classList.remove('flip');
        SecandCard.classList.remove('flip');
        lockBoord = false;
    },1500);
}
(function shuffle()
{
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random()*12);
        card.style.order = randomOrder;
    })
})()
console.log(Score);

cards.forEach(card => card.addEventListener('click', flipCard))
