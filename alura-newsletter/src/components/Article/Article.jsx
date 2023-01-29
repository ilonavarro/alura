const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className='alura-card'>
      <h3 className='text-xl text-alura-200 dark:text-gray-200 font-bold'>{title}</h3>
      <div className='w-full justify-end gap-2 pr-5 hidden sm:flex'>
        {tags.map(tag => (
          <span key={tag} className='alura-tag'>
            {tag}
          </span>
        ))}
      </div>
      <div className='grid gap-1'>
        {text.map((content, index) => (
          <p
            key={index}
            className='text-alura-200 dark:text-gray-400 line-clamp-2 sm:line-clamp-none'
          >
            {content}
          </p>
        ))}
      </div>
      {image && <img src={image} className='sm:p-4' alt={alt} />}
      {image && alt && <span className='sr-only'>{alt}</span>}
    </div>
  )
}

export default Article
