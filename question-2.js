const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const passedStudents = students.filter(function (student) {
  return student.score > 50;
});

const updatedStudents = passedStudents.map(function (student) {
  return {
    name: student.name,
    score: student.score * 1.1,
  };
});

const totalScore = updatedStudents.reduce(function (sum, student) {
  return sum + student.score;
}, 0);

console.log(`Total score is ${totalScore}`);
