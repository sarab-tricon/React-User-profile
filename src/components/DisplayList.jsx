

import { useEffect, useState } from "react";
import { loadUsers } from "../data/users";
import DisplayItem from "./DisplayItem";

export default function DisplayList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const users = await loadUsers(30);
      setList(users);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Loaded Users: {list.length}</h2>

      <div className="grid-layout">
        {list.map((u, index) => (
          <DisplayItem
            key={index}
            name={`${u.name.first} ${u.name.last}`}
            age={u.dob.age}
            city={u.location.city}
            image={u.picture.medium}
          />
        ))}
      </div>
    </div>
  );
}
