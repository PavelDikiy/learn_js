/*
Глубокое сравнение
Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
 Но иногда полезно было бы сравнить объекты по содержимому.
Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты,
 свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof.
 Если он выдаёт "object" для обеих величин, значит нужно делать глубокое сравнение.
 Примите во внимание одно дурацкое исключение, существующее по историческим причинам: typeof null тоже возвращает "object".
*/

function deepEqual(data1,data2){

	if(typeof data1 == "object" && typeof data2 == "object" && data1 != null && data2 !=null){

        var keys = Object.keys(data1);

        for (var i = 0; i < keys.length; i++){
            if(!data2[keys[i]]){return false;}
            else{
                return deepEqual(data1[keys[i]],data2[keys[i]]);
            }
        }
    }else{
        if(data1 === data2){
            return true;
        }
        return false;
    }

}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, 1));
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an2"}, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual("вывы", "вывы"));
