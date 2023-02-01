import { useState, useEffect } from "react";
import _ from "lodash";
import List from "./Components/List";
function App() {
  const [userdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(true)
  async function userData() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => { setuserdata(data); setloading(false); })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    userData();
  }, [])

  return (
    <div className="m-5">
      {loading ? <p>loading...</p> : userdata.map((user, index) => {
        return <List data = {user} key={user.id}></List>
      })}
      <List />
    </div>
  );
}

export default App;
