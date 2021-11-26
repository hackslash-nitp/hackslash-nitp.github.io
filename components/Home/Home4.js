import styled from "styled-components"

export default function Home4() {
  return (
    <MainDiv>
      <div>
       <label htmlFor="usermail"> REGISTER FOR OUR NEWSLETTER NOW </label>
      </div>

      <div>
        <form>
          <input type="text" name="usermail" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: url('/home/Homepage_3_background.svg') center center/cover;
  height: 50vh;
`
