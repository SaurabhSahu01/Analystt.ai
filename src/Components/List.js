import React, { useState } from 'react';
import "./List.css";
function List({ data }) {

  const [visible, setvisible] = useState(false);

  function clickHandler() {
    setvisible((visible) => {
      return (!visible);
    });
  }


  return (
    <div className='w-10/12 mx-auto  bg-slate-100 p-2 rounded-xl shadow-sm text-sm tracking-wide'>
      <ul className='w-10/12 mx-auto h-[150px] my-auto grid grid-cols-5 items-center place-items-start gap-7'>
        <li className='text-lg'>{data?.company?.name}</li>
        <div>
          <p className='font-semibold text-lg'>Contact</p>
          <li>{data?.name}</li>
        </div>
        <div>
          <p className='font-semibold text-lg'>City</p>
          <li>{data?.address?.city}</li>
        </div>
        <div>
          <p className='font-semibold text-lg'>Street</p>
          <li>{data?.address?.street}</li>
        </div>
        <button className='w-20 p-2 bg-red-500 rounded-xl text-yellow-50 font-semibold self-center place-self-end' onClick={clickHandler}>{!visible ? "Details" : "Hide"}</button>
      </ul>
      <div className={!visible ? 'flex flex-wrap w-9/12 mx-auto justify-between items-center hiddenDiv' : 'flex flex-wrap w-9/12 mx-auto justify-between items-center showDiv bg-white rounded-lg p-4 my-5 shadow-lg'}>
        <div className='w-11/12 mx-auto'>
          <div className='flex justify-between items-center'>
            <div>
              <p className="font-semibold text-lg">Description</p>
              <p>{data?.company?.catchPhrase},</p>
              <p>{data?.company?.bs}</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Website</p>
              <p>{data?.website}</p>
            </div>
          </div>
          <div className='w-full mx-auto flex justify-between items-center mt-5'>
            <ul className='flex flex-col gap-4'>
              <div>
                <p className="font-semibold text-lg">Contact Person</p>
                <p>{data?.name}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Username</p>
                <p>{data?.username}</p>
              </div>
            </ul>
            <ul className='flex flex-col gap-3'>
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p>{data?.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Address</p>
                <p>{data?.address?.street}, {data?.address?.suite}, {data?.address?.city}, {data?.address?.zipcode}</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List