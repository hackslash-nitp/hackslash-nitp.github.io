import errorPage from '@/assets/errorPage/errorpagefile.svg'
import Image from 'next/image'
import styled from 'styled-components'
export default function ErrorPage() {
    return (
        <Container>
            <center>
            <Image src={errorPage} alt="Oops! something went wrong" width={400} height={400}/>
            <p>Oops! something went wrong</p>
            </center>
        </Container>
    )
}

var Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/errorPage/ErrorPage.svg') center center/cover;
    color: white;
`