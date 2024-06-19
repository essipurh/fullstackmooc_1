const Header = ({ course }) => (<h1>{course}</h1>)
const Content = ({ content }) => {
  return (
    <>
      <Part title={content.part1} nro_exercises={content.exercises1} />
      <Part title={content.part2} nro_exercises={content.exercises2} />
      <Part title={content.part3} nro_exercises={content.exercises2} />
    </>
  )
}
const Part = ({ title, nro_exercises }) => (<p>{title} {nro_exercises}</p>)
const Total = ({ sum }) => (<p>Number of exercises {sum}</p>)

const App = () => {
  const data = {
    course: 'Half Stack application development',
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header course={data.course} />
      <Content content={data} />
      <Total sum={data.exercises1 + data.exercises2 + data.exercises3} />
    </div>
  )
}

export default App