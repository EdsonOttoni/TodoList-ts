import styled from 'styled-components'

type TextNameProps = {
  done: boolean
}

export const Container = styled.div`
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
`
export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 5px;
` 

export const TextName = styled.label(
  ({ done }: TextNameProps) =>
    `
  color: #CCC;
  font-size: 23px;
  text-decoration: ${done ? 'line-through' : 'initial'}
`
)
