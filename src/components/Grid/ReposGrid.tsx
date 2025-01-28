import  { useEffect } from 'react'

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

    
   

const {getRepos, repos, page, error , loading, setPage, currentPage} = useReposStore()

    useEffect(() => {
        const data = getRepos(page)
        console.log("data retourné par getrepos()", data)
        
    }, [page]) // appelé à chaque changement de page
















    return (
        <>
            <div className="container mx-auto ">
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='bg-red-500 text-white p-4 rounded-lg text-center'
                        >
                            {error}
                        </motion.div>
                    )}
                </AnimatePresence>
    
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center items-center min-h-[600px]"
                        >
                            <Loader2 className='animate-spin w-20 h-20'/>
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
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {repos.slice(0,6).map((repo) => (
                                    <motion.div
                                        key={repo.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <RepoCard repo={repo} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
    
                <div className="gap-4 my-20 w-fit mx-auto rounded-lg">
                    <Button 
                        onClick={() => setPage(currentPage- 1)}
                       
                    >
                        Précédent
                    </Button>
    
                    <span className='inline-block font-bold px-3'>
                        Page {currentPage} 
                    </span>
    
                    <Button 
                        onClick={() => setPage(currentPage+ 1)}
                        
                    >
                        Suivant
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ReposGrid