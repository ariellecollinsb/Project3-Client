import React, { Component } from "react";
import API from "../utils/API";

class Discover extends Component {
    state = {
        recipe: "",
        recipeCount: 0,
        isFavourite: false
    }

    componentDidMount() {
        this.getRecipe();
    }

    getRecipe = () => {
        API.getRandomRecipe()
            .then(res => this.setState({ recipe: res.data.name }))
            .catch(err => console.log(err));
    }

    handleLikeDislike = event => {
        const action = event.target.getAttribute("data-action");
        const newState = { ...this.state }; // made a copy of state, renamed to newState

        if (action === "like") {
            const randomNum = Math.floor(Math.random() * 5) + 1;
            newState.isFavourite = randomNum === 3; // true OR false
            newState.recipeCount = newState.isFavourite ? newState.recipeCount + 1 : newState.recipeCount;
        } else {
            newState.isFavourite = false;
        }

        this.setState(newState, () => this.getRecipe());
    }


    render() {
        return (
            <>
                <h2>Discover</h2>
                <div>
                    <h3>Favourite Recipes: {this.state.recipeCount}</h3>
                    {this.state.recipe ? (
                        <>
                            <img src={this.state.recipe} alt="YUM" />
                            <p>
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2"
                                    onClick={this.handleLikeDislike}
                                    data-action="like"
                                >
                                    Like
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.handleLikeDislike}
                                    data-action="dislike"
                                >
                                    Dislike
                                </button>
                            </p>
                        </>
                    ) : (
                        <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true" />
                    )}
                </div>
                <div className="alert alert-success" role="alert" style={{ opacity: this.state.isFavourite ? 1 : 0 }}>
                    Tasty recipe added to your favourites!
                </div>
            </>
        )
    }
}

export default Discover;