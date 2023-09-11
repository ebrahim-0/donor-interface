export default function OrganDonation() {
  return (
    <section id="organ-donation" className="bg-blue-100">
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
            Anyone can become an organ donor, no matter your age. Your medical
            condition at the time of death will determine what organs and tissue
            can be donated. If you would like to declare your choice to be an
            organ donor, be sure to enroll in your state’s donor registry and
            share your decision with your family and friends. Your decision to
            donate life can help to save many lives.
          </p>
        </div>
        <div className="grid items-center xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-white px-5 h-full grid justify-items-center rounded-md shadow-2xl">
            <img src="/images/icon-a-kidney.png" alt="Kidney" />
            <h3 className="text-2xl font-bold my-4">Kidney</h3>

            <p className="py-5 text-slate-800">
              The kidneys are two bean-shaped organs, each about the size of a
              fist. They are located just below the rib cage, one on each side
              of your spine. Healthy kidneys filter about a half cup of blood
              every minute, removing wastes and extra water to make urine.
            </p>
          </div>
          <div className="bg-white px-5 h-full grid justify-items-center rounded-md shadow-2xl">
            <img src="/images/icon-a-heart.png" alt="Heart" />
            <h3 className="text-2xl font-bold">Heart</h3>
            <p className="py-5 text-slate-800">
              The heart is a muscular organ about the size of a fist, located
              just behind and slightly left of the breastbone. The heart pumps
              blood through the network of arteries and veins called the
              cardiovascular system.
            </p>
          </div>
          <div className="bg-white px-5 h-full grid justify-items-center rounded-md shadow-2xl">
            <img src="/images/icon-a-lung.png" alt="Lung" />
            <h3 className="text-2xl font-bold">Lung</h3>
            <p className="py-5 text-slate-800">
              The lungs are a pair of cone-shaped organs made up of spongy,
              pinkish-gray tissue. They take up most of the space in the chest
              (thorax). The lungs are surrounded by a membrane called the
              pleura.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
