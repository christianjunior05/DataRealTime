import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '.../services/authService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authService.login(email, password);
      if (remember) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Identifiants incorrects');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required />
      <label>
        <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
        Se souvenir de moi
      </label>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default Login;
