
import './App.css'
import Footer from './components/Footer/Footer'
import ReposGrid from './components/Grid/ReposGrid'
import HomeHeader from './components/Header/HomeHeader'
import Hero from './components/Hero/Hero'
 './components/Hero/Hero'
 import {motion, AnimatePresence} from 'framer-motion'
import PreLoader from './components/Preloader/PreLoader'
import { useEffect, useState } from 'react'

function App() {


    const [loading, setLoading] = useState(true)

  
  

    const handlePreloder = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
    }, 3000)
    }

    useEffect(() => {
      handlePreloder()
    }, [])





  return (

    <>



    
    <AnimatePresence>
    <div>

    {/* <PreLoader/> */}
    {loading ? (
          <PreLoader />

        ) :
    
        
              <motion.div
              className="overflow-x-hidden">

                <section className=' bg-stone-200'>
                  <HomeHeader/>
                </section>


                <section className='bg-stone-200'>
                  <Hero/>
                </section>

                

                <section className='p-10 bg-white'>
                <ReposGrid />
                </section>



                <section>

                  <Footer/>

                </section>
                </motion.div>

      

      }
    </div>

    </AnimatePresence>

      </>
    
  )
}

export default App
