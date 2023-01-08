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
                    //div contains answers to drag in correct answer filed
                    const para = document.createElement('p');
                    const node = document.createTextNode(dataAfterConvert[i]['answers'][j].answer);
                    para.appendChild(node);
                    para.id="ans"+id++;
                    para.style.border="2px black solid";
                    para.style.width="120px"
                    para.style.textAlign="center"
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    para.style.backgroundColor="#" +randomColor;
                    document.getElementById("head").appendChild(para);
                    para.draggable=true;
                   
                 
                    
                    //field to show questions
                    const paraque = document.createElement('p');
                    const nodeque = document.createTextNode(dataAfterConvert[i]['questions'][j].question);
                    paraque.id="que"+idque++;
                    paraque.style.border="2px black solid"
                    paraque.style.padding="20px"
                    //console.log(paraque.id)
                    paraque.appendChild(nodeque);
                    document.getElementById("Quiz").appendChild(paraque);

                    
                    //field to drop answer
                    const paraans = document.createElement('div');
                    const nodeans = document.createTextNode("");
                    paraans.id=idputans++;
                    paraans.style.width="150px";
                    paraans.style.border="2px black solid";
                    paraans.style.height="50px";
                    paraans.style.marginBottom="20px"
                    paraans.appendChild(nodeans);
                    document.getElementById("answers").appendChild(paraans);
                    paraans.ondragover=allowDrop(event);
                   }
                }
            }  
            
        }
    }

    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();

}
getData();

function checkanswer()
{
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
                        if(dataAfterConvert[i]['answers'][j].answer==document.getElementById(checkid).textContent)
                        {
                            document.getElementById(checkid).style.backgroundColor="green";
                           document.getElementById("correctanswer").play();
                        }
                        else
                        {
                            document.getElementById(checkid).style.backgroundColor="red";
                            document.getElementById("wronganswer").play();
                        }
                        checkid++;
                    }
                    
                }
            }
        }
    }
    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();
}