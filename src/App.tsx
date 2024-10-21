import React from "react";
import CasinoCard from "./components/CasinoCard";

const casinos = [
  {
    name: "Grosvenor Casinos",
    logo: "/assets/img/grosvenor.png",
    brandColor: "#03252B",
    bonus: {
      bet: "£10",
      get: "£400",
    },
    rating: 5,
  },
  {
    name: "Happy Spins",
    logo: "/assets/img/happy.png",
    brandColor: "#43082F",
    bonus: {
      bet: "£10",
      get: "£400",
    },
    rating: 4,
  },
  {
    name: "Hajper",
    logo: "/assets/img/hajper.png",
    brandColor: "#123156",
    bonus: {
      bet: "£10",
      get: "£400",
    },
    rating: 3,
  },
];

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="mt-[60px] mobile-min:mx-[20px] tablet-min:mx-[30px] desktop_min:mx-[62px] desktop_max:mx-[110px] ">
        <h1 className="text-2xl font-bold text-left mb-4 text-[#939393]">
          Best Casinos 2024
        </h1>
        <div className="grid gap-5">
          {casinos.map((casino, index) => (
            <CasinoCard key={index} casino={casino} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
