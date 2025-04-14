import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []);

  return <h1>Bienvenue sur le dashboard</h1>;
}

export default Dashboard;
