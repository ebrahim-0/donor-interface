import { BiUser } from "react-icons/bi";
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
              Lorem Ipsum is simply dummy
            </h3>
            <div className="flex gap-[6px] mb-3">
              <MdCalendarMonth className="text-2xl" />
              <span>18 Sep 2021</span>
              <BiUser className="text-2xl" />
              <span>Admin</span>
            </div>

            <p className="text-slate-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog2.jpg" alt="" className="w-full h-auto" />
            <h3 className="my-7 text-xl font-bold">
              Lorem Ipsum is simply dummy
            </h3>
            <div className="flex gap-[6px] mb-3">
              <MdCalendarMonth className="text-2xl" />
              <span>18 Sep 2021</span>
              <BiUser className="text-2xl" />
              <span>Admin</span>
            </div>
            <p className="text-slate-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog3.jpg" alt="" className="w-full h-auto" />
            <h3 className="my-7 text-xl font-bold">
              Lorem Ipsum is simply dummy
            </h3>
            <div className="flex gap-[6px] mb-3">
              <MdCalendarMonth className="text-2xl" />
              <span>18 Sep 2021</span>
              <BiUser className="text-2xl" />
              <span>Admin</span>
            </div>
            <p className="text-slate-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
