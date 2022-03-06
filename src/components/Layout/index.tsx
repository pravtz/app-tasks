import Image from 'next/image'
import {
  Wrapper,
  Content,
  BackgroundImage,
  ContentWrapper,
  AsideRight,
  AsideWrapper
} from './styled'
import checkDouble from '../../../public/static/check-double-solid.svg'
import AsideBar from '../AsideBar'
import { useState } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [asideIsVisible, setAsideIsVisible] = useState(false)

  return (
    <Wrapper>
      <BackgroundImage>
        <Image src={checkDouble} width={575} height={657} />
      </BackgroundImage>
      <AsideRight isVisible={asideIsVisible}>
        <AsideWrapper>
          <AsideBar />
        </AsideWrapper>
      </AsideRight>
      <Content>
        <ContentWrapper>{children}</ContentWrapper>
      </Content>
    </Wrapper>
  )
}

export default Layout
