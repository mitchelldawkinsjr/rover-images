import React from 'react';
import { get } from "../../adapters/api";

export default class RoverList extends React.Component{
    state = {
        rovers: []
    };

    componentDidMount() {
        get('curiosity')
            .then(res => {
                const rovers = res.data.photos;
                this.setState({rovers});
            })
}

    render() {
        return (
            <div className="row">
            { this.state.rovers.map((rover) =>
                <div key={rover.id} className="col-lg-4">
                    <div className="card card-info">
                        <div className="card-body pd-40">
                            <span className="image">
                                <img className="card-img-top img-fluid" src={rover.img_src} />
                            </span>
                            <br/>
                        </div>
                    </div>
                </div>
            )}
            </div>
        )
    }
}