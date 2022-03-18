let num = Math.floor(Math.random() * 10);

let numGamer;
let a = 1;

numGamer = +prompt('число', '');

while (a != 0){
   if (numGamer != num){
    numGamer = +prompt('неправильно, еще раз введи число', '');
   }else{
       a--;
   }


}
alert('Правильно');