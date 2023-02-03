import { useState, useEffect } from "react";
import List from "./Components/List";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function App() {
  const [userdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [index, setindex] = useState(1);

  function updateIndex(index) {
    setindex(index);
    console.log(index);
  }

  function indexInc() {
    setindex((index) => {
      if (index < 4) return index + 1;
      else return index;
    });
  }

  function indexDec() {
    setindex((index) => {
      if (index > 1) return index - 1;
      else return index;
    });
  }

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
    <div>
      <p className="text-center text-3xl font-semibold text-red-500 tracking-widest">Analystt.ai Users List</p>
      <div className="min-h-[90vh] my-auto overflow-y-scroll flex flex-col justify-around gap-5">
        {loading ? <p className="font-bold text-3xl text-center text-red-500">Loading...</p> : userdata.map((user, ind) => {
          return (ind + 1 > (3 * (index - 1)) && ind + 1 <= (3 * (index))) ? <List data={userdata[ind]} key={userdata[ind].id}></List> : <></>
        })}
      </div>
      <div className="w-full fixed bottom-5 z-50">
        <ul className="md:w-6/12 sm:w-10/12 mx-auto flex justify-around items-center mt-2 cursor-pointer select-none">
          <ArrowBackIosIcon onClick={indexDec}></ArrowBackIosIcon>
          {userdata.map((user, ind) => {
            let times = userdata.length / 3;
            if (userdata.length % 3 !== 0) {
              times = times + 1;
            }
            if (ind !== 0 && ind <= times) {
              return (ind === index) ? <li onClick={() => updateIndex(ind)} className="bg-red-500 px-[20px] rounded-full text-white font-semibold">{ind}</li> : <li onClick={() => updateIndex(ind)} className="font-semibold">{ind}</li>;
            }
            else return <></>;
          })}
          <ArrowForwardIosIcon onClick={indexInc}></ArrowForwardIosIcon>
        </ul>
      </div>
    </div>
  );
}

export default App;
