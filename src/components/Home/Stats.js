export default function Stats() {
  return (
    <>
      <section className="w-4/5 mx-auto relative -mt-36">
        <div className="grid items-center justify-items-center xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-16">
          <div className="p-9 bg-blue-400 rounded text-slate-800 h-full text-lg">
            <img
              src="/images/waiting-list.png"
              alt="Waiting List"
              className="object-cover max-w-[15%]"
            />
            <p>104,234+</p>
            <p>
              Number of men, women, and children on the national transplant
              waiting list.
            </p>
          </div>
          <div className="p-9 bg-blue-400 rounded text-slate-800 h-full text-lg">
            <img
              src="/images/hourglass.png"
              alt="Hourglass"
              className="object-cover max-w-[15%]"
            />
            <p>17+</p>
            <p>People die each day waiting for an organ transplant.</p>
          </div>
          <div className="p-9 bg-blue-400 rounded text-slate-800 h-full text-lg">
            <img
              src="/images/organ-donation.png"
              alt="Organ Donation"
              className="object-cover max-w-[15%]"
            />
            <p>You can help</p>
            <p>Every donor can save 8 lives and enhance over 75 more.</p>
          </div>
        </div>
      </section>
    </>
  );
}
