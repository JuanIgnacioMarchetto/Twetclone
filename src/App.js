import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: '@JIMarchetto',
    name: 'Juan Ignacio Marchetton',
    isFollowing: true
  },
  {
    userName: '@marchedev',
    name: 'Juan Patricio Marchetto',
    isFollowing: false
  },
  {
    userName: '@ClaudioJavierCM ',
    name: 'Claudio Cormik',
    isFollowing: true
  },
  {
    userName: '@agosende',
    name: 'Agustin Gosende',
    isFollowing: false
  }
  ]
export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
export default App;