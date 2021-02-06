import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const appTask = () => {
  const [usersData, setUsersData] = useState([])

  const onchange = () => {

  }

  useEffect(async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
  },[usersData])

  return (
    <div>
      <input type="text" placeholder="search by name" onChange={onchange}/>
      <ul>
        <li>UserData
          {usersData.map(user =>(
            <ul key={user.id}>
              <li>Name:{user.name}</li>
              <li>email:{user.email}</li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  )
}

