import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";
import categ1 from "../public/categ1.png";
import categ2 from "../public/categ2.png";
import categ3 from "../public/categ3.png";
import categ4 from "../public/categ4.png";

const InterFont = Inter({ subsets: ["latin"] });
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Categories = () => {
  return (
    <div className="bg-black h-[2000px]">
      {/* Food Category Section */}
      <p className={`${VibeFont.className} text-[#FF9F0D] md:ml-[630px] leading-[40px] md:w-[177px] font-normal text-[32px] md:h-[40px] ml-[130px]`}>
        Food Category
      </p>
      <p className="md:w-[446px] md:h-[56px] font-bold md:text-[48px] text-[40px] ml-[30px] md:mb-[40px] md:ml-[500px] leading-[56px] text-[#FFFFFF] md:my-0 my-[40px]">
        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
      </p>
      <div className="flex ml-[60px] flex-col md:flex-row text-white gap-[30px] md:ml-[100px]">
        {/* Food Category Items */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
          <Image src={categ1} alt="" className="mr-[14px] pt-[40px]" />
          <Image src={categ2} alt="" className="mr-[14px] pt-[40px]" />
          <Image src={categ3} alt="" className="mr-[14px] pt-[40px]" />
          <Image src={categ4} alt="" className="mr-[14px] pt-[40px]" />
        </div>
      </div>
      </div>
      );};

     
export default Categories;
