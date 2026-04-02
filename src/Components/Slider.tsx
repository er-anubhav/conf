import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          {/* Slide Content 1 */}
          <p className="text-center">Slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide Content 2 */}
          <p className="text-center">Slide 2</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide Content 3 */}
          <p className="text-center">Slide 3</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
