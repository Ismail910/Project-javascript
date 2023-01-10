// Page Element

// containers elements
var front = document.getElementsByClassName("front")[0];
var back = document.getElementsByClassName("back")[0];
var card = document.querySelector('.card');
var studyFace = document.getElementsByClassName("study-face")[0];
var spellFace = document.getElementsByClassName("spelling-face")[0];
var cardBottom = document.getElementsByClassName("card-bottom")[0];


// word detiles elements
var word = document.getElementsByClassName("word")[0];
var userWord = document.getElementsByClassName("user_input")[0];
var wordChar = document.getElementsByClassName("word_char")[0];

var meaning = document.getElementsByClassName("meaning")[0];
var example = document.getElementsByClassName("example")[0];
var picture = document.getElementsByClassName("picture")[0];

// audios elements
var wordAudio = document.getElementsByClassName("word-audio")[0];
var correctAnswer = document.getElementsByClassName("correct-answer")[0];
var correctAnswerWave = document.getElementsByClassName("correct-answer-wave")[0];
var wrongAnswer = document.getElementsByClassName("wrong-answer")[0];
var wrongAnsDis = document.getElementsByClassName("wrong-answer-dispointed")[0];

var clickAudio = document.getElementsByClassName("click-audio")[0];



var succTry = document.getElementsByClassName("succ_try")[0];
var failTry = document.getElementsByClassName("fail_try")[0];
var numOfSucc = document.getElementsByClassName("num_of_succ")[0];
var numOfFail = document.getElementsByClassName("num_of_fail")[0];


// buttons
var spellBottom = document.getElementById('spell-bottom');
var submitButton = document.getElementsByClassName("submit-button")[0];
var playButton = document.getElementsByClassName("play-button")[0];
var pauseButton = document.getElementsByClassName("puase-button")[0];
var playButtonSepll = document.getElementsByClassName('play-button-spell')[0];
var repateButton = document.getElementsByClassName('repate_button')[0];




let succes = 0;
let fails = 0


// toggle between front and back

function toggle()
{
	card.classList.toggle('is-flipped')
	clickAudio.play()
}


// toggle between spelling mode and study word mode

function spellToggle()
{
	clickAudio.play()
	if(spellBottom.value === "Spelling")
	{
		studyFace.style.opacity = "0"
		spellFace.style.opacity = "1"
		spellFace.style.visibility = "visible"
		spellBottom.value= "Study"
	}
	else if(spellBottom.value === "Study")
	{
		studyFace.style.opacity = "1"
		spellFace.style.opacity = "0"
		spellFace.style.visibility = "hidden"
		spellBottom.value= "Spelling"
	}

}


// play audio

function playAudio(elem)
{
	if(wordAudio.paused)
	{
		wordAudio.play();
		elem.innerHTML = 
		`	<g>
				<path d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,62C15.432,62,2,48.568,2,32
				C2,15.432,15.432,2,32,2c16.568,0,30,13.432,30,30C62,48.568,48.568,62,32,62z M27,40h2V24h-2V40z M35,40h2V24h-2V40z"/>
			</g>
		`
	
	}
	else
	{
		wordAudio.pause();
		elem.innerHTML = 
		`
			<g>
				<path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
					c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
					C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
				<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
					S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
			</g>
		 `

	}

	wordAudio.addEventListener("ended",function () {

		elem.innerHTML = 
		`
			<g>
				<path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
					c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
					C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
				<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
					S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
			</g>
		`
	
	}
	)	

}



// repeate button
var status = 0;
function audoPlay()
{
	
	if(status == 0)
	{
		wordAudio.loop = true
		repateButton.classList.add("repate_button_active")
		status = 1
	}
	else
	{
		wordAudio.loop = false
		repateButton.classList.remove("repate_button_active")
		status = 0
	}

	
}



// the main function to check the word 
function checkWord(){
	// check the word if right or wrong

	if(userWord.value == "" || userWord.value.length < word.innerHTML.length || userWord.value.length > word.innerHTML.length)
		return

	
	if (userWord.value === word.innerHTML){

		wordChar.innerHTML = ""

		addTry("succ")

		userWord.style.backgroundColor = "#20b02f"
		userWord.style.color = "white"
		submitButton.style.color= "white"
		numOfSucc.style.backgroundColor = "#20b02f"
		numOfSucc.style.color = "white"
		checkChar()

		wordChar.style.opacity = "1"

		if(succTry.innerHTML == 1 && failTry.innerHTML != 3)
			correctAnswerWave.play();

		correctAnswer.play()
		
	}else{

		wordChar.innerHTML = ""
		addTry("fail")

		userWord.style.backgroundColor = "#d63031"
		userWord.style.color = "white"

		numOfFail.style.backgroundColor = "#d63031"
		numOfFail.style.color = "white"

		checkChar()
		wordChar.style.opacity = "0"
		if(failTry.innerHTML == 3)
		{
			wordChar.style.opacity = "1"
			wrongAnsDis.play()
		}else
		{
			wrongAnswer.play()
		}
		
	}

	
}


// changing the number of the user's tries

function addTry(status)
{


	if(status === "succ" && succTry.innerHTML != 1)
	{
		succes++
		succTry.innerHTML = succes
	}
	else if(status === "fail" && failTry.innerHTML != 3)
	{
		fails++
		failTry.innerHTML = fails
	}
}

addTry();


function checkChar()
{
	let wordCharArray = [];
	let userWordChar = [];


	for(let i = 0; i < word.innerHTML.length; i++)
	{
		wordCharArray.push(word.innerHTML[i])
	}

	for(let i = 0; i < userWord.value.length; i++)
	{

		userWordChar.push(userWord.value[i])
	}

	
	for(let i = 0; i < wordCharArray.length; i++)
	{
		const char = document.createElement("span");
		char.innerText = userWordChar[i];
		char.classList.add("char")
		wordChar.appendChild(char);

		console.log(wordCharArray[i])
		console.log(userWordChar[i])

		if(wordCharArray[i] === userWordChar[i])
		{
			char.classList.add("right-char")
		}
		else
		{
			char.classList.add("wrong-char")

		}

	}
	

}

function resetSpell()
{
	wordChar.innerHTML = ""
	userWord.value = ""

	userWord.style.backgroundColor = "white"
	userWord.style.color = "#335f78"
	numOfSucc.style.backgroundColor = "white"
	numOfSucc.style.color = "#335f78"
	numOfFail.style.backgroundColor = "white"
	numOfFail.style.color = "#335f78"
	wordChar.style.opacity = "0"
	succTry.innerHTML = 0
	failTry.innerHTML = 0

}



var wordDetiles;
var pointer = 0;

function getNextWord()
{
	clickAudio.play()
	front.style.opacity = "0"
	resetSpell()

	toggle()
	
	if(pointer != 9)
		pointer++

	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange=function()
	{
		if(this.status== 200 && this.readyState == 4)
		{
			wordDetiles=JSON.parse(this.responseText);
			word.innerHTML = wordDetiles[pointer].word
			meaning.innerHTML = wordDetiles[pointer].meaning
			example.innerHTML = wordDetiles[pointer].example

			picture.src = `../images/${wordDetiles[pointer].word}.jpeg`
			wordAudio.src = `../audio/${wordDetiles[pointer].word}.mp3`

		}
	}
	xhttp.open("GET","../json/words.json",true);
	xhttp.send();
	setTimeout(()=> {
		front.style.opacity = "1"
	}, 1000)
	
}

function getPrevWord()
{
	clickAudio.play()
	front.style.opacity = "0"
	resetSpell()
	
	toggle()

	if(pointer != 0)
		pointer--

	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange=function()
	{
		if(this.status== 200 && this.readyState == 4)
		{
			wordDetiles=JSON.parse(this.responseText);
			word.innerHTML = wordDetiles[pointer].word
			meaning.innerHTML = wordDetiles[pointer].meaning
			example.innerHTML = wordDetiles[pointer].example

			picture.src = `../images/${wordDetiles[pointer].word}.jpeg`
			wordAudio.src = `../audio/${wordDetiles[pointer].word}.mp3`

		}
	}
	
	xhttp.open("GET","../json/words.json",true);
	xhttp.send();
	setTimeout(()=> {
		front.style.opacity = "1"
	}, 1000)
}
