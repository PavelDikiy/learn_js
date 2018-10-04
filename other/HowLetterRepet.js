function HowLetterRepet (stringi){
  var objLit = {};

  if(typeof stringi != "string")return "Только строку!";

  for(var i = 0; i < stringi.length; i++){
    if(objLit[stringi[i]] == undefined){objLit[stringi[i]]=1;}
    else{objLit[stringi[i]]++;}
  }

  return objLit;

}

HowLetterRepet("djshfjodshjADEFfkldsjfidasjuf0 oidjasfokasdjDEEfdais0");
