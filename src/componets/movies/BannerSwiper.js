import { useContext } from "react"
import { contextProp } from "../../useContext/useContext"
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";

const BannerSwiper = () => {
    const { data } = useContext(contextProp)
    const swipe = data.slice(0,6)

    // distructureing
    const [f1, , ,f2,f3] = swipe
    const {large_cover_image:one} = f1
    const {large_cover_image:two} = f2
    const {large_cover_image:three} = f3
    console.log(swipe)
  return (
    <div className="bannerSwiper">
        <i><b>Recomended</b> for you</i>
         <div className="swiper">   
                <Swiper className="mySwiper">
                    <SwiperSlide><img src={one} alt="movie-pic" /></SwiperSlide>
                    <SwiperSlide><img src={two} alt="movie-pic" /></SwiperSlide>
                    <SwiperSlide><img src={three} alt="movie-pic" /></SwiperSlide>
                </Swiper>
               
         </div>
    </div>
  )
}

export default BannerSwiper
