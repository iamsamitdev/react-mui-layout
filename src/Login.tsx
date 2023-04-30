import { useState } from 'react'
import { TextField, Button } from '@mui/material'

const loginStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '0.5rem',
  },
  button: {
    margin: '0.5rem',
  },

}

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
      <form onSubmit={handleLogin}>
        <TextField
          sx={loginStyles.input}
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          sx={loginStyles.input}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={loginStyles.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
  )
}

export default LoginScreen
