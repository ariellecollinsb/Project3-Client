import React, { Component } from "react";
import API from "../utils/API";

class Blog extends Component {
    state = {
        Blogposts: [],
        blogTitle: "",
        blogImage: "",
    }

    componentDidMount() {
        API.blog()
            .then(res => this.setState({ blogposts: res.data }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <>
                <h2>BlogPosts</h2>
            <div className="Results">

                </div>
            </>
        )
    }
}



export default Blog;