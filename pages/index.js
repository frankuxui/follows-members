import Router from 'next/router'
import { useState, useEffect } from 'react'
import Masonry from 'react-masonry-component'
import { Container, Col, Card } from "react-bootstrap"

import Media from '../components/Media'
import Avatar from '../components/Avatar'



const Index = (props) => {

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
    <Container>
      <Masonry className="row js-animation">
        {
          props.users.map((user) =>(
            <Col sm={6} md={4} lg={2} key={user.id}>
              <Card className="js-animation js-delay card animated" onClick={e => Router.push('/profile/[id]', `/profile/${user.id}`)}>
                <div className="card-content card-focus">
                  <Card.Body>
                    <Media 
                      first_name={ user.first_name } 
                      last_name={ user.last_name } 
                      state={ user.email }>
                      <Avatar size="90" avatar={ user.avatar }></Avatar>
                    </Media>
                  </Card.Body>
                  <Card.Footer className="p-0">
                    <div className="card-footer-action">
                      <button className="sswp">
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
    </Container>
    
  )
}


Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users')
  const jason = await res.json()
  return { users: jason.data}
}

export default Index
