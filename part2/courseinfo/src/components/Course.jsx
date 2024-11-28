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

  export default Course