
function getElementById(id){
    
    
const element = document.getElementById(id)
 return element;
    
}



function getInnerTextById(id){

 const myInnerText = document.getElementById(id).innerText;
 return myInnerText;
 

}


function setInnerTextById(id,value){
    document.getElementById(id).innerText=value;
    
}
