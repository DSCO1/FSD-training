function Login() {
  return (
    <div className="center-page">
      <h1>Login</h1>

      <form>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;