export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = 'N/A';

  if (Array.isArray(students)) {
    return students
      .filter(student => student.location === city)
      .map(student => {
        const grade = newGrades.find(grade => grade.studentId === student.id) || { grade: defaultGrade };
        
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: grade.grade,
        };
      });
  }
  return [];
}
