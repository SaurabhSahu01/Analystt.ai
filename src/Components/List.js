import React from 'react'

function List({data}) {
  function clickhandler(){

  }
  return (
    <div className='w-10/12 mx-auto  bg-slate-100 my-3 p-2 rounded-xl'>
        <ul className='w-10/12 mx-auto h-[100%] my-auto flex justify-between items-center'>
            <li>{data?.id}</li>
            <li>{data?.address?.city}</li>
            <li>{data?.address?.street}</li>
            <button className='w-20 p-2 bg-red-500 rounded-xl text-yellow-50' onClick={clickhandler}>View</button>
        </ul>
        <div className='w-10/12 mx-auto rounded-xl bg-red-200'>
            <p>Description</p>
            <p>{data?.company?.catchPhrase}</p>
        </div>
    </div>
  )
}

export default List