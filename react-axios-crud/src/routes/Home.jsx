import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import'./Home.css'
import blogFetch from '../axios/config'

const Home = () => {
  
const [post,setPost] = useState([])

const getPosts = async () =>{

    try {
      
      const response = await blogFetch.get('/posts')
      const data = response.data
      setPost(data)
    } catch (error) {
      console.log("Erro")
    }

}

useEffect(()=>{

  getPosts()
},[])
  
  return (
    <div className='home'>
      <h1>Ultimos Posts</h1>
      {post.length === 0 ? (<p>carregando...</p>):(
        post.map((post)=>(
          <div className='post' key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link className='btn' to={`/post/${post.id}`}>
                Ler Mais
                </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
