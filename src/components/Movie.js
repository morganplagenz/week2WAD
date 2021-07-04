import React from 'react';
import Stars from './StarRating';
import ReviewList from './ReviewList';

export default class Movie extends React.Component {

    render(){ //template for all hard coded movies to follow
        return (
            <div className="card content-center">
                <div className="card">
                    <img className="card-img-top" src={this.props.poster}/>
                    <div className="card-body plot-padding">
                        <h4>{this.props.name}</h4>
                        <Stars />
                    </div>
                    <div className="plot-padding">
                        {this.props.plot}
                        <br />
                    </div>
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <a href="#" className="btn btn-secondary bg-gradient" >Watch Movie</a>
                                <br />
                                <br />
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                        <div className="card-footer">
                        <ReviewList /> 
                    </div> 
                </div>  
            </div>
        )
    }
}