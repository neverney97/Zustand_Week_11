import React, { use, useState } from 'react'
import Form from './components/form'
import List from './components/userlist'
import useUsersStore from './store/usersStore'


const App = () => {

  const {addNewUser, users} = useUsersStore()
  // const [users, setUsers] = useState([
  //   {
  //     id: 1, name: 'Emma', email: 'nani@example.com'
  //   },
  //   {
  //     id: 2, name: 'Olivia', email: 'oli@example.com'
  //   },
  //   {
  //     id: 3, name: 'Ava', email: 'ava@example.com'
  //   }
  // ]);

     console.log(users);

    //  const addNewUser = (newUser) => {
    //     setUsers([...users, {...newUser, id: uuidv4()}]);
    // };

  // const editUser = (userId, newDetails) => {
  //   const updatedUsers = users.map(user => {
  //     if (user.id === userId) {
  //       return { ...user, ...newDetails };
  //     } else {
  //       return user;
  //     }
  //   });
  //   setUsers(updatedUsers);
  // };

  // const deleteUser = (userId) => {
  //   let filteredArray = users.filter((user) => {
  //     if (user.id !== userId ){
  //       return user;
  //     }
  //   })
  // //   setUsers(filteredArray);
  // }

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <Form addUser={addNewUser} />
      <List usersList={users}/>
    </div>
  )
}

export default App
