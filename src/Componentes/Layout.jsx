import React from 'react'
import { Navbar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout = () => {
    return (
        <>

            <Navbar />
            <main className='d-Flex justify-content-center align-items-center vh-100' >
                <Outlet />
            </main>
            <Footer />

        </>
    )
}
