import React from 'react';
import './App.css';

// file link 
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import Data from './Data';



function App() {

  const cards = Data.map((item) => {
    return ( 
      <Cards 
            key={item.id}
            // Destructure the item into individual props
            {...item}

            // Instead of passing every props, I pass the whole item and so its structure
            // item={item}

            //img={item.coverImg}
            //rating={item.stats.rating}
            //reviewCount={item.stats.reviewCount}
            //location={item.location}
            //title={item.title}
            //price={item.price}
            //openSpots={item.openSpots}
      />
    )     
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">    
            {cards}
        </section>    
        <Footer />
    </div>
  );
}

export default App;
