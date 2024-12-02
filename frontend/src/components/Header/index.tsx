import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Aside, Container } from './styles'

export function Header() {

  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>

        <ShoppingCart size={22} weight="fill" />
      </Aside>
    </Container>
  )
}
