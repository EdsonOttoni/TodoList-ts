import { useState, KeyboardEvent } from "react"
import { BiPlus } from 'react-icons/bi'

import { Container, Input } from './styled'

type AddTaskProps = {
  onEnter: (taskName:string) => void
}

const AddTask = ({onEnter} : AddTaskProps) => {
  const [inputState, setInputState] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputState !== '') {
      onEnter(inputState)
      setInputState('')
    }
  }

  return (
    <Container>
      <BiPlus size={18} />
      <Input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputState}
        onChange={e => setInputState(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  )
}

export default AddTask