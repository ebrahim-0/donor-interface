import "./About.css";

export default function About() {
  return (
    <section id="about" className="w-4/5 mx-auto py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
        <div>
          <img
            src="/images/header-transplant.png"
            alt="Waiting List"
            className="object-cover "
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="pt-5">
            Organ donation is the process of surgically removing an organ or
            tissue from one person (the organ donor) and placing it into another
            person (the recipient). Transplantation is necessary because the
            recipient’s organ has failed or has been damaged by disease or
            injury. Organ donation can occur after the donor has died (deceased
            donor) or, in some cases, while the donor is alive (living donor).
          </p>
          <p className="py-5">
            Organ and tissue donation helps others by giving them a second
            chance at life. Learn more about the donation process–and how to
            become an organ donor.
          </p>
        </div>
      </div>
    </section>
  );
}
