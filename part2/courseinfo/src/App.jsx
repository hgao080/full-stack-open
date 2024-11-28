const Header = ({text}) => {
  return (
    <header>
      <h2>{text}</h2>
    </header>
  );
};

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part part={part} id={part.id}></Part>
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name}></Header>
      <Content parts={course.parts}></Content>
      <p><b>total of {course.parts.reduce((total, obj) => {
        return total + obj.exercises; 
        }, 0)} exercises</b></p>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => (
        <Course course={course}></Course>
      ))}
    </div>
  )
}

export default App
