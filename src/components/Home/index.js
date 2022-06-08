import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { session } from '../../globalFuncionts'

function Home() {
  const navigate = useNavigate();

  useEffect( () => {
    if (!session()) {
      navigate('/login');
    }
  }, []);
 
  return <p>Home Page Content</p>;
}

export default Home;