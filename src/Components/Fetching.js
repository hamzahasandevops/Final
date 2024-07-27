import React, { useEffect, useState } from "react";

export default function Fetching() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/create")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.pro_name}</td>
                  <td>{d.pro_name1}</td>
                  <td>{d.images}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
