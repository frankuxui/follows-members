const index = ({ avatar, size }) => {
  return (
    <div className='card-avatar-container'>
      <img
        style={{ background: '#f1f6f7' }}
        src={avatar}
        alt='Avatar'
        className='card-avatar'
        width={size}
        height={size}
      />
    </div>
  )
}

export default index
