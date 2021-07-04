import React, { useState } from 'react';
import Review from './Review'

export default class PostReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            review:"",
            listOfReviews:[]
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    };


    handleOnChange(e){
        this.setState(() => ({
            [e.target.name]: e.target.value,
        }))
    }

    handleOnSubmit(e){
        e.preventDefault();
        let listOfReviews = [...this.state.listOfReviews];
        listOfReviews.push({
            name: this.state.name +  ` says "`, //concatinated to make list of entered reviews more readible
            review: this.state.review + `"`
        });
        this.setState({
            listOfReviews,
            name: "",
            review: "",
          });
          console.log(listOfReviews)
    };

    render(){

        let listOfReviews;
        if (this.state.listOfReviews){
            listOfReviews = this.state.listOfReviews.map((singleReview, index) => <Review key={index} {...singleReview} />)
        }
        console.log(listOfReviews)

        return (
            <div>
                {listOfReviews} 
                <form onSubmit={this.handleOnSubmit}>
                    <br />
                    <strong>Write A Review</strong>
                    <br />
                    <br />
                    <label htmlFor="name" className="label-space-name">Name: </label>
                    <input type="text" name="name" value={this.state.value}  onChange={this.handleOnChange}/>
                    <br />
                    <br />
                    <label htmlFor="review" className="label-space-preview">Review: </label>
                    <input type="textarea" name="review" value={this.state.value} onChange={this.handleOnChange} />
                    <br />
                    <br />
                    <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                            <button type="submit" className="btn btn-danger">Post Review</button>
                                <br />
                                <br />
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                </form>
            </div>
        )
    }  
};
