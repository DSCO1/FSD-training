import React, { useState } from "react";
import "./App.css";

function App() {

  // Empty user template
  const emptyUser = {
    id: "",
    name: "",
    contact: "",
    email: "",
    designation: "",
    company: "",
    address: "",
  };

  // States
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(emptyUser);
  const [editing, setEditing] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Handle form input
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Add user
  const addUser = () => {
    if (!user.name) return;
    const newUser = { ...user, id: Date.now().toString() };
    setUsers([...users, newUser]);
    setUser(emptyUser);
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // Edit user
  const editUser = (u) => {
    setUser(u);
    setEditing(true);
  };

  // Update user
  const updateUser = () => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
    setUser(emptyUser);
    setEditing(false);
  };

  // Search user
  const searchUser = () => {
    const found = users.find((u) => u.id === searchId);
    setSearchResult(found || "Not Found");
  };

  return (
    <div className="container">

      <h1>User Management</h1>

      {/* ===== FORM ===== */}
      <div className="card">
        <input name="name" placeholder="Name" value={user.name} onChange={handleChange}/>
        <input name="contact" placeholder="Contact" value={user.contact} onChange={handleChange}/>
        <input name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
        <input name="designation" placeholder="Designation" value={user.designation} onChange={handleChange}/>
        <input name="company" placeholder="Company" value={user.company} onChange={handleChange}/>
        <input name="address" placeholder="Address" value={user.address} onChange={handleChange}/>
        <br/>

        {!editing ? (
          <button className="add" onClick={addUser}>Add</button>
        ) : (
          <button className="update" onClick={updateUser}>Update</button>
        )}
      </div>

      {/* ===== SEARCH ===== */}
      <div className="card">
        <input
          placeholder="Search by ID"
          value={searchId}
          onChange={(e)=>setSearchId(e.target.value)}
        />
        <button className="search" onClick={searchUser}>Search</button>

        {searchResult && typeof searchResult === "object" && (
          <p style={{color:"white"}}>{searchResult.name} - {searchResult.email}</p>
        )}

        {searchResult === "Not Found" && (
          <p style={{color:"white"}}>User not found</p>
        )}
      </div>

      {/* ===== USER LIST ===== */}
      {users.map((u) => (
        <div key={u.id} className="userCard">

          {/* Avatar */}
          <div className="avatar">
            {u.name ? u.name[0].toUpperCase() : "U"}
          </div>

          <h3>{u.name}</h3>
          <p className="email">{u.email}</p>
          <div className="company">{u.company}</div>

          <div>
            <button className="update" onClick={()=>editUser(u)}>Edit</button>
            <button className="delete" onClick={()=>deleteUser(u.id)}>Delete</button>
          </div>

        </div>
      ))}

    </div>
  );
}

export default App;
