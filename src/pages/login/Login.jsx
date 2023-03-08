import { useContext, useState } from "react";
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

export default function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

//use context to check user is there or not and protect other pages
const {dispatch}=useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
 
  // firebase
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      //dispatch data to context
      dispatch({type:"LOGIN",payload:user})
     navigate("/")
    })
    .catch((error) => {
      setError(true)
    });
  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong Email or Password!</span>}
      </form>
    </div>
  )
}

