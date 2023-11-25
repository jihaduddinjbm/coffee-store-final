
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loaderUsers = useLoaderData();
    const [users, setUsers] = useState(loaderUsers);

    const handleDelete = id => {
        // make sure user delete
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                console.log('deleted successfully');
                // remove the users from the ui
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
                
            }
        })

    }
    return (
        <div>
            <h2>Users: {loaderUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>last logged In </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td></td>
            <td>
                <button
                 onClick={() => handleDelete(user._id)} 
                 className="btn">Delete</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;