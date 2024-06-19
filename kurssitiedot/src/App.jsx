const Header = ({ course }) => (<h1>{course}</h1>)
const Content = ({ title, nro_exercises }) => (<p>{title} {nro_exercises}</p>)
const Total = ({ sum }) => (<p>Number of exercises {sum}</p>)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content title={part1} nro_exercises={exercises1} />
      <Content title={part2} nro_exercises={exercises2} />
      <Content title={part3} nro_exercises={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App