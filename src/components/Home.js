import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Subscribe from '../components/Subscribe'
// import RegisterModel from './RegisterModel'
export default () => {
  return (
    <div>
      <Hero></Hero>
      {/* <RegisterModel></RegisterModel> */}
      <Introduction></Introduction>
      <Subscribe></Subscribe>
    </div>
  )
}
