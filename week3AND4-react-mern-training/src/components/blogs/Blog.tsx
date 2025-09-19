import { Link } from "react-router-dom"
import type { Blog as BlogType } from "../../data"

interface BlogProps {
  blogInfo: BlogType
}

const Blog = ({ blogInfo }: BlogProps) => {

  const truncateDescription = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  const truncatedText = truncateDescription(blogInfo.description, 120)

  return (
    <Link to={`/blog/${blogInfo.id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">

        <div className="w-full aspect-video overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={blogInfo.image}
            alt={blogInfo.title}
          />
        </div>

        <div className="p-4 text-left">
          <h6 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600">
            {blogInfo.title}
          </h6>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            {truncatedText}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Blog
