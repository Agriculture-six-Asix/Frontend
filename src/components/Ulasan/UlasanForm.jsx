import StarRating from "./StarRating"
import CustomerRatingStars from "./CustomerRating"

function UlasanForm(){
    return(
        <>    
            <section className="py-4 px-6 w-full">
                <div className="px-2 border-b-[1px] border-black max-w-fit">
                    <h1 className="text-2xl font-medium">Ulasan</h1>
                </div>
                <div className="flex items-center mt-2">
                    <h3 className="text-xl font-medium mr-2">4.9</h3>
                    <CustomerRatingStars rating={4}/>
                    <h3 className="text-xl font-medium ml-2">32 Ulasan</h3>
                </div>
                <form className="w-full flex flex-col items-end">
                    <label htmlFor="message" className="block mb-2 text-gray-900 text-xl font-medium self-start mt-6">Tambah Ulasan</label>
                    <textarea id="message" rows="14" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600" placeholder="Tulis ulasan di sini..."></textarea>
                    <StarRating/>
                    <button type="submit" className="border-[2px] border-black p-[8px] text-[16px] font-semibold rounded-lg">Submit</button>
                </form>
            </section>
        </>
    )
}

export default UlasanForm