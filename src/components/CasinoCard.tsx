import React from "react";
import RatingStars from "./RatingStars";

interface Casino {
  name: string;
  logo: string;
  brandColor: string;
  bonus: {
    bet: string;
    get: string;
  };
  rating: number;
}

interface CasinoCardProps {
  casino: Casino;
}

const CasinoCard: React.FC<CasinoCardProps> = ({ casino }) => {
  return (
    <div className="bg-white shadow-[0px_0px_20px_#0000001A] rounded-lg p-4 desktop_min:pr-[35px] desktop_max:pr-[70px] flex w-full flex-col items-center tablet_min:w-full tablet_min:flex-col tablet_min:items-center desktop_min:flex-row desktop_min:justify-between desktop_min:items-center desktop_max:justify-between desktop_max:items-center transition-all">
      <div className="flex flex-col tablet_min:flex-row justify-center items-center w-full tablet_min:gap-6 desktop_max:gap-10">
        <div
          className={`bg-[${casino.brandColor}] w-full justify-center items-center py-2 flex mobile_min:h-[133px] tablet_min:w-[289px] tablet_min:h-[162px] desktop_min:w-[225px] desktop_min:h-[103px] desktop_max:w-[289px] desktop_max:h-[133px]`}
        >
          <img
            src={casino.logo}
            alt={casino.name}
            className="mobile_min:size-28 desktop_min:size-24 desktop_max:size-28 object-cover"
          />
        </div>
        <div className="my-3 tablet_min:my-0 flex-grow text-center tablet_min:h-full tablet_min:text-left desktop_min:pr-[35px] desktop_max:pr-[70px]">
          <div className="flex flex-col desktop_min:flex-row tablet_min:h-full tablet_min:justify-between">
            <div>
              <h2 className="text-xl leading-[24.38px] font-normal underline">
                {casino.name}
              </h2>
              <RatingStars rating={casino.rating} />
            </div>
            <div className="desktop_min:text-center">
              <p className="leading-[24.38px] text-xl font-[600]">Bonus</p>
              <p className="leading-[34.13px] text-[28px] text-black font-normal">
                <div className="flex flex-col mobile_max:flex-row mobile_max:gap-2 desktop_min:flex-col desktop_min:gap-0">
                  <span>Bet {casino.bonus.bet}</span>
                  <span>Get {casino.bonus.get}</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#009129] text-white p-[20px] rounded-[10px] font-bold leading-[24.38px] text-xl hover:bg-[#056A21] w-full desktop_min:w-auto tablet_min:mt-4 desktop_min:mt-0 min-w-[190px] desktop_max:min-w-[306px]">
        Bet Now
      </button>
    </div>
  );
};

export default CasinoCard;
