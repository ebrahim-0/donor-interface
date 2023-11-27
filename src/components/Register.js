import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../Auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useGet from "../Hook/useGet";

export default function Register() {
  const auth = getAuth();
  const user = auth.currentUser;

  const { dataDonor } = useGet();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    bloodType: "",
    birthDate: "",
    phoneNumber: "",
    nationality: "",
    id: "",
    address: "",
    region: "",
    city: "",
    organType: "",
  });

  const [donate, setDonate] = useState(false);

  const [isIdValid, setIsIdValid] = useState(true);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [idFocus, setIdFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const [update, setUpdate] = useState(false);

  const colRef = collection(db, "donor");

  useEffect(() => {
    if (update) {
      setIsIdValid(true);
    } else {
      if (formData?.id?.length === 10) {
        const checkIfIdExists = async () => {
          if (formData.id) {
            const querySnapshot = await getDocs(
              query(colRef, where("id", "==", formData.id)),
            );
            setIsIdValid(querySnapshot.empty);
          }
        };

        checkIfIdExists();
      } else {
        setIsIdValid(false);
      }
    }
  }, [formData.id, update, colRef]);

  useEffect(() => {
    if (update) {
      if (formData.phoneNumber?.slice(4).length === 9) {
        setIsValidNumber(true);
      } else {
        setIsValidNumber(false);
      }
    } else {
      if (formData.phoneNumber.length === 9) {
        setIsValidNumber(true);
      } else {
        setIsValidNumber(false);
      }
    }
  }, [formData.phoneNumber, update]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isIdValid) {
      toast.error(
        "This ID is already registered. Please use a different one.",
        {
          position: toast.POSITION.TOP_RIGHT,
        },
      );
      return;
    }

    if (!user) {
      toast.info("You should log in first.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    try {
      if (formData.organType === "All Organs") {
        await addDoc(colRef, {
          name: formData.name,
          gender: formData.gender,
          bloodType: formData.bloodType,
          birthDate: formData.birthDate,
          phoneNumber: "+966" + formData.phoneNumber,
          nationality: formData.nationality,
          id: formData.id,
          address: formData.address,
          region: formData.region,
          city: formData.city,
          organType: "All Organs",
          userId: user.uid,
        });
      } else {
        await addDoc(colRef, {
          name: formData.name,
          gender: formData.gender,
          bloodType: formData.bloodType,
          birthDate: formData.birthDate,
          phoneNumber: "+966" + formData.phoneNumber,
          nationality: formData.nationality,
          id: formData.id,
          address: formData.address,
          region: formData.region,
          city: formData.city,
          organType: formData.organType,
          userId: user.uid,
        });
      }

      toast.success("Your request has been sent successfully.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    if (dataDonor.length !== 0) {
      setFormData(dataDonor);
      setUpdate(true);
      setIsIdValid(true);
    }
  }, [dataDonor]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(db, "donor", dataDonor.uniqueId), { ...formData });

      toast.success("Your Data has been Updated successfully.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "donor", dataDonor.uniqueId));

      toast.success("Your Data has been Deleted successfully.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section className="bg-blue-50 flex justify-center items-center">
      <form
        className="bg-white rounded-md px-8 pt-6 pb-8 my-7 md:w-1/2 mx-6 shadow-xl"
        onSubmit={update ? handleUpdate : handleSubmit}
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
            defaultValue={formData.name}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              value={formData.gender ? formData.gender : "Gender"}
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
              value={formData.bloodType ? formData.bloodType : "Blood Type"}
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              id="bloodType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
            >
              <option disabled value={"Blood Type"}>
                Blood Type
              </option>
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"AB"}>AB</option>
              <option value={"O"}>O</option>
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
              defaultValue={formData.birthDate}
              required
              onChange={(e) =>
                setFormData({ ...formData, [e.target.id]: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
              id="birthDate"
              type="date"
              onClick={(e) => e.target.showPicker()}
              max={new Date().toISOString().split("T")[0]}
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
            <div className="flex items-center shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline">
              <span>+996</span>
              <input
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.id]: e.target.value,
                  });
                }}
                maxLength="9"
                onInput={(e) =>
                  (e.target.value = e.target.value.slice(0, e.target.maxLength))
                }
                onFocus={() => setNumberFocus(true)}
                onBlur={() => setNumberFocus(false)}
                className="w-full pl-1 py-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline"
                id="phoneNumber"
                type="number"
                placeholder="Phone Number"
                defaultValue={formData.phoneNumber.slice(4)}
              />
            </div>
            <span
              className={
                formData.phoneNumber && !isValidNumber && numberFocus
                  ? "text-red-500 text-xs italic"
                  : "absolute left-[-9999px]"
              }
            >
              unvalid Phone Number .
            </span>
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
            defaultValue={formData.id}
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nationality"
          >
            Nationality
          </label>
          <input
            defaultValue={formData.nationality}
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
        <div className="md:flex justify-between">
          <div className="mb-4 md:w-[47%]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="region"
            >
              Region
            </label>
            <input
              defaultValue={formData.region}
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
              defaultValue={formData.city}
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
            defaultValue={formData.address}
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
            value={formData.organType ? formData.organType : "Organ Type"}
            required
            onChange={(e) => {
              // if (e.target.value === "All Organs") {
              //   setFormData({
              //     ...formData,
              //     [e.target.id]: ["Liver", "Kidney", "Kidney"],
              //   });
              // } else {
              setFormData({ ...formData, [e.target.id]: e.target.value });
              // }
            }}
            id="organType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300 transition-all duration-300 focus:shadow-outline disabled:opacity-50 "
          >
            <option disabled value={"Organ Type"}>
              Organ Type
            </option>
            <option value={"All Organs"}>All Organs</option>
            <option value={"Kidney"}>Kidney</option>
            <option value={"Liver"}>Liver</option>
          </select>
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

        {update ? (
          <div className="flex justify-between">
            <button
              disabled={
                !donate ||
                !isValidNumber ||
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
                formData.address.length === 0 ||
                formData.region.length === 0 ||
                formData.city.length === 0 ||
                formData.organType.length === 0
              }
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-300 focus:shadow-outline disabled:opacity-50 "
              type="submit"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-red-300 focus:shadow-outline disabled:opacity-50 "
              type="button"
            >
              Delete Your Data
            </button>
          </div>
        ) : (
          <button
            disabled={
              !donate ||
              !isIdValid ||
              !isValidNumber ||
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
        )}
      </form>
      <ToastContainer />
    </section>
  );
}
