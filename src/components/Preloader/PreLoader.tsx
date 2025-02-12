import javaLogo from '@/assets/java.svg'
import {motion, AnimatePresence} from 'framer-motion'
import { LoaderCircle } from 'lucide-react';
import { log } from 'node:console';
import { useState } from 'react';



interface PreLoaderProps {
    loadingMaxNumber: number;
    duration: number;
}




function PreLoader() {


    



        

        return (
            <AnimatePresence>
            <motion.div 
          
            className="absolute inset-0 flex items-center justify-center w-screen h-screen bg-black ">
        
        
        <motion.div 
           transition={{ duration: 5.2 }}
            >
        
                        <motion.img 
        
                        initial={{ opacity: 0.2, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, repeatType: "reverse", repeat: Infinity }}
                        src={javaLogo} alt="" className='mx-auto w-14 h-14'/>  



                    <div className='flex flex-row items-center justify-center gap-4'>
                        <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3.2, delay:0.2 }}
                        className='mt-8 text-xs font-bold text-white'
                        >
                                Loading

                        </motion.h1>

                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3.2, delay:0.2 }}
                        >
                        <LoaderCircle className='w-6 h-6 mt-8 text-white animate-spin'/>

                        </motion.div>

                    </div>
        
                        
        
                </motion.div>
        
          </motion.div>
            </AnimatePresence>
          )
        }

export default PreLoader