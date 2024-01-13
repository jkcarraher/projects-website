import Image from 'next/image'
import prisma from "@/lib/prisma"
import Post from './components/Post';

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author:{
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="p-0">
      {/* Header */}
      <header className="flex justify-between items-center p-4 pb-10">
        <div>
          <h1 className="text-2xl font-bold ml-5">John Carraher</h1>
        </div>
        <div className="flex gap-4 mr-5">
          <a href="/projects" className="text-deselect hover:text-select font-medium">Projects</a>
          <a href="/resume" className="text-deselect hover:text-select font-medium">Resume</a>
        </div>
      </header>

      {/* Body */}
      <div className="flex justify-center">
        <div className="text-left max-w-2xl">

          <h2 className="text-3xl font-bold mb-4">Hi!</h2>
          <p>
            I’m John, a Junior studying Computer Science & Engineering at UC Davis.<br/>
            Right now I’m mostly working in app development.<br/>
            This blog will serve as an archive for all my projects.<br/>
            I will be sharing my thoughts and things I learn along the way.
          </p>
          {/* Icons */}
          <div className="flex gap-4 mt-8">
            <a href="https://www.linkedin.com/in/jkcarraher" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="https://github.com/jkcarraher" target="_blank" rel="noopener noreferrer">
              <Image src="/github-icon.png" alt="GitHub" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Projects Mini-View */}
      <a href={'/add-post'}>Add Post</a>
      <div>
        {
          posts.map((post) => {
            return (
              <Post 
              key = {post.id}
              id={post.id}
              title={post.title}
              content = {post.content}
              authorName = {post.author.name}
              />
            )
          })
        }
      </div>

    </main>
  )
}
