import { MdCalendarMonth } from "react-icons/md";

export default function Blog() {
  return (
    <section className="bg-blue-50" id="blog">
      <main className="w-4/5 mx-auto py-16">
        <h2 className="text-5xl font-bold text-center mb-9">Blog & News</h2>
        <div className="grid items-center  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-white p-5 h-full grid justify-items-start rounded-md shadow-2xl">
            <img src="/images/blog1.jpg" className="w-full h-auto" alt="" />
            <h3 className="my-7 text-xl font-bold ">
            KFSH&RC performed 1158 organ transplants in the past year
            </h3>
            <div className="flex gap-[6px] mb-3">
              <MdCalendarMonth className="text-2xl" />
              <span>18 Sep 2015</span>
              
            </div>

            <p className="text-slate-800">
            The General Organization of King Faisal Specialist Hospital and Research Centre succeeded in carrying out 1158 transplant operations in 2015. It made great records in the number of transplants and excellence in various specializations which included heart, lung, liver, bone, kidney and pancreas, bone marrow and stem cells. 
            </p>
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog2.jpg" alt="" className="w-full h-auto" />
            <h3 className="my-7 text-xl font-bold">
            KFSH&RC Performs World's First Fully Robotic Liver Transplant
            </h3>
            <div className="flex gap-[6px] mb-3">
              <MdCalendarMonth className="text-2xl" />
              <span>27 Sep 2023</span>
              
            </div>
            <p className="text-slate-800">
            In a historic achievement, the Organ Transplant Center of Excellence (OTCoE) team at King Faisal Specialist Hospital & Research Centre (KFSH&RC) has successfully performed the world's first fully robotic liver transplant in the Kingdom of Saudi Arabia, a move that solidifies KFSH&RC's position as a global leader in minimally invasive transplant surgery.
            </p>
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog3.jpg" alt="" className="w-full h-auto" />
            <h3 className="my-7 text-xl font-bold">
            Organs of a 22 years old 'brain-dead' man save lives of 5 people 
            </h3>
            <div className="flex gap-[6px] mb-3">
              <MdCalendarMonth className="text-2xl" />
              <span>28 Mar 2023</span>
       
            </div>
            <p className="text-slate-800">
            A 22 years old ‘brain-dead’ man in Riyadh has saved the lives of 5 people after donating his organs, the Saudi Center for Organ Transplant (SCOT) announced. SCOT said that the medical team has succeeded in transferring the man’s organs to 5 patients, noting that he had donated his organs before death.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
