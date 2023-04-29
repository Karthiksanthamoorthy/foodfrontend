import { Card } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


export default function OrderSuccess() {
    const styles = {
        color: "green"
    };
    const navigate = useNavigate();
    return (
        <div className="success">
            <Card className='order-success'>
                <h3 style={styles}>Order successfully placed.</h3>
                <h4>Thank you for Ordered Check your mail to Track Food. Visit again.</h4>
            </Card>
            <Card className='order-success'>
            <Button onClick={() => navigate('/foods')} variant='contained' color='error'>Enjoy Your Food</Button>
            </Card>
        </div>
        
    )
}