import React from 'react'
import { observer } from 'mobx-react-lite'
// import Container from './Container'
import Header from './Header'
import Main from './Main'
// import { observer } from 'mobx-react-lite'
function TodoApp() {
  return <>
    <Header/>
    <Main/>
  </>
}

export default observer(TodoApp)