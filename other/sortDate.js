/*
Есть массив в котором лежат объекты с датами, отсортировать по датам.
[{date:"10.11.2012"},{date:"23.02.1998"},{date:"11.11.2012"}];
*/

var arDate = [{date:"10.11.2012"},{date:"23.02.1998"},{date:"11.11.2012"}];

function sortDate(arrayD){
    let newAr = arrayD.slice();

    for(let i = 0; i < newAr.length; i++){
		let dateFull = arrayD[i].date.split(".");
		arrayD[i].origDate = new Date(dateFull[2],dateFull[1],dateFull[0]);
    }

    newAr.sort(function(a,b){
        return a.origDate-b.origDate;
    });

    let result = newAr.map(function(item){
        return {date:item.date};
    });


    return result;
};

sortDate(arDate);
