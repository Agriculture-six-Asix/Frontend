import UlasanCard from "../../components/Ulasan/UlasanCard"
// import dataUlasan from "../../data/dummy/ulasan-list.json"
import axios from "axios"
import { useEffect, useState } from "react"

function UlasanList(){
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getReviews() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/rating`);
                setReviews(response.data.data.ratings);
            } catch (error) {
                // TODO: handle error
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        getReviews();
    },[]);

    return(
        <>
            <div className="py-4 px-6 border-l-[2px] w-full overflow-y-auto space-y-6 p-4">
                {/* TODO: implement loading */}
                {reviews.map((item) => (
                    <UlasanCard rating={item.score} image={item.photo} username={item.fullname} review={item.content} date={item.created_at} key={item.id}/>
                ))}
            </div> 
        </>
    )
}

export default UlasanList