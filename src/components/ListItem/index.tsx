import { useState } from 'react'
import RemoveTask from '../RemoveTask'
import { Checkbox, Container, TextName } from './styled'

type PropsListItem = {
  item: Item
}

const ListItem = ({ item }: PropsListItem) => {
  const [isCheckedState, setIsCheckedState] = useState(item.done)

  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={isCheckedState}
        onChange={e => setIsCheckedState(e.target.checked)}
      />
      <TextName done={isCheckedState}>{item.name}</TextName>

      <RemoveTask />
    </Container>
  )
}

export default ListItem