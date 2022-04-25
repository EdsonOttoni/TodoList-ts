import {BiMinus} from 'react-icons/bi'

type RemoveTaskProps = {
  remove: (taskId: number) => void
}

const RemoveTask = ({remove}: RemoveTaskProps) => {
  return (
    <div
    >
      <BiMinus/>
    </div>
  )
}

export default RemoveTask
