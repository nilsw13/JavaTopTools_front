

import { AnimatePresence, motion } from 'framer-motion'
import RepoCard from '../RepoCard/RepoCard'
import { useEffect, useState } from 'react'

import useReposStore from '@/stores/ReposStore'

import { GithubRepo } from '../Grid/ReposGrid';




function Hero() {

    

    const {  repos} = useReposStore();

    const [localRepos, setLocalRepos] = useState<GithubRepo[]>([])
    const [displayedRepo, setDisplayedRepo] = useState<GithubRepo | null>(null)
  useEffect(() => {
    // On ne procède que si nous avons des repos dans le store
    if (repos.length > 0) {
      // Création d'une copie du tableau avec le spread operator
      const reposCopy = [...repos]
      setLocalRepos(reposCopy)
      
      // On initialise le premier repo à afficher
      setDisplayedRepo(reposCopy[0])
    }
  }, [repos]) // On réagit aux changements du tableau repos du store

  useEffect(() => {
    // On ne démarre l'intervalle que si nous avons notre copie locale
    if (localRepos.length > 0) {
      const interval = setInterval(() => {
        // Sélection aléatoire depuis notre copie locale
        const randomIndex = Math.floor(Math.random() * localRepos.length)
        setDisplayedRepo(localRepos[randomIndex])
      }, 2000)

      // Nettoyage de l'intervalle
      return () => clearInterval(interval)
    }
  }, [localRepos])


   

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        // les animations des enfants se déclenchent en meme temps celle du parent
        when: "beforeChildren",
        staggerChildren: 0
      }
    }
  }
  
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }
 


    return (
        <AnimatePresence>
      <div
        
        
        
      className="min-h-screen ">
        <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className=" container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10  p-32">
          {/* Première colonne : Ajout de classes pour centrer verticalement */}
          <motion.div
            variants={childVariants}
          className="flex flex-col justify-center items-start gap-8  scale-110">
            <h1 className=" text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-8xl lg:leading-[1.105]">
              <span className='text-red-600'>Discover most</span>
              <br />
              popular <span className='bg-red-300/60  pl-6 pr-6  ml-2'>Java</span>
              <br />
             <span className='-pl-20'> Tools</span>
            </h1>
            <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl pl-4">
              Explore the most starred and actively maintained Java repositories on GitHub.
            </p>
          </motion.div>
          
          {/* Deuxième colonne */}
          
      
            {displayedRepo && (
                  <motion.div 
                  variants={childVariants}
                className="flex justify-center md:justify-end md:mr-10 scale-90">
              <RepoCard repo={displayedRepo} />
              </motion.div>
            )}
          
         

        </motion.section>
      </div>
      </AnimatePresence>
    )
  }


export default Hero