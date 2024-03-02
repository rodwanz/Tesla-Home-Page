import React from 'react'

import { Container } from './styles'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelSection, ModelsWrapper,} from '../Model'

const Page: React.FC = () => {
  return (
    <Container>
      <h1>Page</h1>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName =>(
            <ModelSection
            key={modelName}
            className='colored'
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Order Online for Delivery"
              />
            }
          />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Page