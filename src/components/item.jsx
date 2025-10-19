import { useState } from 'react';
import useUsersStore from '../store/usersStore';

const Item = ({user}) => {

    const {addNewUser, users} = useUsersStore()


   const [open, setOpen] = useState(false);
   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);

    

  const handleOpen = () => {
    setOpen(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
// Edit function to update user details
//   const handleEdit = () => {
//     const updatedDetails = {
//       name,
//       email
//     };
//     props.editUser(props.details.id, updatedDetails);
//     setOpen(false);
//   };

  // Delete function to remove user
// const handleDelete = () => {
//     props.deleteUser(props.details.id);
//     setOpen(false);
//   };

  return (
    <div>
      <div className='flex grid grid-cols-2 items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md p-4 mb-4 transition-transform transform hover:scale-105'>
        <h1 className='text-xl font-semibold text-slate-800'>{user.name}</h1>
        <h3 >{user.email}</h3>
        <div>
          <button
            onClick={handleOpen}
            className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 mr-2'
          >
            Edit
          </button>
          <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
