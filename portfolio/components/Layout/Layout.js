import React from 'react'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
   <main>
    <Nav/>
{children}
<Footer/>
   </main>
  )
}

export default Layout