import React, { useState, useEffect } from 'react'
import JobTable from '../../components/JobTable'
import { getAllUser, deleteUser } from '../../api/api'

export default function JobPage(props) {
  const [user, setUser] = useState([])

  const fetchUser = async () => {
    let result = await getAllUser()
    console.log(result)
    setUser(result.data)
  }

  useEffect(() => {
      fetchUser()
  }, [])

  const removeUser = async (id) => {
   let check = window.confirm("คุณต้องการลบหรือไม่ ?")
    if(check === true) {
      let result = await deleteUser(id)
      console.log(result)
      if (result.data.status === "success") {
        fetchUser()
      }
    }
  }

  return (
    <div>
      <JobTable user={user} delete={removeUser}/>
    </div>
  )
}
