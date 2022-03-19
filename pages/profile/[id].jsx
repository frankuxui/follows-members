import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Profile = ({ user }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout>
      <div className='Content'>
        <Link href='/'>
          <a>Goback</a>
        </Link>
        <h1>Profile del usuario</h1>
        <img src={user.avatar} />
        <h2>{user.first_name} {user.last_name}</h2>
      </div>
    </Layout>
  )
}

Profile.getInitialProps = async (ctx) => {
 const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
 const json = await res.json()
  return { 
    user: json.data
  }
}

export default Profile
