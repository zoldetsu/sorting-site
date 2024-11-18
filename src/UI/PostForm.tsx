import { useState } from "react"
import MyButton from "./Button/MyButton"
import InputSection from "./Input/InputSection"

export default function PostForm({create})  {
  
    const [post,setPost] = useState({title:"", body:""})
  
    const addNewPost = (e) => {

        e.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:"", body:""})
      }

    return (
        <form >
          <InputSection
          onChange = {e => setPost({...post, title: e.target.value})}
          value={post.title} 
          type="text" 
          placeholder="Название Аниме"/>

          <InputSection 
          onChange = {e => setPost({...post, body: e.target.value})}
          value={post.body} 
          type="text" 
          placeholder="Описание аниме"/>

          {/* <InputSection 
          onChange = {e => setPost(e.target.value)}
          value={post.body} 
          type="text" 
          placeholder="Описание аниме"/> */}
          
          <MyButton onClick={addNewPost}>Создать</MyButton>
        </form>
    )
}