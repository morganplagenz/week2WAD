import React from 'react';


export default class Review extends React.Component {
    
    render(){

        return ( //template for all submitted reviews to be outputted as
        <div>
            <div>
                 {this.props.name}{this.props.review}     
            </div>
        </div>
        )}
}
