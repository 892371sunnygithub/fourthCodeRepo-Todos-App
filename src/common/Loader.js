import React from 'react'
import { Audio, Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
//     <Audio
//   height="180"
//   width="180"
//   radius="9"
//   color="red"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// />

<Bars
height="280"
width="280"
color="#0074B2"
ariaLabel="bars-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>
  )
}

export default Loader