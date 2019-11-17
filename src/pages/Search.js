import React, { Component } from "react";
import API from "../utils/API";



class Search extends Component {
    state = {
        recipes: [],
        selectedRecipe: "",
        searchedRecipe: "",
    }

    componentDidMount() {
        API.getRandomRecipe()
            .then(res => this.setState({ recipe: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => this.setState({ selectedRecipe: event.target.value });

    handleFormSubmit = event => {
        event.preventDefault();
        API.getRecipes(this.state.selectedRecipe)
            .then(res => this.setState({ 
                recipes: res.data.slice(0, 20),
                searchedRecipe: this.state.selectedRecipe,
                selectedRecipe: ""
            }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h2>Search</h2>
                <form>
                    <label htmlFor="recipe-choice">Recipe name:</label>
                    <input 
                        list="recipes" 
                        id="recipe-choice" 
                        name="recipe-choice" 
                        className="form-control" 
                        placeholder="Choose a recipe"
                        value={this.state.selectedRecipe}
                        onChange={this.handleInputChange} 
                    />
                    <data id="recipes">
                        {this.state.recipes.map((recipe, i) => (
                            <option value={recipe} key={i} />
                        ))}
                    </data>
                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success btn-block mt-2">Search</button>
                </form>
                <div className="SearchResults">
                    {this.state.recipes.length ? (
                        <h3>You found {this.state.searchedrecipe} !:</h3>
                    ) : (
                        <h3>Search a recipe for more!</h3>
                    )}
                    <ul className="list-group">
                        {this.state.recipes.map((image, i) => (
                            <div className="Image" 
                                className="list-group-item" 
                                key={i}
                                isActive={this.state.selectedImage === image}
                                onClick={() => this.setState({ selectedImage: image })}
                            >
                                <img src={image} alt="" />
                            </div>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}


export default Search;