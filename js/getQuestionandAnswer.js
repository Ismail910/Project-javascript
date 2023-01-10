var dataAfterConvert;
var id=1,idputans=10,idque=1;

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById("drag").play();
   
    //var data = ev.dataTransfer.getData("text");
   // console.log(data);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   // console.log(data);
    ev.target.appendChild(document.getElementById(data));
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

function allowDrop(ev) {
ev.preventDefault();
}


function getData(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4)
        {
             dataAfterConvert=JSON.parse(this.responseText);
            //console.log(dataAfterConvert);
            var questions=[];
            for(var i=0;i<dataAfterConvert.length;i++)
            {
                //console.log(dataAfterConvert[i]['level']);
                if(dataAfterConvert[i]['level']==sessionStorage.getItem('currentlevel'))
                {
                   // document.getElementById("head")=dataAfterConvert[i]["name"];
                   document.getElementById("head").style.columnCount="4";
                   document.getElementById("head").style.columnFill="auto"
                   for(var j=0;j<dataAfterConvert[i]["answers"].length;j++)
                   {
                    questions.push(dataAfterConvert[i]['answers'][j].answer);
                    //div contains answers to drag in correct answer filed
                    
                   
                 

   
                    
                    //field to show questions
                    const paraque = document.createElement('p');
                    const nodeque = document.createTextNode(dataAfterConvert[i]['questions'][j].question);
                    paraque.id="que"+idque++;
                    paraque.style.border="2px gray solid"
                    paraque.style.padding="20px"
                    paraque.className="que"
                    //console.log(paraque.id)
                    paraque.appendChild(nodeque);
                    document.getElementById("Quiz").appendChild(paraque);

                    
                    //field to drop answer
                    const paraans = document.createElement('div');
                    const nodeans = document.createTextNode("");
                    paraans.id=idputans++;
                    paraans.className="answerdrop"
                    
                    paraans.appendChild(nodeans);
                    document.getElementById("answers").appendChild(paraans);
                    paraans.ondragover=allowDrop(event);
                   }
                }
            }  
            while(questions.length>0)
                {
                    var random1 = Math.floor(Math.random() * questions.length) ;
                    var choice1 = questions[random1];
                    //console.log(questions.length);
                    const para = document.createElement('p');
                    const node = document.createTextNode(choice1); 
                    para.appendChild(node);
                    para.id="ans"+id++;
                    para.style.border="none";
                    para.style.padding="6px";
                    para.style.borderRadius="7px";
                    para.style.width="120px";
                    //para.style.alignItems="center"
                    para.style.textAlign="center"
                    para.style.color="white"
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    para.style.backgroundColor="#" +randomColor;
                    if(para.style.backgroundColor==("white") || para.style.backgroundColor==("azure") || para.style.backgroundColor==("whitesmoke"))
                        {
                            console.log("sd");
                            para.style.backgroundColor="purple";
                        }

                    document.getElementById("head").appendChild(para);
                    para.draggable=true;
                    questions.splice(random1, 1);
                }
        }
    }

    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();

}
getData();

 function checkanswer()
{
    
    var checkid=10,countcorrect=0,countwrong=0;
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4)
        {
            
            dataAfterConvert=JSON.parse(this.responseText);
                for(var i=0;i<dataAfterConvert.length;i++)
                {
                    if(dataAfterConvert[i]['level']==sessionStorage.getItem('currentlevel'))
                    {
                        
                        for(var j=0;j<dataAfterConvert[i]["answers"].length;j++)
                        {
                            if(dataAfterConvert[i]['answers'][j].answer==document.getElementById(checkid).textContent)
                            {
                                document.getElementById(checkid).style.backgroundColor="green";
                                countcorrect++;
                               // document.getElementById("correctanswer").play();
                            }
                            else
                            {
                                document.getElementById(checkid).style.backgroundColor="red";
                                countwrong++;
                               // document.getElementById("wronganswer").play(); 
                                
                            }
                            checkid++;
                        }
                        if(countcorrect==dataAfterConvert[i]["answers"].length)
                        {
                            document.getElementById("correctanswer").play();
                        }
                        else
                        {
                            document.getElementById("wronganswer").play(); 
                        }
                       document.getElementById("conta").style.display="none";
                       document.getElementById("submit").style.display="none";
                       document.getElementById("continer").style.display="block"
                       document.getElementById("grade").innerText+=("  "+countcorrect+"/"+dataAfterConvert[i]["answers"].length)
                       document.getElementById("time").innerText+=(" "+((document.getElementById("timer").max-document.getElementById("timer").value)/60).toFixed(1)+"m");
                    }
                }
           
        }
    }
    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();
}

function changcolor()
{
    document.getElementById('startagain').style.backgroundColor='green' 
}
function back()
{
    document.getElementById("conta").style.display="flex";
    document.getElementById("submit").style.display="block";
    document.getElementById("continer").style.display="none";
    document.getElementById("grade").innerText="your grade =";
    document.getElementById("time").innerText="finish in time :";
    location.replace("template.html");
}
function backmyanswer()
{
    document.getElementById("conta").style.display="flex";
    document.getElementById("submit").style.display="block";
    document.getElementById("continer").style.display="none";
    document.getElementById("grade").innerText="your grade =";
    document.getElementById("time").innerText="finish in time :";
}

function backtolevel()
{
    document.getElementById("conta").style.display="flex";
    document.getElementById("submit").style.display="block";
    document.getElementById("continer").style.display="none";
    document.getElementById("grade").innerText="your grade =";
    document.getElementById("time").innerText="finish in time :";
    location.replace("index.html");
}
function getcorrectanswer()
{
    console.log("asd");
    document.getElementById("conta").style.display="flex";
    document.getElementById("submit").style.display="block";
    document.getElementById("continer").style.display="none";
    document.getElementById("grade").innerText="your grade =";
    document.getElementById("time").innerText="finish in time :";
    var checkid=10;
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4)
        {
            
            dataAfterConvert=JSON.parse(this.responseText);
                for(var i=0;i<dataAfterConvert.length;i++)
                {
                    if(dataAfterConvert[i]['level']==sessionStorage.getItem('currentlevel'))
                    {
                        
                        for(var j=0;j<dataAfterConvert[i]["answers"].length;j++)
                        {
                            document.getElementById(checkid).style.backgroundColor="gray";
                            document.getElementById(checkid).style.textAlign="center"
                            document.getElementById(checkid).textContent=  dataAfterConvert[i]['answers'][j].answer
                            checkid++;
                        }
                       
                    }
                }
           
        }
    }
    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();

   
   
}

function makeprogress()
{
    var p=document.getElementById("timer");
    const myInterval= setInterval(()=>{
        
    if(p.value<=0) 
    {
        clearInterval(myInterval);
        checkanswer();
    }
    else
    {
        p.value-=1;
    }
    },1000);
}