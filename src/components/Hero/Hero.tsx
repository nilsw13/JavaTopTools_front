

import { AnimatePresence, delay, motion } from 'framer-motion'
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
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }
 


  return (
    <AnimatePresence>
      <div className="min-h-screen">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          // Ajustement du padding responsive
          className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-6 
            p-4 sm:p-8 md:p-16 lg:p-32 
            grid-cols-1 md:grid-cols-2 
            md:gap-8 lg:gap-12" // Augmentation progressive de l'espace entre les colonnes
        >
          {/* Première colonne : titre */}
          <motion.div
            variants={childVariants}
            className="flex flex-col items-start justify-center gap-4 px-4 text-center scale-100 sm:gap-6 md:gap-8 md:scale-110 md:text-left sm:px-0" // Petit padding sur mobile pour éviter le collage aux bords
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tighter lg:leading-[1.105]
              w-full md:w-auto 
            ">
              <span className="block text-red-600 md:inline">Discover most</span>
              <br className="hidden md:block" />
              popular{' '}
              <span className="inline-block px-2 my-2 ml-0 bg-red-300/60 sm:px-4 md:px-6 md:ml-2 md:my-0 ">
                Java
              </span>
              <br className="hidden md:block" />
              <span className="block md:inline">Tools</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground
              max-w-[90%] sm:max-w-[80%] md:max-w-[500px] 
              mx-auto md:mx-0 
              mt-4 md:mt-0 
            ">
              Explore the most starred and actively maintained Java repositories on GitHub.
            </p>
          </motion.div>
  
          {/* Deuxième colonne : card repo */}
          {displayedRepo && (
            <motion.div
              variants={childVariants}
              className="flex justify-center w-full px-4 mt-8 scale-95 md:justify-end md:mt-0 sm:scale-90 sm:px-0 "
            >
              <RepoCard repo={displayedRepo} />
            </motion.div>
          )}
        </motion.section>
      </div>
    </AnimatePresence>
  );
  }


export default Hero