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
          <ModelSection
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Page