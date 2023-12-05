/* eslint-disable react/jsx-key */
import Image from "next/image"
import { socials } from "@/constants"
import Link from "next/link"


const Hero = () => {
  return (
    <div id="home" className="my-100 md:pt-20">
    <div className="flex justify-center items-center max-lg:mx-5 ">
      <Image
        src="https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.32_mul_h_sub_0.32_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/chapter_banners/dsc-chapter-youtube-banner-01_3HI0DVN.png"
        alt="cover image"
        width={1000}
        height={280}
        className="rounded-3xl my-5"
      />
    </div>

      <div className="flex flex-col justify-start mx-5">
      <h1 className="text-5xl font-bold text-red-500 py-3">Encrypt Edge</h1>
      <i className="text-lg text-green-500">Hack to protect Not to harm</i>
        <ul className="flex flex-wrap ">
        {socials.map((items) => (
          <a href={items.link} target="_blank">
            <li className="m-1 p-1 border-double border-4 border-green-500 rounded-full ">

              <Image
                src={`./icons/${items.text}.svg`}
                alt={items.text}
                width={15}
                height={36}
                className="m-1 border-5"
              />

            </li>
          </a>
        ))}
      </ul>
    </div>

    </div>
  )
}

export default Hero