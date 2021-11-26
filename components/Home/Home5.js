import styled from "styled-components";

export default function Home4() {
  return (
    <MainDiv>
      <div>Contact Us</div>

      <div>
        <form>
          <div>
            <input type="text" name="email" placeholder="Email"/>
            <input type="text" name="name" placeholder="name"/>
          </div>
          <div>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter your message" />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div>
          <div>
            {/* <ImageHackslashLogo /> */}
            <span>HackSlash</span>
          </div>

            <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet.</div>

                <div>
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Blogs
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>PRODUCT</h3>
                    <ul>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Blogs
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>CONTACT</h3>
                    <ul>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Blogs
                        </li>
                    </ul>
                </div>
            </div>

            <p style={{textAlign: "center"}}> Copyright © 2021, HackSlash.org . Privacy | Terms of service</p>
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  background: url('/home/Homepage_5_background.png') center center/cover;
  height: 100vh;
`
