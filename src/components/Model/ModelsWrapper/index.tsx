import React from 'react'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
}

const ModelsWrapper: React.FC<Props> = ({children}) => {
  return <Container>{children}</Container>
}

export default ModelsWrapper