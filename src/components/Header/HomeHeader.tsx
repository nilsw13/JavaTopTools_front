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
        className='flex justify-center mx-auto mt-10 text-center w-sreen '>
            <header className="w-[75%] bg-white  shadow-lg rounded-lg">
             <div className="flex items-center justify-between p-4">
                <div className="flex items-center pl-4 space-x-2">
                   
                    <h1 className="pr-5 text-xs font-bold bg-red-200/60 md:text-xl text-primary whitespace-nowrap md:pl-4 md:pt-2 md:pb-2 md:pr-4">Java Top Tools</h1>
                </div>
                <div className="flex items-center gap-4 pr-2 md:space-x-2">
                    <a href="https://github.com/nilsw13/JavaTopTools_front">
                    <Github className="w-6 h-6 text-primary" />
                    </a>
                    
                    <a href="" className="text-red-400 hover:text-blue-500">
      <img src={logo} alt="logo" className="w-6 h-6 md:w-10 md:h-10" />
    </a>
                </div>
                </div>
      </header>
        </motion.div>
        </AnimatePresence>
  )
}

export default HomeHeader