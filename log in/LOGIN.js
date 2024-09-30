import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import file CSS

// Komponen LoginForm
function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" required />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-button">Log in</button>

        <div className="social-login">
          <p>Or sign in with:</p>
          <div className="social-icons">
            <button className="social-btn facebook">Facebook</button>
            <button className="social-btn twitter">Twitter</button>
            <button className="social-btn google">Google</button>
          </div>
        </div>
      </form>
    </div>
  );
}

// Render komponen LoginForm ke dalam div dengan id 'root'
ReactDOM.render(<LoginForm />, document.getElementById('root'));
