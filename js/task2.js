// Задание 2
console.log('Задание 2');
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

//XML
// {
// 	"list": [
// 		{
// 		"name": "Petr",
// 		"age": "20",
// 		"prof": "mechanic"
// 		},
// 		{
// 		"name": "Vova",
// 		"age": "60",
// 		"prof": "pilot"
// 		}
// 	]
// }

//JS-объект
// {
// 	list: [
// 		{ name: 'Petr', age: 20, prof: 'mechanic' },
// 		{ name: 'Vova', age: 60, prof: 'pilot' },
// 	]
// }


//? Решение
const jsonList = `
	{
		"list": [
			{
			"name": "Petr",
			"age": "20",
			"prof": "mechanic"
			},
			{
			"name": "Vova",
			"age": "60",
			"prof": "pilot"
			}
		]
	}
`;

const objectList = JSON.parse(jsonList);

console.log(objectList);