import Blog from "../components/blogs/Blog"
import { blogs } from "../data"

const BlogHome: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blogInfo={blog} />
        ))}
      </div>
    </section>
  )
}

export default BlogHome
