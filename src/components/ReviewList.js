import React from 'react';
import PostReviewForm from './PostReviewForm';
import Review from './Review';

export default class ReviewList extends React.Component {
    render(){
        return ( //template for all review components to be called
            <div className="row">
                <div className="col">
                    <h3>Reviews</h3>
                    <Review />
                    <PostReviewForm />
                </div>
            </div>
        )
    }
}
