BEGIN;

  DROP TABLE IF EXISTS students, teacher, schedule, data
  CASCADE;

CREATE TABLE students
(
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  class_id INTEGER,
  FOREIGN KEY (class_id) REFERENCES class (class_id)
)

CREATE TABLE teacher
(
  teacher_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  class_id INTEGER,
  FOREIGN KEY (class_id) REFERENCES class (class_id)
)

CREATE TABLE class
(
  class_id SERIAL PRIMARY KEY,
  date DATE NOT NULL
)

CREATE TABLE data
(
  data_id SERIAL PRIMARY KEY,
  path_file VARCHAR(5000) NOT NULL,
  teacher_id INTEGER,
  FOREIGN KEY (teacher_id) REFERENCES class (teacher_id),
  class_id INTEGER,
  FOREIGN KEY (class_id) REFERENCES class (class_id)
)

COMMIT;

