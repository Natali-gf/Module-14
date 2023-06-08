//? Solution

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