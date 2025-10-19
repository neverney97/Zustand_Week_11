import React from 'react'
import Item from './item'
import useUsersStore from '../store/usersStore'

const List = () => {

    const users = useUsersStore((state) => state.users)


  return (
    <div>
        <h1 className='text-3xl font-semibold text-slate-800 text-center mb-6'>UserList</h1>
        {users.map((user) => (
            <Item key={user.id} user={user}/>
        )
        )}
    </div>
  )
}

export default List