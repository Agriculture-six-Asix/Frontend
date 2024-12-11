import { Link } from "react-router-dom"
import ReviewCard from "./CustomersReview/ReviewCard"
// import reviewData from "../../data/dummy/customers-review.json"
import axios from "axios"
import { useEffect, useState } from "react"

function CustomerReviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTop2Reviews() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/rating`);
                // get only the first 2 reviews
                setReviews(response.data.data.ratings.slice(0, 2));
            } catch (error) {
                // TODO: handle error
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTop2Reviews();
    }, [])

    return (
        <>
            <section className="flex flex-col items-center mt-20 px-2 lg:px-[72px]">
                <h3 className="text-primary-600 text-4xl font-bold mb-5">Kata Customer</h3>
                <div className="flex flex-col md:flex-row md:justify-between w-full">
                    {/* TODO: implement loading */}
                    {reviews.map((item, index) => (
                        <ReviewCard className="bg-slate-800" review={item.content} userImg={item.photo} name={item.fullname} key={index} />
                    ))}
                </div>
                <div className="w-full flex mt-2 justify-end font-bold">
                    <Link to="/ulasan" className="text-primary-600 text-lg mr-2">Lihat selanjutnya</Link>
                </div>
            </section>
        </>
    )
}

export default CustomerReviews