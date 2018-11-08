function isEven(num){

if(num == 0){return true;}
if(num == 1){return false;}
if(num < 0){return "число меньше 0";}
return isEven(num-2);

}

isEven(0);
//isEven(50);
//isEven(750);
//isEven(-1);
