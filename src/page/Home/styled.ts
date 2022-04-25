import styled from "styled-components";

const COLOR_HEADER = '#fff'
const COLOR_BORDER = '#444'
const FONT_SIZE_HEADER = '32px'

export const Container = styled.section`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  padding: 10px;
`

export const Header = styled.div`
  margin: 0;
  padding: 0;
  font-size: ${FONT_SIZE_HEADER};
  color: ${COLOR_HEADER};
  text-align: center;
  border-bottom: 1px solid ${COLOR_BORDER};
  padding-bottom: 20px;
`