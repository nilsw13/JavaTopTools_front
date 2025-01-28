
import './App.css'
import Footer from './components/Footer/Footer'
import ReposGrid from './components/Grid/ReposGrid'
import HomeHeader from './components/Header/HomeHeader'
import Hero from './components/Hero/Hero'
 './components/Hero/Hero'

function App() {








  return (
    
    <div
    className=" ">

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
      </div>
    
  )
}

export default App
