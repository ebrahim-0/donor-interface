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
          Welcome to our compassionate donor registry system, where the legacy of life is honored even in the event of death. We recognize the profound impact each individual can have, and our mission is to facilitate the selfless act of organ and tissue donation. Through a user-friendly interface and a robust database, our aim is to connect potential donors with those in need, fostering hope and renewal within our community. Advanced technology and stringent privacy measures ensure that the wishes of each registered donor are respected and carried out with care. The registry system serves as a vital resource for transplant centers and healthcare providers, maintaining an up-to-date and comprehensive database of potential donors. This enables timely and accurate matches between donors and recipients, maximizing the chances of successful transplantation. 
          </p>
          <p className="py-5">
          At the core of our donor registry system is the belief that every donation has the power to save and improve lives. By joining our platform, you become a part of a compassionate community committed to making a positive impact on the lives of those in need. Together, we can create a future where more lives are saved, families find solace, and hope is restored.
          </p>
          <p className="py-5 font-bold">
          Join us today and embark on this life-affirming journey.
          </p>
        </div>
      </div>
    </section>
  );
}
