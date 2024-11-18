import { SetStateAction, useEffect, useState } from "react";
import "../Styles/App.css"
import { usePosts } from "../hooks/usePost";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/page";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../components/MyModal/MyModal";
import PostForm from "../UI/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList/PostList";
import MyLoader from "../UI/Loader/MyLoader";
import Pagination from "../UI/Pagination/Pagination";



function Posts() {
  const [posts, setposts] = useState([]);
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")
  
  const createPost = (newPost: any) => {
    setposts([...posts, newPost])
    setModal(false)
  }


  // const [selectedSort, setSelectedSort] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')
  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const responce = await PostService.getAll(limit, page);
    setposts(responce.data);
    const totalCount = responce.headers['x-total-count']
    setTotalPages(getPageCount(totalCount,limit));
  })
  // const [isPostsLoading, setPostsLoading] = useState(false);
  
  useEffect( () => {
    fetchPosts()
  },[page])

  const removePost = (post: { id: any; }) => {
    setposts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page: SetStateAction<number>) => {
    setPage(page)
  }

  return (
    <>
      
      <div className='main'>
        {/* <button onClick={fetchPosts}>get post</button> */}
        <MyButton onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
        </MyModal>
        
        <PostFilter filter={filter} setFilter={setFilter}/>
        
        {
        postError && <h1>Произошла ошибка ${postError}</h1> 
        }

        {
        isPostsLoading ? 
        <div style={{marginTop: "100px"}}><MyLoader/></div> : 
        <PostList remove = {removePost} posts={sortedAndSearchedPosts}></PostList>
        }
        
        <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}/>
        
      </div>
      
    </>
  )
}

export default Posts;





