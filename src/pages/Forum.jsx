import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FadeIn from "../Animation/ScrollAnimation/FadeIn"
import Diskusi from "../data/dummy/diskusi-list.json"
import { Link, useSearchParams } from "react-router-dom"
import MainDiskusi from "../components/MainDiskusi"
import ForumUtils from "../components/ForumUtils"
import { useAuth } from "../context/AuthContext"

function Forum() {
    const [searchParams] = useSearchParams();
    const searchTag = searchParams.get("tag");
    const { user } = useAuth();
    if (searchTag) {
        // Filter diskusi by tag
        console.log(searchTag.replace("+", " "));
    }
    return (
        <>
            <Navbar />
            <section className="mb-12 md:px-16 px-4 animate-fade-in">
                <FadeIn>
                    <h1 className="my-12 text-4xl font-bold text-primaryColor">
                        Forum Diskusi
                    </h1>
                </FadeIn>
                <FadeIn>
                    <div className="grid grid-cols-8 xl:grid-rows-1 justify-between gap-x-16">
                        <div className="col-span-8 xl:col-span-6 flex flex-col gap-y-8">
                            {Diskusi.map((value, index) => (
                                <Link key={index} to={`/forum/${value.slug}`}>
                                    <MainDiskusi
                                        photo={value.photo}
                                        nama={value.nama}
                                        created_at={value.created_at}
                                        judul={value.judul}
                                        deskripsi={value.deskripsi}
                                        reply_count={value.reply_count}
                                    />
                                </Link>
                            ))}
                        </div>
                        <div className="col-span-8 row-start-1 xl:col-span-2 mb-12 xl:mb-0">
                            <ForumUtils
                                // placeholder for onSearchChange and onOrderChange 
                                onSearchChange={() => console.log("search change")}
                                onOrderChange={() => console.log("order change")}
                                onSubmit={() => console.log("submit")}
                                user={user}
                            />
                        </div>
                    </div>
                </FadeIn>
            </section >
            <Footer />
        </>
    )
}

export default Forum