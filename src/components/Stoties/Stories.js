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
              <img src="/images/david_barcroft.jpg" alt="" className="rounded-full" />
              <p className="text-center my-6">
              David has been passionate about martial arts since he was a child. After he was diagnosed with kidney disease and required dialysis, he had to temporarily step off the mats. But after receiving a kidney transplant and regaining his energy levels, David was able to return to the mats.
              </p>
              <h4>David Barcroft</h4>
              <h5 className="text-sm">Kidney Transplant Patient</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex flex-col items-center justify-center gap-6 md:w-2/3 w-full mx-auto mb-16">
              <img src="/images/brian_and_dan.jpg" alt="" className="rounded-full" />
              <p className="text-center my-6">
              After Brian was added to the liver transplant waiting list in summer 2022, a lifelong friend, Dan, stepped up to be his living donor. “He explained the living donation process to me, and in my mind, I’m thinking, ‘I’m doing this if I’m a match,’” Dan says.
              </p>
              <h4>Brian and Dan</h4>
              <h5 className="text-sm">Living-Donor Liver Transplant Donor Story</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-6 md:w-2/3 w-full mx-auto mb-16">
              <img src="/images/dale_brenner.jpg" alt="" className="rounded-full" />
              <p className="text-center my-6">
              Three years after suffering from a stroke, Dale's kidney did not recover with the rest of his body and he was disgnosed with kidney disease. Dale was on dialysis for 18 months before being added to the tranplant waiting list and beginning his search for a living donor. He was blown away when a stranger offered to be his living-donor in the midst of the COVID-19 pandemic.
              </p>
              <h4>Dale Brenner</h4>
              <h5 className="text-sm">Living-Donor Kidney Transplant Story</h5>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
