import React, { useState } from "react"

import { Container, Header } from './styled'

import ListItem from "../../components/ListItem"
import AddTask from "../../components/AddTask"
import RemoveTask from "../../components/RemoveTask"

const Home = () => {
  const [listState, setListState] = useState<Item[]>([
    { id: 1, name: 'Hello World', done: true },
    { id: 2, name: 'Hello There', done: false }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...listState]
    newList.push({
      id: listState.length + 1,
      name: taskName,
      done: false
    })
    setListState(newList)
  }

  return (
    <Container>
      <Header>
        To Do List
      </Header>

      <AddTask onEnter={handleAddTask} />

      {
        listState.map((item, key) => (
          <ListItem item={item} key={key} />
        ))
      }
    </Container>
  )
}

export default Home
