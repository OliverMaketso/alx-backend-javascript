export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(value) {
    this._name = value;
  }

  // getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  // getter and settrr for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = value;
  }
}
