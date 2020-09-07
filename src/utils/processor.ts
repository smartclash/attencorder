import filter from "lodash/filter";

export const removeDuplicateEntries = (array: any) => {
  let check = new Set();
  return array.filter((obj: any) => !check.has(obj[0]) && check.add(obj[0]));
};

export const cleanStudentsArray = (rawData: []): [] => {
  let students: [] = [];
  rawData.forEach((obj: { data: never }) => {
    const arr = obj.data;
    students.push(arr);
  });

  return students;
};

export const extractStudents = (students: [], term: string) => {
  return filter(students, (data: [string, string, string]) => {
    const [, status] = data;
    return status === term;
  });
};
