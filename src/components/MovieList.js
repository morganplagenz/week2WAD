import React from 'react';
import Movie from './Movie';
import anna from './img/anna.png';
import dontbreathe from './img/dontbreathe.png';
import conjuring from './img/conjuring.jpg';
import scream from './img/scream.png';
import vivarium from './img/vivarium.png';



export default class MovieList extends React.Component {
    render(){ //movie One through Five are hard-coded, and the ratings and submitted forms are dynamic
        let movieOne = {
            name: 'Annabelle: Creation',
            poster: anna,
            plot: 'A doll-maker & his wife welcome a nun and several girls from a shuttered orphanage into their home, where they become the target of the doll-makers possessed creation, Annabelle.'
        }
        let movieTwo = {
            name: 'Dont Breathe',
            poster: dontbreathe,
            plot: 'Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isnt as helpless as he seems.'
        }
        let movieThree = {
            name: 'The Conjuring: The Devil Made Me Do It',
            poster: conjuring,
            plot: 'The Warrens investigate a murder that may be linked to a demonic possession.'
        }
        let movieFour = {
            name: 'Scream',
            poster: scream,
            plot: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.'
        }
        let movieFive = {
            name: 'Vivarium',
            poster: vivarium,
            plot: 'A young couple looking for the perfect home find themselves trapped in a mysterious labyrinth-like neighborhood of identical houses.'

        }
        return (
            <div>
                <div className="card-header bg-gradient">
                    <h2>Movie Reviews</h2>
                </div>
                <div className="container-fluid">
                    <div className="row pt-4">
                        <div className="col-lg-4 col-sm-12">
                            <Movie {...movieOne} />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Movie {...movieTwo} />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Movie {...movieThree} />
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col">
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Movie {...movieFour} />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Movie {...movieFive} />
                        </div>
                        <div className="col">
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}