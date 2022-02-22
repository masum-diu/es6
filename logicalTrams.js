function GPA(marks) {
  if (marks > 80) {
    console.log("Your Result Is A+");
  } else if (marks > 75) {
    console.log("Your Result Is A");
  }
  return "GPA";
}

const totalMarks = GPA(81);
console.log(totalMarks);
