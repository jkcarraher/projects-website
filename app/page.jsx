import Image from 'next/image'
import prisma from '@/lib/prisma'
import Post from './components/Post';
import Header from '@/app/components/Header'

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="p-0">
      <Header/>

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
      <div>
        {
          posts.map((post) => {
            return (
              <Post 
              key = {post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              publishDate = {post.formattedDate}
              readTime={post.timeToRead}
              />
            )
          })
        }
      </div>

    </main>
  )
}
