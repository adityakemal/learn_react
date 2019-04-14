import React from 'react'

const Todos = ({todos,deleteTodo})=>{
  const todoList = todos.length ? (
    todos.map(tod=>{
      return (
        <ul className="list-group" key={tod.id}>
          <li className="list-group-item" >

            {tod.content}
            <button className="btn btn-primary float-right" onClick={()=>{deleteTodo(tod.id)}}> hapus </button>
          </li>

        </ul>
      )
    })

  ) : (
    <div>there is nothing here..</div>
  )
  return (
    <div>
    {todoList}
    </div>
  )
}

export default Todos
