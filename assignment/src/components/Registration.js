function Registration() {
  return (
    <div className="center-page">
      <h1>Registration</h1>

      <form>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;