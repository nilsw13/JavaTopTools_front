import { Card, CardContent, CardTitle } from '../ui/card'
import { StarHalf } from 'lucide-react'
import { Button } from '../ui/button'

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



function RepoCard({repo}: {repo: GithubRepo}) {
  return (
    <div>
        <Card className='flex flex-col  hover:shadow-xl shadow-lg md:hover:scale-105 transition-all md:h-[340px] md:w-[340px] w-[320px] h-[300px]' key={repo.id}>
            <CardTitle className='flex mt-2 mb-2 ml-4 text-center align-middle '>
                <img src={repo.owner.avatar_url} alt="" className='w-20 h-20 m-3 rounded-full' />
                <h3 className='pt-10'>{repo.name}</h3>
                  
            </CardTitle>
            <CardContent className='flex flex-col flex-grow mt-8 space-y-2 text-center'>
            
            <div className="flex flex-col flex-grow space-y-2">
            <div className="flex justify-center">
              <StarHalf className="text-yellow-400"/>
              <p className="inline-block font-bold">{repo.stargazers_count}</p>
            </div>
            <p className='truncate'>{repo.description}</p>
          </div>
            
            <a href={repo.html_url}>            <Button className='p-4 mt-auto'>
              See on Github
              </Button>


            </a>
            </CardContent>
          </Card>
    </div>
  )
}

export default RepoCard