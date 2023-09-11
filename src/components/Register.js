import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../Auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const auth = getAuth();
  const user = auth.currentUser;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    bloodType: "",
    birthDate: "",
    phoneNumber: "",
    nationality: "",
    id: "",
    nationalId: "",
    address: "",
    region: "",
    city: "",
    organType: "",
  });
  const [terms, setTerms] = useState(false);
  const [donate, setDonate] = useState(false);

  const [isIdValid, setIsIdValid] = useState(null);
  const [idFocus, setIdFocus] = useState(false);

  const colRef = collection(db, "donor");

  useEffect(() => {
    if (formData.id.length === 10) {
      const checkIfIdExists = async () => {
        if (formData.id) {
          const querySnapshot = await getDocs(
            query(colRef, where("id", "==", formData.id))
          );
          setIsIdValid(querySnapshot.empty);
        }
      };

      checkIfIdExists();
    } else {
      setIsIdValid(false);
    }
  }, [formData.id, colRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isIdValid) {
      toast.error(
        "This ID is already registered. Please use a different one.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    if (!user) {
      alert("You should log in first.");
      navigate("/login");
      return;
    }

    try {
      await addDoc(colRef, {
        name: formData.name,
        gender: formData.gender,
        bloodType: formData.bloodType,
        birthDate: formData.birthDate,
        phoneNumber: formData.phoneNumber,
        nationality: formData.nationality,
        id: formData.id,
        nationalId: formData.nationalId,
        address: formData.address,
        region: formData.region,
        city: formData.city,
        organType: formData.organType,
        userId: user.uid,
      });

      navigate("/");
      toast.done("Your request has been sent successfully.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  console.log(formData);

  return (
    <section className="bg-blue-100 flex justify-center items-center">
      <form
        className="bg-white rounded-md px-8 pt-6 pb-8 my-7 md:w-1/2 mx-6 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-9">
          Register as a Donor
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="md:flex justify-between">
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              required
              id="gender"
              defaultValue="Gender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
            >
              <option disabled value={"Gender"}>
                Gender
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="blood-type"
            >
              Blood Type
            </label>
            <select
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              id="bloodType"
              defaultValue="Blood Type"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
            >
              <option disabled value={"Blood Type"}>
                Blood Type
              </option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
            </select>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="birth-date"
            >
              Birth Date
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              id="birthDate"
              type="date"
              placeholder="Birth Date"
            />
          </div>
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="id"
          >
            Id
          </label>
          <input
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            id="id"
            type="number"
            maxLength="10"
            onInput={(e) =>
              (e.target.value = e.target.value.slice(0, e.target.maxLength))
            }
            placeholder="Id"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline disabled:opacity-50 "
            onFocus={() => setIdFocus(true)}
            onBlur={() => setIdFocus(false)}
          />

          <span
            className={
              formData.id && !isIdValid && idFocus
                ? "text-red-500 text-xs italic"
                : "absolute left-[-9999px]"
            }
          >
            unvalid Id It must be 10 digits and unique for each donor .
          </span>
        </div>
        <div className="md:flex justify-between">
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nationality"
            >
              Nationality
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              id="nationality"
              type="text"
              placeholder="Nationality"
            />
          </div>
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="national-id"
            >
              National ID
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              id="nationalId"
              type="number"
              placeholder="National ID"
            />
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="region"
            >
              Region
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline disabled:opacity-50 "
              id="region"
              type="text"
              placeholder="Region"
            />
          </div>
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline disabled:opacity-50 "
              id="city"
              type="text"
              placeholder="City"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline disabled:opacity-50 "
            id="address"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="organ-type"
          >
            Organ Type
          </label>
          <select
            required
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            id="organType"
            defaultValue="Organ Type"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline disabled:opacity-50 "
          >
            <option disabled value={"Organ Type"}>
              Organ Type
            </option>
            <option value={"Kidney"}>Kidney</option>
            <option value={"Liver"}>Liver</option>
            <option value={"Heart"}>Heart</option>
          </select>
        </div>
        <div
          className="mb-4  flex gap-3 items-center"
          onClick={() => setTerms(!terms)}
        >
          <input
            required
            className="leading-tight mt-1"
            type="checkbox"
            id="checkboxTerms"
            checked={terms}
            onChange={() => {}}
          />
          <label className="text-gray-700 text-sm font-bold">
            I agree to the terms and conditions
          </label>
        </div>
        <div
          className="mb-4  flex gap-3 items-center"
          onClick={() => setDonate(!donate)}
        >
          <input
            required
            className="leading-tight mt-1"
            type="checkbox"
            id="checkboxDonate"
            checked={donate}
            onChange={() => {}}
          />
          <label className="text-gray-700 text-sm font-bold">
            I accept to donate my organs in the event of my death.
          </label>
        </div>

        <button
          disabled={
            !terms ||
            !donate ||
            !isIdValid ||
            formData.id.length !== 10 ||
            formData.id === "" ||
            formData.name.length === 0 ||
            formData.name.length === 0 ||
            formData.gender.length === 0 ||
            formData.bloodType.length === 0 ||
            formData.birthDate.length === 0 ||
            formData.phoneNumber.length === 0 ||
            formData.nationality.length === 0 ||
            formData.id.length === 0 ||
            formData.nationalId.length === 0 ||
            formData.address.length === 0 ||
            formData.region.length === 0 ||
            formData.city.length === 0 ||
            formData.organType.length === 0
          }
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-300 focus:shadow-outline disabled:opacity-50 "
          type="submit"
        >
          Register
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}
