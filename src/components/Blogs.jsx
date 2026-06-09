import { blogs } from '../data/siteData'

const categoryColors = {
  Technology: 'bg-blue-100 text-blue-700',
  'Customer Relationship': 'bg-green-100 text-green-700',
  'Digital Marketing': 'bg-purple-100 text-purple-700',
}

export default function Blogs() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Our Blogs</h2>
        <p className="section-subtitle">
          Stay updated with the latest insights, trends, and best practices in technology.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[blog.category] || 'bg-slate-100 text-slate-700'}`}>
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted">{blog.date}</span>
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted text-sm line-clamp-2">{blog.excerpt}</p>
                <span className="inline-block mt-4 text-primary text-sm font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
