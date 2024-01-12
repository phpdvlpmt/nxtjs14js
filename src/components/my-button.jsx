import React from 'react'

const MyButton = ({...props}) => {
  return (
   <>
   <button {...props} className='bg-red-500 px-3 py-4'  >Klikni pro změnu proměnné</button>
   </>
  )
}

export default MyButton