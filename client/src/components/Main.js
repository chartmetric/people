import React from 'react'
import SearchBar from './SearchBar';
import {
  Button,
  Container,
  Grid,
  Header,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const ResponsiveLayout = () => (
  <div>
    <Header
      as='h1'
      content='Chartmetric People App'
      style={style.h1}
      textAlign='center'
    />
    <SearchBar />
  </div>
)

export default ResponsiveLayout
