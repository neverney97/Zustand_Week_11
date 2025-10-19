import { create } from "zustand";
import {v4 as uuidv4} from "uuid";

const useUsersStore = create((set) => ({
    users: [
        {name: 'Emma', email: 'nani@email.com', id: uuidv4()},
        {name: 'Olivia', email: 'oli@example.com', id: uuidv4()},
        {name: 'Ava', email: 'ava@example.com', id: uuidv4()}
    ],

    // Add new user
    addNewUser: (newUser) => set((state) => ({
        users: [...state.users, {...newUser, id: uuidv4()}]
    })),

    // Edit user
    editUser: (userId, newDetails) => set((state) => ({
        users: state.users.map((user) => 
            user.id === userId ? {...user, ...newDetails} : user
        ),
    })),

    // Delete user
    deleteUser: (userId) =>
        set((state) => ({
            users: state.users.filter((user) => user.id !== userId),
        })),

}))

export default useUsersStore;