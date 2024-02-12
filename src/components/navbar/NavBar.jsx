import styled from "styled-components";
import { useRouter } from "next/router"

import Logo from "../logo/Logo";
import Button from "../form/Button";

const ContainerBox = styled.div`

`;

const NavbarContainer = styled.div`
  height: 116px;
  width: 100%;
  background: rgba(31, 31, 31, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 55px;
;
`
export default function NavBar({ type1, type2 }){
  const router = useRouter()
  return(
    <ContainerBox>
          {type1 &&
              <NavbarContainer>
                <Logo />
                <Button onClick={() => router.push("/createAnnouncement")}>Criar anúncio</Button>
              </NavbarContainer>
          }
          {type2 && 
              <NavbarContainer>
                <Logo />
              </NavbarContainer>
          }
    </ContainerBox>
    
    
  )
}