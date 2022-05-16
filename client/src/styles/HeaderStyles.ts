import { styled } from '@stitches/react'

export const HeaderDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  backgroundColor: '#6f738d',
  padding: '0 30px 0 30px'
})

export const Logo = styled('img', {
  justifyContent: 'flex-start',
  margin: 10,
  // borderRadius: '50%',
  width: '60px'
})

export const HeaderText = styled('h2', {
  justifyContent: 'flex-start',
  color: '#000000',
  fontSize: '1.5em'
})
