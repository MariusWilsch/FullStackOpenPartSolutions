const CourseName = ({ courseName }) => <h2>{courseName}</h2>;

const Content = ({ parts }) => {
  const content = parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
  return <div>{content}</div>;
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <strong>Number of exercises {total}</strong>;
};

const Course = ({ courses }) => {
  const courseLoop = courses.map((course) => (
    <div key={course.id}>
      <CourseName courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ));

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseLoop}
    </div>
  );
};

export default Course;
