import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

function Home() {

    const navigate = useNavigate();
  
    return (
      <div className="food-home">
        <h1>Welcome To Food App</h1>
        <Button onClick={() => navigate('/foods')} variant='contained' color='error'>Enjoy Your Food</Button>
      </div>
    )
  }

  export default Home;