import React from 'react'
import "./Review.css"
import {Star, StarBorder} from "@material-ui/icons";
const Review : React.FunctionComponent = () => {
    return (
        <div className="my-4">
            <div className="row ">
                    <img alt="Image placeholder" className="avatar"
                         src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" />
                         <div className="name">
                             <p className="h4 ">Ankur</p>
                         </div>


            </div>
            <div className="row">
                <div className="col-md-2 my-2">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorder />

                </div>
                <div className="name">
                    <p className="lead ">3 March 2020</p>
                </div>
            </div>
            <p className="h4">Value for money</p>
            <p className="lead"> Value for money .. Good material!</p>
        </div>
    )
}

export default Review