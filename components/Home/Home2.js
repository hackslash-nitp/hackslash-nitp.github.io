import styled from 'styled-components'
import Image from 'next/Image'
import marketing from "@/assets/home/home2logo.svg"
export default function Home2() {
  return (
      <div>
            <div>
                <div>
                    <h1>We are making ideas better for everyone</h1>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                    <button>Learn More</button>
                </div>               
              <Image src={marketing} alt="marketing-boy-logo" width={400} height={400} />
            </div>

            <div>
              {/* <div><Image /></div>
              <div><Image /></div>
              <div><Image /></div>
              <div><Image /></div> */}
            </div>

        </div>
  )
}

