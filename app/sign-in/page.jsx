import Post from '../components/Post'
import prisma from '@/lib/prisma';
import Header from '../components/Header';

export default async function SignIn(){
    return (
    <main>
      <Header/>
        <h2>Projects Feed</h2>
        <a href={'/add-post'}>Add Post</a>
        <div>
          
        </div>
    </main>
    )
  }