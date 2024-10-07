export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (accumulator, currentStudent) => accumulator + currentStudent.id,
      0,
    );
  }
  return 0;
}
