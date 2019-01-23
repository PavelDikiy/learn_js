/*Дано дерево. Найти сумму всех вершин.*/

var tree = {
	valueNode: 3,
	next: [{
				valueNode: 1,
				next: null
			},
			{
				valueNode: 3,
				next: null
			},
			{
				valueNode: 2,
				next: null
			},
			{
				valueNode: 2,
				next: [
					{
						valueNode: 1,
						next: null
					},
					{
						valueNode: 5,
						next: null
					}
				]
			}]
};
var sum = 0;
function sumNodeValue(obj){
  sum += obj.valueNode;
  if(obj.next){
      for (let i = 0; i < obj.next.length; i++){
        sumNodeValue(obj.next[i]);
      }
  }
  return sum;
};
sumNodeValue(tree);
