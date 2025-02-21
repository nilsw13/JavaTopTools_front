

import { Loader2} from 'lucide-react'

import RepoCard from '../RepoCard/RepoCard'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from 'framer-motion'

import useReposStore from '@/stores/ReposStore'

export  interface GithubRepo {
    id: number
    name: string
    html_url: string
    description: string
    stargazers_count: number
    created_at: string
    updated_at: string
    owner: {
        avatar_url: string
        login: string

    }

}


function ReposGrid() {

    
   

const { repos, error , loading, setPage, currentPage} = useReposStore()

   



    











    return (
        <>
        <AnimatePresence>
            <div className="container mx-auto ">
                
                    {error && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='p-4 text-center text-white bg-red-500 rounded-lg'
                        >
                            {error}
                        </motion.div>
                    )}
                
    
               
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center items-center min-h-[600px]"
                        >
                            <Loader2 className='w-20 h-20 animate-spin'/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col items-center mt-10'
                        >
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {repos.slice(0,6).map((repo) => (
                                    <motion.div
                                    
                                        key={repo.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ 
                                            opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ 
                                            delay: 0.2,
                                            duration: 0.5,
                                            type: 'tween',
                                            stiffness: 100
                                         }}
                                    >
                                        <RepoCard repo={repo} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                
    
                <div className="gap-4 mx-auto my-20 rounded-lg w-fit">
                    <Button 
                        onClick={() => setPage(currentPage- 1)}
                       
                    >
                        Précédent
                    </Button>
    
                    <span className='inline-block px-3 font-bold'>
                        Page {currentPage} 
                    </span>
    
                    <Button 
                        onClick={() => setPage(currentPage+ 1)}
                        
                    >
                        Suivant
                    </Button>
                </div>
            </div>
            </AnimatePresence>
        </>
    );
}

export default ReposGrid