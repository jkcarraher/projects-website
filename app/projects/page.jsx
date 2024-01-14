import Post from '../components/Post'
import Header from '../components/Header';

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
  

export default async function Projects(){
    const posts = await getPosts();
    return (
    <main>
      <Header/>
        <h2>Projects Feed</h2>
        <a href={'/add-post'}>Add Post</a>
        <div>
          {
            posts.map((post) => {
              return (
                <Post 
                key = {post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                publishDate = {post.publishDate}
                readTime={post.timeToRead}
                />
              )
            })
          }
        </div>
    </main>
    )
  }