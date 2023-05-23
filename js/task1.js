// Задание 1
console.log('Задание 1');
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

//JSON
{/* <list>
	<student>
		<name lang="en">
		<first>Ivan</first>
		<second>Ivanov</second>
		</name>
		<age>35</age>
		<prof>teacher</prof>
	</student>
	<student>
		<name lang="ru">
		<first>Петр</first>
		<second>Петров</second>
		</name>
		<age>58</age>
		<prof>driver</prof>
	</student>
</list> */}

//JS-объект
// {
// 	list: [
// 		{ name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
// 		{ name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
// 	]
// }


//? Решение

const xmlStudentsList = `
<list>
	<student>
		<name lang="en">
		<first>Ivan</first>
		<second>Ivanov</second>
		</name>
		<age>35</age>
		<prof>teacher</prof>
	</student>
	<student>
		<name lang="ru">
		<first>Петр</first>
		<second>Петров</second>
		</name>
		<age>58</age>
		<prof>driver</prof>
	</student>
</list>
`;

const xmlDocument = new DOMParser().parseFromString(xmlStudentsList, "text/xml");

const list = [];
const studentsList = xmlDocument.querySelectorAll("student");
console.log(list);
for (let student of studentsList) {
	list.push({
		name: `${student.querySelector('first').textContent}${student.querySelector('second').textContent}`,
		age: student.querySelector('age').textContent,
		prof: student.querySelector('prof').textContent,
		lang: student.querySelector('name').getAttribute('lang'),
	})
}

const objectStudentsList = {list}

console.log(objectStudentsList);