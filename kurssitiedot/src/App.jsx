const Header = ({ course }) => <h1>{course}</h1>
const Content = ({ content }) => {
  return (
    <>
    {content.map(part => 
      <Part  key={part.name} title={part.name} nro_exercises={part.exercises} />
    )}
    </>
  )
}
const Part = ({ title, nro_exercises }) => <p>{title} {nro_exercises}</p>
const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total sum={course.parts.reduce((ex, {exercises}) => ex + exercises, 0)} />
    </div>
  )
}

export default App
