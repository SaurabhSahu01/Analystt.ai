import { useState, useEffect } from "react";
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
    <div className="m-10 h-[67vh] my-auto bg-red-500 overflow-y-hidden rounded-md">
      {loading ? <p>loading...</p> : userdata.map((user, index) => {
        if(index < 3)
        return <List data = {user} key={user.id}></List>
        else return <></>
      })}
    </div>
  );
}

export default App;
