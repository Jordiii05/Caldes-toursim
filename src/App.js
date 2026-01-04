import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Intro from "./components/intro";
import Main from "./components/main";
import Act from "./components/act";
import Cart from "./components/cart";
import Footer from "./components/footer";

const ACTIVITIES = [
  {id:"termes", name:"Visit Termes Romanes", info:"More than 2000 years of history and the beginning of the municipality in the Roman era", price: 10, mediaType: "image", 
    mediaSrc:"/multimedia/termes.jpg"},
  {id:"casarosa", name: "Visit Casa Rosa", info: "Historical building with Modernism art", price: 5, mediaType: "image", mediaSrc: "/multimedia/casarosa.jpg" },
  {id: "book",name:"El fill de l'Italià", info:"A history in Caldes during the WW2 when Italians take refuge in the City (this book won Ramon Llul award)", price: 22,mediaType: "audio",
    mediaSrc: "/multimedia/llibre.mp3"},
  {id:"prats",name:"Balneari Prats Thermal Bath ",info:"A thermal Bath of 90min on one of the spa's of the city ",price:80, mediaType: "image",
    mediaSrc: "/multimedia/prats.jpg"},
  {id:"vichy",name:"Vichy Catalan Thermal Bath",info:"A thermal Bath of 90min on one of the spa's of the city",price:90, mediaType: "image",
    mediaSrc: "/multimedia/caldesgimp.png"},
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (activity) => {
    setCartItems((previousCartItems) => {
      const existingItem = previousCartItems.find((item) => item.id === activity.id);

      if (existingItem) {
        return previousCartItems.map((item) =>item.id === activity.id ? { ...item, count: item.count + 1 } : item);
      }

      return [...previousCartItems, { ...activity, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((previousCartItems) =>previousCartItems.filter((item) => item.id !== id));
  };

  const changeCount = (id, change) => {
    setCartItems((previousCartItems) =>
      previousCartItems
        .map((item) =>item.id === id ? { ...item, count: item.count + change } : item)
        .filter((item) => item.count > 0)
    );
  };

  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="app">
      <Header/>

      <Main>
        <Intro />
        <Act activities={ACTIVITIES} onAddToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          cartCount={cartCount}
          onRemove={removeFromCart}
          onCount={changeCount}
          onClear={clearCart}
        />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
