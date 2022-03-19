const index = ({ children, first_name, last_name, email }) => {
  return (
    <div className='card-media'>
      {children}
      <div className='media-body'>
        <h5 className='mb-1'>
          <span>{first_name}</span> <span>{last_name}</span>
        </h5>
        <div className='--card-subtitle'>{email}</div>
      </div>
    </div>
  )
}

export default index
