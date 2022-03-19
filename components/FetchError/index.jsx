const index = ({ simbol, error }) => {
  return (
    <div className='fetch-error-content'>
      <div className='fetch-error-icon'>{simbol}</div>
      <p className='fetch-error'>{error}</p>
    </div>
  )
}

export default index
