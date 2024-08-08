const App = () => {


  return (
    <div>
      <header course={course} />
      <Content ... />
      <Total ... />
 </div>
  )
}


const App = () => {
  const course = 'Half Stack application development' 
  const parts = [
    {
      name: 'Fundmentals of React',
      exercies: 10
    },
    (
      name:  'Using props to pass data'
      exercies: 7
},
  {
    name: 'State of a component'
     exercies: 14
  }
  
},
]
 



  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercisees1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercisees1 + exercises2 + exercises3}</p>
    </div>

  )
}


export default App