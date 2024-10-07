/**
 * getListStudentIds - Returns an array of student IDs from a list of student objects.
 * @param {Array} students - Array of student objects.
 * @returns {Array} - Array of student IDs.
 */
const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  
  return students.map(student => student.id);
};

export default getListStudentIds;
