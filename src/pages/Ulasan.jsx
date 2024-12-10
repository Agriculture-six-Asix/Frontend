import { useState } from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UlasanList from "../components/Ulasan/UlasanList"
import UlasanForm from "../components/Ulasan/UlasanForm"
import { useAuth } from '../context/AuthContext';

function Ulasan(){
    const [activeSection, setActiveSection] = useState("ulasan-form"); // Keeps track of the active section
    const { user } = useAuth();

    const togglePopup = (section) => {
        setActiveSection(section === activeSection ? null : section)
    };

    return(
        <>
            <Navbar/>
            <ul className="lg:hidden flex mt-4">
                <li><button className="mx-3 text-lg transition duration-200 ease-in text-black hover:text-primary-600" onClick={() => togglePopup("ulasan-form")}>Ulasan Form</button></li>
                <li><button className="mx-3 text-lg transition duration-200 ease-in text-black hover:text-primary-600" onClick={() => togglePopup("ulasan-list")}>Ulasan List</button></li>
            </ul>
            <section className="flex h-lvh bg-white animate-fade-in">
                <div className="hidden lg:block lg:w-2/6 min-h-lvh">
                    <UlasanForm user={user}/>
                </div>
                <div className="hidden lg:block lg:w-4/6 min-h-lvh overflow-y-auto">
                    <UlasanList/>
                </div>
                <div>
                    {activeSection === "ulasan-form" && 
                        <div className="w-screen lg:hidden h-lvh">
                            <UlasanForm onClick={() => togglePopup("ulasan-form")} />
                        </div>
                    }
                    {activeSection === "ulasan-list" && 
                        <div className="w-full lg:hidden h-lvh overflow-y-auto">
                            <UlasanList onClick={() => togglePopup("ulasan-list")}/>
                        </div>
                    }
                </div>
            </section>
            <Footer/>
        </>
    )    
}

export default Ulasan