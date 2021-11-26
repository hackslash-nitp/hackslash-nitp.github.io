import errorPage from '@/assets/errorPage/errorpagefile.svg'
import Image from 'next/image'
export default function ErrorPage() {
    return (
        <div>
           <Image src={errorPage} alt="Oops! something went wrong" width={400} height={400}/>
           <p>Oops! something went wrong</p>
        </div>
    )
}
