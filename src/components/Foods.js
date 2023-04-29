import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { API } from "../global";

const Foods = () => {
  const productList = [
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/9d4/ea5dfbc2a5632a9a99f4231b018cc9d4.jpg",
      "name": "Delicious Idly",
      "price": "80",
      "rating": "4.0",
      "category": "Idly",
      "description": "Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka.",
      "id": "idio"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/990/e92380f116c8421a17d71516b20cf990.jpg",
      "name": "Idly",
      "price": "48",
      "rating": "4.2",
      "category": "Idly",
      "description": "Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka.",
      "id": "owlo"
    },
    {
      "image": "https://b.zmtcdn.com/data/pictures/0/60760/8650a0be985647b1d521ab01cb055b5f_o2_featured_v2.jpg",
      "name": "Triangle Dosa",
      "price": "99",
      "rating": "4.5",
      "category": "dosa",
      "description": "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar",
      "id": "kjdi"
    },
    {
      "image": "https://b.zmtcdn.com/data/pictures/4/19574194/4fe096dc1e72372ebb01849d6416701e_o2_featured_v2.jpg",
      "name": "Spicy Masala Dosa",
      "price": "160",
      "rating": "4.3",
      "category": "dosa",
      "description": "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar",
      "id": "eodh"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/7e6/4e7ea0e49b7802e14da0b6f7a1d067e6.jpg",
      "name": "Subway Sandwiches",
      "price": "120",
      "rating": "4",
      "category": "sandwiches",
      "description": "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
      "id": "mcmr"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/66c/25824464887701f9378406d33910866c.jpg",
      "name": "Pablo's Sandwiches",
      "price": "199",
      "rating": "4.1",
      "category": "sandwiches",
      "description": "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
      "id": "dkfr"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/6d9/cf4ad619840e5802c263485fe1bc26d9.jpg",
      "name": "Limelight Pizza",
      "price": "159",
      "rating": "3.6",
      "category": "pizza",
      "description": "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
      "id": "frfg"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/592/407f68a8f05fdef71abe6fd44e9aa592.jpg",
      "name": "Truffles Pizza",
      "price": "200",
      "rating": "4.6",
      "category": "pizza",
      "description": "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
      "id": "psdg"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/871/2e6ccc0847f6a8cbf300cc5c515c7871.jpg",
      "name": "Donne Biryani",
      "price": "200",
      "rating": "4.1",
      "category": "biryani",
      "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
      "id": "fsrg"
    },
    {
      "image": "https://b.zmtcdn.com/data/pictures/2/19802842/587cc18bc3034de20b2e9afa3ca1daaf.jpg",
      "name": "Aligarh Biryani",
      "price": "200",
      "rating": "4.0",
      "category": "biryani",
      "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
      "id": "fsdg"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/eb5/1dc85045959f0fbc78ba9874ad05eeb5.jpg",
      "name": "Dragon Biryani",
      "price": "300",
      "rating": "4.2",
      "category": "biryani",
      "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
      "id": "fsdg"
    },
    {
      "image": "https://b.zmtcdn.com/data/dish_photos/2e4/e242abd070343674a5bd00d1f222c2e4.jpg",
      "name": "Paratha Envy",
      "price": "129",
      "rating": "4.7",
      "category": "aloo paratha",
      "description": "Aloo paratha is a paratha stuffed with a special potato filling known as Aloo chokha. It is traditionally eaten for breakfast.",
      "id": "fsdg"
    },
    {
      "image": "https://www.ibaco.in/assets/img/products/product1.jpg",
      "name": "Ice Cream",
      "price": "160",
      "rating": "4.9",
      "category": "ice cream",
      "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite.",
      "id": "fsdg"
    },
    {
      "image": "https://www.ibaco.in/assets/img/products/icecream-shakes-banner-new.png",
      "name": "Juice",
      "price": "99",
      "rating": "4.8",
      "category": "juice",
      "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite.",
      "id": "fsdg"
    },
    {
      "image": "https://www.ibaco.in/assets/img/products/Ibaco-Signature-Bars-home-new-1.png",
      "name": "Magnum Chocolate Truffle Ice Cream",
      "price": "60",
      "rating": "4.2",
      "category": "ice cream",
      "description": "Rich Chocolate Icecream With Truffle Sauce Wrapped In Thick Belgian Chocolate.",
      "id": "fsdg"
    }
  ];

  const [productsList, setProductList] = useState([]);

  const getFoods = () => {
    fetch(`${API}/foods`, 
    {method: "GET",
    headers:{
      "x-auth-token": localStorage.getItem("token")
    }
  })
      .then((data) => data.json())
      .then((msg1) => setProductList(msg1));
  };
  //  console.log(productList)
  useEffect(() => getFoods(), []);

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="food-list">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.image}
          name={i.name}
          price={i.price}
          id={i.id}
          desc={i.description}
          ret={i.rating}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc, desc, ret }) => {
  const styles = {
    color: ret >= 4 ? 'green' : 'red',
  };

  const [show, setShow] = useState(false);
  return (
    <Card className="food-container">
      <img src={imgSrc} alt={name} className="food-image" />
      <CardContent>
        <div className="food-specs">
          <h3 className='food-name'>{name} 
          <IconButton onClick={() => setShow(!show)} aria-label='toggle' color='primary'>
              {show ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </IconButton></h3>
          <p className="food-rating" style={styles}>⭐️{ret}</p>
        </div>
        {show ? <p className="food-description">{desc}</p> : null}
      </CardContent>

      <CardActions className="food-but">
        <h3 className="food-price">Price: ₹ {price}</h3>
        <Button
          className="food-addcart"
          variant='contained'
          color="error"
          onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add To Cart</Button>
      </CardActions>
    </Card>
  )
};


export default Foods;