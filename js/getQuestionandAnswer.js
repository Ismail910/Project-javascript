var dataAfterConvert;
var id=1,idputans=10,idque=20;
var ansobj;
function drag(ansget) {
    ansobj=ansget;
  }
function allowDrop(ev) {
ev.preventDefault();
}
function DropElement(elem){
    var x=document.getElementById(elem);
    x.appendChild=(ansobj);
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
                console.log(dataAfterConvert[i]['level']);
                if(dataAfterConvert[i]['level']==sessionStorage.getItem('currentlevel'))
                {
                   // document.getElementById("head")=dataAfterConvert[i]["name"];
                   for(var j=0;j<dataAfterConvert[i]["answers"].length;j++)
                   {
                    //div contains answers to drag in correct answer filed
                    const para = document.createElement('p');
                    const node = document.createTextNode(dataAfterConvert[i]['answers'][j].answer);
                    para.id=id++;
                    para.appendChild(node);
                    document.getElementById("head").appendChild(para);
                    para.draggable=true;
                    para.ondragstart=drag(para.textContent);
                    
                    //field to show questions
                    const paraque = document.createElement('p');
                    const nodeque = document.createTextNode(dataAfterConvert[i]['questions'][j].question);
                    paraque.id=idque++;
                    paraque.appendChild(nodeque);
                    document.getElementById("Quiz").appendChild(paraque);
                    //field to drop answer
                    const paraans = document.createElement('div');
                    const nodeans = document.createTextNode("");
                    paraans.id=idputans++;
                    paraans.style.width="250px";
                    paraans.style.height="40px";
                    paraans.appendChild(nodeans);
                    document.getElementById("answers").appendChild(paraans);
                    paraans.ondragover=event.preventDefault();
                    paraans.ondrop=DropElement(paraans.id);   
                   }
                }
            }  

        }
    }

    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();

}
getData();