import styled from "styled-components"

export default function Home3() {
  return (
        <MainDiv>
            {/* <Image src={homeLogo} alt="girl-with-laptop" width={800} height={600}></Image> */}
            <div>
                <div>
                    <h3>At HackSlash</h3>
                    <h1>We have done some great stuffs.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi.</p>

                    <div>
                      <div>
                        {/* <Icon1 /> */}
                        <h2>80+</h2>
                        <p>Members</p>
                      </div>

                      <div>
                        {/* <Icon2 /> */}
                        <h2>50000+</h2>
                        <p>Lines of Code</p>
                      </div>
                      
                      <div>
                        {/* <Icon3 /> */}
                        <h2>500+</h2>
                        <p>Projects</p>
                      </div>
                    </div>
                </div>
                         
            </div>
        </MainDiv>
  )
}

const MainDiv = styled.div`
  background: url('/home/Homepage_2_background.svg') center center/cover;
  height: 100vh;
`