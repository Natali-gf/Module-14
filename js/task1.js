//? Solution

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