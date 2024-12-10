import { useParams } from "react-router-dom";
import CardDetail from "../components/Detail Katalog/CardDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstHero from "../components/FirstHero";
import heroImg from "/assets/heroImg/detail-heroImg.png"
// import detailTanaman from "../data/dummy/detailTanaman.json"
import axios from "axios";
import { useEffect, useState } from "react";

function DetailKatalog(){
  const { parameter } = useParams();
  const [tanaman, setTanaman] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const heroTitle = "Detail Tanaman"
  const heroSubtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas? Fugit neque debitis accusantium nihil deserunt error nisi et."

  useEffect(() => {
    async function getTanamanData() {
        console.log(parameter);
        try {
            const reponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bibit/${parameter}`);
            setTanaman(reponse.data.data.bibit);
        } catch (error) {
            // TODO: handle error
            console.error(error);
        }finally{
            setIsLoading(false);
        }
    }

    getTanamanData();
  }, [parameter]);


  return (
    <>
        <Navbar/>
        <FirstHero imageUrl={heroImg} title={heroTitle} subTitle={heroSubtitle}/>
        <section className="min-h-fit animate-fade-in" id="katalog">
            {/* TODO: implement loading UI */}
            <CardDetail
                judul={tanaman.title}
                namaLatin={tanaman.latin}
                penjelasan={tanaman.description}
                gambar={tanaman.image}
            />
        </section>
        <Footer/>
    </>
  );
};

export default DetailKatalog;
