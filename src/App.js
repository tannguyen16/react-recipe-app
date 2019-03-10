import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

class App extends Component {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=b9f2a61b3e008671bb48d52102034aa1"
  };

  async getRecipes(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes
      })
    } catch (error){
      console.log(error);
    }
    
  }

  componentDidMount(){
    this.getRecipes();
  }

  render() {

    console.log(this.state.recipes);

    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetail />
      </React.Fragment>
    );
  }
}

export default App;
