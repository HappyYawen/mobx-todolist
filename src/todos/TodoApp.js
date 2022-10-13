import React from 'react'
import { observer } from 'mobx-react-lite'
import Container from './Container'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
// import { observer } from 'mobx-react-lite'
function TodoApp() {
  return <Container>
    <Header/>
    <Main/>
    <Footer/>
  </Container>
}

export default observer(TodoApp)