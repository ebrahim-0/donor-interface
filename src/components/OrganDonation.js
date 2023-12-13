export default function OrganDonation() {
  return (
    <section id="organ-donation" className="bg-blue-50">
      <main className="w-4/5 mx-auto py-16">
        <div className="text-xl">
          <h2 className="text-5xl font-bold text-center mb-9">
            Organ Donation
          </h2>
          <p className="pt-5">What organs can be transplanted?</p>
          <p className="py-5">
            <span className="font-bold">Donated organs —</span> from deceased
            donors or living donors.
          </p>
          <p className="py-5 text-base">
            Anyone can become an organ donor, no matter your age. If you would like to declare your choice to be an
            organ donor, be sure to enroll in your state’s donor registry and
            share your decision with your family and friends. Your decision to
            donate life can help to save many lives.
          </p>
        </div>
        <div className="grid items-center xl:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
          <div className="bg-white px-5 h-full grid justify-items-center rounded-md shadow-2xl">
            <img src="/images/kidney.png" alt="Kidney" width="350" height="350"/>
            <h3 className="text-2xl font-bold my-0">Kidney</h3>

            <p className="py-5 text-slate-800">
            Two bean-shaped organs located in the back of the abdomen, on either side of the spine. They are part of the urinary system and perform several vital functions in the body.
            </p>
          </div>
          <div className="bg-white px-5 h-full grid justify-items-center rounded-md shadow-2xl">
            <img src="/images/liver.png" alt="Liver" width="350" height="350"/>
            <h3 className="text-2xl font-bold my-0">Liver</h3>
            <p className="py-5 text-slate-800">
            A large, reddish-brown organ located in the upper right side of the abdomen, below the diaphragm. It is one of the most vital organs in the human body and performs numerous essential functions.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
