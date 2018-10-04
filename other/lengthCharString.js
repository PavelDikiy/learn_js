function countBs (stringi){
var count = 0;
if(typeof stringi != "string")return "Нужно задавать строку, Олень!";

return {

get: function(x){
for(var i = 0; i < stringi.length; i++){
    if(x==stringi[i]){
      count++;
    }
  }
return count;
}
       }


}
var StringLength = countBs("asdasdBfdfdBddsdsB");
console.log(StringLength.get("B"));
console.log(StringLength.get("a"));
