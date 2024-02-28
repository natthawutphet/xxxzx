import Head from 'next/head'
import { useState } from 'react'
import clientPromise from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'


type Props = {
  posts: [Post]
}

type Post = {
  _id: String;
  title: String;
  content: String;
}

export async function getServerSideProps() {

  try {
    let response = await fetch("http://localhost:3000/api/getPosts");
    let posts = await response.json();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) }
    }

  } catch(e) {
    console.error(e);
  }

}

export default function Home(props: Props) {

  const [posts, setPosts] = useState<[Post]>(props.posts);

  const handleDeletePost = async (postId: string) => {
    try {

      let response = await fetch("http://localhost:3000/api/deletePost?id=" + postId, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })

      response = await response.json();
      window.location.reload();

    } catch(error) {
      console.log("An error occured while deleting ", error);
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <div className='posts-body'>
          <h1 className='posts-body-heading'></h1>
          {posts?.length > 0 ? (
            <ul className='posts-list'>
              {posts.map((post, index) => {
                return (
                  <li key={index} className="post-item">
                    <div className='post-item-details'>
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </div>
                    <div className='post-item-actions'>
                      <a href={`/admin/${post._id}`}>Edit</a>
                      <button onClick={() => handleDeletePost(post._id as string)}>Delete</button>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <h2 className='posts-body-heading'>no......</h2>
          )}
        </div>
      </>

      <footer>
       
       
      </footer>
    </div>
  )
}
