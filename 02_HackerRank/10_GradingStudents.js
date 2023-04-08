// Dec 2022
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  const finalGrades = [];

  for (let grade of grades) {
    if (grade < 38) {
      finalGrades.push(grade);
      continue;
    }

    if (grade % 5 > 2) {
      finalGrades.push(grade + 5 - (grade % 5));
    } else finalGrades.push(grade);
  }
  return finalGrades;
}
