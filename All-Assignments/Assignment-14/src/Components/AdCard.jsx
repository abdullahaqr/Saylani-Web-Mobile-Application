import React from 'react';
import { Link } from 'react-router-dom';

class AdCard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="cards card">
                    <div className="img-div">
                        <img src={this.props.img} alt="Item-Image" className="card__img card-img" />
                    </div>
                    <div className="card-details">
                        <h3 className="card-price">
                            Rs {this.props.price}
                        </h3>
                        <p className="card-title">
                            {this.props.title}
                        </p>
                        <div className="card-bottom">
                            <small className="card-location">
                                {this.props.location}
                            </small>
                            <small className="card-timestamp">
                                {this.props.time}
                            </small>
                        </div>
                    </div>
                </div>

                {/* <div class="col-md">
                    <div class="card text-white text-center my-5" style="width: 18rem;">
                        <div class="card-header mt-4"></div>
                        <img src="images/olx-web.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold h2">Assignment #14</h5>
                            <p class="card-text small-card-text">OLX Replica</p>
                            <a href="All-Assignments/Assignment-14/index.html" class="btn btn-lg" target="_blank">View</a>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-md">
                    <div className="card text-white text-center my-5" style="width: 18rem;">
                        <div className="card-header mt-4"></div>
                        <img src={this.props.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold h2">Rs {this.props.price}</h5>
                            <p className="card-text small-card-text">{this.props.title}</p>
                            <a href="All-Assignments/Assignment-14/index.html" className="btn btn-lg" target="_blank">View</a>
                        </div>
                    </div>
                </div> */}


            </React.Fragment>
        )
    }
}

export default AdCard;