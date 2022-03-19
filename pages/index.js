import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Masonry from 'react-masonry-component'
import { Col, Card } from 'react-bootstrap'
import Media from '../components/Media'
import Avatar from '../components/Avatar'

const Users = ({ users }) => {
  const [loading, setLoading] = useState(true)

  const handleToggle = (e) => {
    // setFollow(!follow)
    const target = e.target
    // target.innerText = follow ? 'Following' : 'Follow'
    // console.log(e.target)
    if (target.innerHTML === 'Follow') {
      target.innerHTML = 'Following'
    } else {
      target.innerHTML = 'Follow'
    }
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  useEffect(() => {
    const speed = 900
    const containerAnimation = document.querySelectorAll('.js-animation')
    containerAnimation.forEach(() => {
      const elements = document.querySelectorAll('.js-animation .js-delay')
      elements.forEach(el => {
        const elementOffset = el
        const offset = elementOffset.getBoundingClientRect().left * 0.5 + elementOffset.getBoundingClientRect().top
        const delay = parseFloat(offset / speed).toFixed(2)
        elementOffset.style.transitionDelay = delay + 's'
        elementOffset.classList.add('animated')
        // console.log(delay + ' delay item');
      })
    })
  })

  return (
    <Layout title='Home'>
      <div className='Content'>
        <Masonry className='row js-animation'>
          {
            users.map((user, i) => (
              <Col sm={6} md={4} lg={2} key={user.id}>
                <Card className='js-animation js-delay card'>
                  <div className='card-focus'>
                    <Link className='card-content' href='/profile/[id]' as={`/profile/${user.id}`}>
                      <Card.Body>
                        <Media
                          first_name={user.first_name}
                          last_name={user.last_name}
                          email={user.email}
                        >
                          <Avatar size='90' avatar={user.avatar} />
                        </Media>
                      </Card.Body>
                    </Link>
                    <Card.Footer className='p-0'>
                      <div className='card-footer-action'>
                        <button className='sswp' onClick={handleToggle}>
                          Follow
                        </button>
                      </div>
                    </Card.Footer>
                  </div>
                </Card>
              </Col>
            ))
          }
        </Masonry>
      </div>
    </Layout>
  )
}

export default Users

export async function getServerSideProps (context) {
  const res = await fetch('https://reqres.in/api/users?per_page=12')
  const users = await res.json()
  return {
    props: {
      users: users.data
    }
  }
}
