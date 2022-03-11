import Image from 'next/image'
import {
  Wrapper,
  Content,
  BackgroundImage,
  ContentWrapper,
  AsideRight,
  AsideWrapper,
  Credits
} from './styled'
import checkDouble from '../../../public/static/check-double-solid.svg'
import AsideBar from '../AsideBar'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/rooks'
import Link from 'next/link'
import { ImLinkedin } from 'react-icons/im'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [asideIsVisible, setAsideIsVisible] = useState(false)

  const isVisible = useAppSelector(
    (state) => state.aside.valueAside.asideIsVisible
  )

  const handlerIsVisible = () => setAsideIsVisible(isVisible)

  useEffect(() => {
    handlerIsVisible()
  }, [isVisible])

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
      <Credits>
        <Link href="https://www.linkedin.com/in/pravtz" passHref>
          <div>
            <span>Developed by </span> <ImLinkedin size={12} /> Pravtz
          </div>
        </Link>
      </Credits>
    </Wrapper>
  )
}

export default Layout
