import { useState } from "react"
import { useUserStore } from "../stores/useUserStore"

export const Users = () => {
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const users = useUserStore((state) => state.users);
  const addUser = useUserStore((state) => state.addUser);
  const removeUser = useUserStore((state) => state.removeUser);


  const handleAddUser = () => {
    //Here we will add the user to the store
    addUser(newUser);
    setNewUser({ name: "", email: "" })
  }

  return (
    <section className="dark">
      <h2>1. User Management App</h2>
      <p>a. Move the users array to the useUserStore and import it here</p>
      <p>b. Make the handleAddUser work by creating a new action in the useUserStore</p>
      <p>c. Make the remove user button work by creating a new action in the useUserStore</p>
      <input
        type="text"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button>Remove user</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
