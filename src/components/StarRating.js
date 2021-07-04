import React from 'react';
import StarRatings from './starRating/react-star-ratings';
 
//installed with NPM from a package called "react-rating-stars-component" 
export default class Stars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        rating:this.rating,   
    }
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
    

    render() {
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="rgb(221,59,75)"
          changeRating={this.changeRating}
          starHoverColor= "rgb(221,59,75)"
          starDimension="23px"
          numberOfStars={5}
          name='rating'
        />
      );
    }
}

