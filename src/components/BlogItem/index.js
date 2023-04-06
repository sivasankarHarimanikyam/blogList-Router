import './index.css'

const BlogItem = props => {
  const {blogsListDetails} = props
  const {title, description, publishedDate} = blogsListDetails

  return (
    <li className="list-description">
      <div className="line-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
