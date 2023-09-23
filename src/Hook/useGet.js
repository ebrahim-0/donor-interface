import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../Auth";
import { onAuthStateChanged } from "firebase/auth";

export default function useGet() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [role, setRole] = useState("");
  const [dataRole, setDataRole] = useState("");
  const [id, setId] = useState("");
  const [dataDonor, setDataDonor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "donor");
      const querySnapshot = await getDocs(colRef);
      const fetchedItems = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        uniqueId: doc.id,
      }));
      setData(fetchedItems);
    };

    fetchData();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        data.forEach((data) => {
          if (data.userId === user.uid) {
            setId(data.id);
            setDataDonor(data);
          }
        });
      }
    });
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "roles");
      const querySnapshot = await getDocs(colRef);
      const fetchedItems = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setDataRole(fetchedItems);
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Array.from(dataRole).forEach((data) => {
          if (data.id === user.uid) {
            setRole(data.role);
          }
        });
      }
    });
  }, [dataRole]);

  return { data, id, user, role, dataDonor, dataRole };
}
