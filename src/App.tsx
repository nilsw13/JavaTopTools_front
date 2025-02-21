
import './App.css'
import Footer from './components/Footer/Footer'
import ReposGrid from './components/Grid/ReposGrid'
import HomeHeader from './components/Header/HomeHeader'
import Hero from './components/Hero/Hero'
 './components/Hero/Hero'
 import {motion, AnimatePresence} from 'framer-motion'
import PreLoader from './components/Preloader/PreLoader'
import { useEffect, useState } from 'react'
import useReposStore from './stores/ReposStore'

function App() {


   

    const { getRepos, page} = useReposStore();
  
  
    const [initialLoading, setInitialLoading] = useState(true);
    
    useEffect(() => {
      const initializeData = async () => {
        try {
          await getRepos(page);
          
          setInitialLoading(false);
        } finally {
         setInitialLoading(false)
        }
      };
  
      setTimeout(() => {
            initializeData();
      }, 3000)
    }, []);





  return (

    <>



    
    <AnimatePresence>
    <div>

    {/* <PreLoader/> */}
    {initialLoading ? (
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
