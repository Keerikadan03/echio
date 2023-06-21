'use client';
import './globals.css'
import Navbar from './components/Navbar';


export default function Home() {


  return (
    <>

      <div className='w-screen'>

        <Navbar></Navbar>
        <div>
          <h1 className="text-3xl font-bold underline">Landing page</h1>
        </div>

      </div>

    </>
  )
}
