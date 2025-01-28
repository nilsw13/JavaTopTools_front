import { Github } from "lucide-react"

import logo from '../../assets/java.svg'
import { AnimatePresence, motion } from "framer-motion"
function HomeHeader() {

  return (

    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1 , y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        className='w-sreen  flex justify-center mx-auto  mt-10 text-center '>
            <header className="w-[75%] bg-white  shadow-lg rounded-lg">
             <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2 pl-4">
                   
                    <h1 className="bg-red-200/60   text-xs md:text-xl font-bold text-primary whitespace-nowrap md:pl-4 md:pt-2 md:pb-2 md:pr-4 pr-5">Java Top Tools</h1>
                </div>
                <div className="flex items-center gap-4 md:space-x-2 pr-2">
                    <Github className="w-6 h-6 text-primary" />
                    
                    <a href="">
                      <img src={logo} alt="logo" className="md:w-10 md:h-10 text-primary" />
                    </a>
                </div>
                </div>
      </header>
        </motion.div>
        </AnimatePresence>
  )
}

export default HomeHeader