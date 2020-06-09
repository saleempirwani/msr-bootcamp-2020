import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import Food from './component/Food'

function App() {
  return (
    <Container maxWidth="lg">
      
      <div className="App">
        <h2>Food Street</h2>
      </div>
      
      <Food spicyItem="Chicken Karachi"  desertItem="Icecream"/>
      <Food spicyItem="Mutton Qurma"  desertItem="Kheer"/>
      <Food spicyItem="Dumba Seekh"  desertItem="Gajar Ka Halwa"/>
      <Food spicyItem="Chicken Karachi"  desertItem="Pastry"/>
      
      <Button variant="contained" color="primary">
          Order Now!
        </Button>

      <div>
        <footer>
          <p>React App Bootcamp 2020, Copyright &copy; Muhammad Saleem Raza</p>
        </footer>
      </div>

    </Container>
  );
}

export default App;
