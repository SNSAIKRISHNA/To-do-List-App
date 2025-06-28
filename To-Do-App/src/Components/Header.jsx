
export function Header(props) {
     const {todos } = props
     const todosLength = todos.length
     const isTasksPlural = todos.length != 1

     const taskortasks = isTasksPlural ? 'Tasks' : 'Task'
  return (
   <header>
     <h1 className="heading-style">TO-LIST-APP</h1>
     <br />
     <h1 className='text-gradient'>You Have {todosLength} open {taskortasks}.</h1>

   </header>
  )
}
