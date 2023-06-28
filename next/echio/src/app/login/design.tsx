import Image from "next/image"

export default function Design() {
  return (
    <div className="w-1/2 bg-[#6B8DE6] rounded-l-xl">
      <div className="absolute top-[7.5rem] left-[28rem] bg-white w-max rounded-lg z-40 ">
        <Image
          src="/images/model.jpg"
          className="rounded-xl drop-shadow-[4px_4px_4px_rgba(0,0,0,0.15)] p-1.5 w-[116px] h-[105px] "
          width={110}
          height={12}
          alt="model"
        />
      </div>
      <div className="rounded-lg absolute top-[12rem] left-96 w-[237px] h-[229px] bg-gradient-to-r from-[#ffffff66] to-[#ffffff1a] shadow-[0_4px_20px_-1px_rgba(0,0,0,0.25)] drop-shadow-[rgba(0,0,0,0.25)] z-30 backdrop-blur-[20px]">
        <p className="flex justify-center text-white mt-[55px] text-xl text-bold">Selena Thomas</p>

        <div className="h-[110px] w-[186px] absolute top-[90px] left-7 rounded-xl bg-white">
          <p className="flex justify-center items-center my-3 text-sm text-gray-600 font-semibold">ENGAGEMENT</p>
          <p className="flex justify-center items-center text-3xl text-[#6B8DE6] text-bold">100%</p>
        </div>
      </div>
      <div className="rounded-lg absolute top-[9.5rem] left-40 w-[11rem] h-[2.5rem] bg-gradient-to-r from-[#ffffff66] to-[#ffffff1a] shadow-[0_4px_20px_-1px_rgba(0,0,0,0.25)] drop-shadow-[rgba(0,0,0,0.25)] z-20 ">
        <p className="text-white flex justify-center items-center mt-3 font-semibold">MAKES YOU VIRAL</p>
      </div>
      <div className="bg-white rounded-2xl absolute top-[12.25rem] left-[7rem] w-[295px] h-[95px] z-40">
        <div className="absolute">
          <Image
            src="/images/instagram.png"
            className="absolute top-[1rem] left-[7.25rem]"
            width={20}
            height={20}
            alt="model"
          />
          <p className="text-bold text-base relative top-[14px] left-[8.75rem] ">Instagram</p>
        </div>
        <div className="absolute top-[2.75rem] left-[7.25rem] h-[8px] w-[9rem] bg-[rgba(243,245,250,1)] rounded-lg "></div>
        <div className="absolute top-[3.75rem] left-[7.25rem] w-[7rem] h-[8px] bg-[rgba(243,245,250,1)] rounded-lg "></div>
        <p className=" text-xs font-semibold relative top-[1.1rem] left-[15rem]">Follow</p>

        <div className="absolute top-[1rem] left-[1rem] w-[90px] h-[60px] bg-[#F3F5FA] rounded-lg text-3xl text-bold flex justify-center items-center">
          1M
        </div>
      </div>
      <div className="bg-white rounded-xl absolute top-[20rem] left-[12rem] w-[125px] h-[55px] z-20 flex justify-center items-center">
        <div className="flex gap-1 ">
          <Image
            src="/images/smile.png"
            className="order-0 w-[30px] h-[30px] mt-[1px]"
            width={30}
            height={28}
            alt="model"
          />
          <Image
            src="/images/wow.png"
            className="order-1 w-[30px] h-[30px] ml-[2px]"
            width={30}
            height={25}
            alt="model"
          />
          <Image src="/images/heart.png" className="order-2 w-[33px] h-[33px]" width={35} height={34} alt="model" />
        </div>
      </div>
      <div className="bg-white rounded-xl absolute top-[25.5rem] left-[9rem] w-[350px] h-[103px] z-20">
        <div>
          <Image
            src="/images/youtube-icon.png"
            className="absolute top-[1.25rem] left-[9rem] "
            width={22}
            height={22}
            alt="model"
          />
          <p className="text-bold text-base relative top-[1.25rem] left-[10.5rem]">
            <Image src="/images/youtube.png" className="h-[18px] w-[50px]" width={30} height={80} alt="model" />
          </p>
        </div>
        <div className="absolute top-[3rem] left-[9rem] h-[8px] w-[190px] bg-[rgba(243,245,250,1)] rounded-lg "></div>
        <div className="absolute top-[4rem] left-[9rem] w-[130px] h-[8px] bg-[rgba(243,245,250,1)] rounded-lg "></div>
        <p className=" text-xs font-semibold absolute top-[1.35rem] left-[14.5rem]">SUBSCRIBES</p>

        <div className=" flex justify-center items-center relative  left-[1rem] w-[115px] h-[65px] bg-[rgba(243,245,250,1)] rounded-lg text-3xl text-bold">
          <p className="">800k</p>
        </div>
      </div>
    </div>
  )
}
