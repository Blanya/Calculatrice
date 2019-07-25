function affichage()
{  
     //console.log(this.value);
     let answer = document.getElementById("answer");
     answer.textContent=this.value;
}



let buttons = document.getElementsByTagName("button");
for(let i = 0; i < buttons.length ; i ++ ) 
{
buttons[i].addEventListener("click", affichage);
} 

let clear = document.getElementById("reset");
clear.addEventListener("click", reset);

