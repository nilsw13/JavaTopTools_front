import api from '@/axios/axios'
import {create} from 'zustand'

interface GithubRepo {
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

interface ReposStore {

    repos: GithubRepo[]
    loading: boolean
    error: string | null
    page: number
    currentPage: number

    getRepos: (page:number) => Promise<void> 
    setRepos: (repos: GithubRepo[]) => void
    clearError: () => void     
    setPage: (page: number) => void    
   
   
}

const useReposStore = create<ReposStore>((set, get)=> ({

    // etats initiaux

    repos: [],
    loading: false,
    error: null,
    page: 1,
    currentPage: 1,


    // actions  (fonctions qui modifient les etats)

    getRepos: async (page: number) => {
        set({loading: true})

        try{
            const response = await api.get('/java-repos/list', {
                params: { 
                    page: page,
                    per_page: 6 }
              })

                set({
                    repos: response.data.items,
                    loading: false
                })
        } catch (error : any) {
            set({
                error: error.message,
                loading: false
            })
        }
    },

    setPage: (page: number) => {
        set({ currentPage: page })
        // On appelle automatiquement getRepos avec la nouvelle page
        get().getRepos(page)
      },

    setRepos: (repos: GithubRepo[]) => set({repos}),

    clearError: () => set({error: null})
}))

export default useReposStore