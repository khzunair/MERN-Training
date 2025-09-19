import { useParams } from "react-router-dom"
import { blogs } from "../data";


const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => (blog.id.toString() === (id)))
  console.log(blog)
  return (
    <div className=" bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center p-8">
      <div className="w-200 h-96 overflow-hidden">
        <img className="w-full h-full object-cover" alt={blog?.title} src={blog?.image} />
      </div>
      <div className="flex flex-col">
      <h1 className="text-black dark:text-white text-xl font-bold">{blog?.title}</h1>
      <p>By: {blog?.writer ? blog.writer : "Unkown" }</p>
      <p className="font-normal">{blog?.description}</p>
      </div>

    </div>
  )
}

export default BlogDetail
