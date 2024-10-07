/**
 * getStudentIdsSum - Returns the sum of all student IDs from a list of student objects.
 * @param {Array} students - Array of student objects.
 * @returns {Number} - Sum of student IDs.
 */
const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) {
    return 0;
  }
  
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
};

export default getStudentIdsSum;
