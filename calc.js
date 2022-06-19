const screen = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let exp="";

buttons.forEach((button) => {
    button.addEventListener('click',() => {
   try{
    if(button.id=="*")
   {
       screen.value+="x";
       exp+="*";
   }
   else if(button.id=="=")
   {
       console.log(exp);
       screen.value = eval(exp);
       exp = screen.value;
   }
   else if(button.id=="DEL")
   {
       screen.value=screen.value.slice(0,-1);
       exp=screen.value;
   }
   else if(button.id=="AC")
   {
       screen.value="";
       exp="";
   }
   else
   {
    screen.value += button.innerText;
    exp+=button.innerText;
   }}
   catch(err)
   {
       screen.value = "Syntax Error";
       exp="";
   }
})});

