import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [song, setSong] = useState(1);
  function changeLook(event) {
    var result = [];
    let albumTitle = event.target.name;
    console.log(typeof albumTitle);
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/albums/${albumTitle}`, {
        method: "GET",
      });
      const json = await res.json();
      console.log(json.song);
      // for (var i in json.song)
      result.push(json.song);
      setSong(0);
      setData(result);
    };
    fetchData();
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/albums");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item._Id}>
          <h1>{item.title}</h1>

          {song >= 1 && (
            <button name={item.title} onClick={changeLook} type="submit">
              Check Songs
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default App;
