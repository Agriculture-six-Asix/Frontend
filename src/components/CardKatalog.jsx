import { Link } from "react-router-dom";

function cardKatalog({ namaAsli, namaLatin, image, parameter }){
  return (
    <Link to={`/katalog/${parameter}`} className="mx-6 mb-8">
      <div className="border-2 w-[361px] h-[344px] text-white rounded-lg shadow-md">
        <img src={image} alt="katalog1" className="rounded-[10px]" />
        <h2 className="text-black text-2xl font-bold mx-3 mt-2">
          {namaAsli}
        </h2>
        <h3 className="text-black text-2xl font-normal mx-3">
          {namaLatin}
        </h3>
      </div>
    </Link>
  );
};

export default cardKatalog;
