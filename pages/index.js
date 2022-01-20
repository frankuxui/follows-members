import Router from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component'
import { Container, Col, Card } from "react-bootstrap"
import Media from '../components/Media'
import Avatar from '../components/Avatar'


export default function Users({users}){
  console.log(users);
  const [loading, setLoading] = useState(false);
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  useEffect(() => {
    const speed = 900;
    const containerAnimation = document.querySelectorAll('.js-animation')
    containerAnimation.forEach(() => {
      var elements = document.querySelectorAll('.js-animation .js-delay')
      elements.forEach(el => {
        var elementOffset = el;
        var offset = elementOffset.getBoundingClientRect().left * 0.5 + elementOffset.getBoundingClientRect().top;
        var delay = parseFloat(offset/speed).toFixed(2);
        elementOffset.style.transitionDelay = delay+ 's'
        elementOffset.classList.add('animated')
        //console.log(delay + ' delay item');
      });
    });
  })


  return (
    <Layout>
      <Masonry className="row js-animation">
        {
          users.map((user, index) =>(
            <Col sm={6} md={4} lg={2} key={user.id}>
              <Card className="js-animation js-delay card">
                <div className="card-focus">
                  <Link className="card-content" href={`/profile/[id]`} as={`/profile/${user.id}`}>
                    <Card.Body>
                      <Media 
                        first_name={ user.first_name } 
                        last_name={ user.last_name } 
                        email={ user.email }>
                        <Avatar size="90" avatar={ user.avatar }></Avatar>
                      </Media>
                    </Card.Body>
                  </Link>
                  <Card.Footer className="p-0">
                    <div className="card-footer-action">
                      <button className="sswp" onClick={()=> setFollow(index)}>
                        {follow === index ? "Following" : "Follow" }
                      </button>
                    </div>
                  </Card.Footer>
                  </div>
              </Card>
            </Col>
          ))
        }
      </Masonry>
    </Layout>
  )
}




export async function getServerSideProps(context){
  const res = await fetch('https://reqres.in/api/users')
  const users = await res.json();
  return {
    props: {
      users: users.data
    }
  }
}

