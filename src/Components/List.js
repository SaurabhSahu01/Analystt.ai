import React from 'react'

function List(props) {
    // console.log(user.address.city);
    console.log(props.data?.address?.city,'helo')
  return (
    <div className='w-10/12 mx-auto'>
        <ul className='flex justify-between'>
            
        </ul>
    </div>
  )
}

export default List