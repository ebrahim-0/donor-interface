import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "./Stories.css";

export default function Stories() {
  return (
    <section className="story xl:py-[100px] py-10 text-slate-200" id="patients">
      <div className="w-4/5 mx-auto relative z-10 text-lg font-medium">
        <h1 className="text-center mb-16 text-white text-5xl font-bold">
          Patients Stories
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper cursor-default"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-6 md:w-2/3 w-full mx-auto mb-16">
              <img src="/images/client1.jpg" alt="" className="rounded-full" />
              <p className="text-base text-center my-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <h4>John doe</h4>
              <h5 className="text-sm">Patient of Neuorology</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex flex-col items-center justify-center gap-6 md:w-2/3 w-full mx-auto mb-16">
              <img src="/images/client2.jpg" alt="" className="rounded-full" />
              <p className="text-base text-center my-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <h4>John doe</h4>
              <h5 className="text-sm">Patient of Neuorology</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-6 md:w-2/3 w-full mx-auto mb-16">
              <img src="/images/client3.jpg" alt="" className="rounded-full" />
              <p className="text-base text-center my-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <h4>John doe</h4>
              <h5 className="text-sm">Patient of Neuorology</h5>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
