import React from 'react';
import Review from "./Review";

const data = [
    {
        title: "Value for money",
        description: " Value for money .. Good material! ",
        rating: 4,
        date: "3 March 2020",
        name:"Ankur"
    },
    {
        title: " They had the size issues.",
        description: "May be it's my perceptive but I did not like the product for it's fitment, for L size the sleeve length per me was short and the waist and chest length could be slightly trimmed. Again it may be my custom fitment that I am looking for.",
        rating: 4,
        date: "5 March 2020",
        name:"Ankur"
    }
]

const ProductReview : React.FunctionComponent = () => {
    return(
        <div>
            <h2 className="h2">Reviews</h2>
            <p className="lead h4">2 reviews</p>
            <Review />
        </div>
    )
}

export default ProductReview