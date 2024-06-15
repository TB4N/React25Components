import { FaStar } from "react-icons/fa6"

export default function StarRating ({noOfStars = 5}) {
    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{

                return <FaStar/>
            })
        }

    </div>
 }