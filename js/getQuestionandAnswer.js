var dataAfterConvert;
var id=1,idputans=10,idque=20;
var ansobj;
// function drag(ansget) {
//     ansobj=ansget;
//     console.log(ansobj);
//   }
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var data = ev.dataTransfer.getData("text");
    console.log(data);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }
//   function DropElement(elem){
//     // var x=document.getElementById(elem);
//       elem.appendChild=(ansobj);
//       console.log(ansobj);
//       console.log(elem);
// }
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
                   for(var j=0;j<dataAfterConvert[i]["answers"].length;j++)
                   {
                    //div contains answers to drag in correct answer filed
                    const para = document.createElement('p');
                    const node = document.createTextNode(dataAfterConvert[i]['answers'][j].answer);
                    para.appendChild(node);
                    para.id="asd"+id++;
                    document.getElementById("head").appendChild(para);
                    para.draggable=true;
                   
                    console.log(ansobj)
                    console.log(document.getElementById(para.id));
                    
                    //field to show questions
                    const paraque = document.createElement('p');
                    const nodeque = document.createTextNode(dataAfterConvert[i]['questions'][j].question);
                    paraque.id=idque++;
                    //console.log(paraque.id)
                    paraque.appendChild(nodeque);
                    document.getElementById("Quiz").appendChild(paraque);

                    
                    //field to drop answer
                    // const paraans = document.createElement('div');
                    // const nodeans = document.createTextNode("");
                    // paraans.id=idputans++;
                    // paraans.style.width="250px";
                    // paraans.style.backgroundColor="red";
                    // paraans.style.height="40px";
                    // paraans.appendChild(nodeans);
                    // document.body.appendChild(paraans);
                    // //paraans.ondragover=allowDrop(event);
                    // paraans.ondrop=DropElement(paraans.id);   
                    // document.getElementById("answers").ondragover=event.preventDefault();
                    // document.getElementById("answers").ondrop=document.getElementById("answers").appendChild=(ansobj); 
                   }
                }
            }  

        }
    }

    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();

}
getData();

//document.getElementById("asd1").ondragstart=drag(document.getElementById("asd1"));