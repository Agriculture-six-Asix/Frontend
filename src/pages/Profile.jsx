import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileMenu from "../components/ProfileMenu";
import defaultPic from "/assets/users/default-profile.png";
import { useAuth } from "../context/AuthContext";

function Profile() {
    const { user } = useAuth();

    return (
        <>
            <Navbar />
            <section className="p-12 md:py-20 xl:px-20 md:px-40 animate-fade-in">
                <div className="flex xl:flex-row flex-col gap-x-8">
                    <div className="w-full order-2 xl:order-1 xl:w-3/4 border-[1px] border-gray-300 rounded-xl p-8 shadow-md">
                        <h2 className="mb-8 text-2xl font-semibold text-primaryColor">
                            Profil Pengguna
                        </h2>
                        <div className="flex lg:flex-row flex-col">
                            <div className="flex flex-row lg:flex-col items-center justify-center lg:mx-8 xl:mx-20">
                                <img
                                    src={user.photo ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${user.photo}` : defaultPic}
                                    alt=""
                                    className={`rounded-full size-36 lg:mb-12 shadow-md ${!user.photo ? 'p-2' : ''}`}
                                />
                                <div className="flex flex-col gap-y-6 ml-8 lg:ml-0">
                                    <button className="py-2 px-8 font-semibold rounded-lg transition-colors bg-primaryColor hover:bg-hoverPrimaryColor text-white shadow-md">
                                        Ganti Profil
                                    </button>
                                    <button className="py-2 px-8 font-semibold rounded-lg transition-colors bg-deleteColor hover:bg-deleteHoverColor text-white shadow-md">
                                        Hapus Profil
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center border-[1px] lg:my-0 my-8">
                            </div>
                            <div className="grow flex flex-col justify-between mx-4 lg:mx-10 xl:mx-16">
                                <form className="flex flex-col gap-y-4 mb-12 lg:mb-36" id="formProfile" action="">
                                    <label htmlFor="fname">
                                        <span className="font-semibold">Nama Depan</span>
                                        <input
                                            id="fname"
                                            name="fname"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                            value={user.fname}
                                        />
                                    </label>
                                    <label htmlFor="lname">
                                        <span className="font-semibold">Nama Belakang</span>
                                        <input
                                            id="lname"
                                            name="lname"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                            value={user.lname}
                                        />
                                    </label>
                                    <label htmlFor="username">
                                        <span className="font-semibold">Username</span>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                            value={user.username}
                                        />
                                    </label>
                                    <label htmlFor="email">
                                        <span className="font-semibold">Email</span>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2 text-gray-500"
                                            value={user.email}
                                            disabled
                                            readOnly
                                        />
                                    </label>
                                </form>
                                <button
                                    className="w-fit transition-colors bg-primaryColor hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full order-1 mb-8 xl:order-2 xl:mb-0 xl:w-1/4">
                        <ProfileMenu user={user} fullName={`${user.fname + " " + user.lname}`}/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile;