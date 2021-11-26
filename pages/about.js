import Layout from "@/components/Layout"
import About1 from '@/components/About/About1'
import About2 from '@/components/About/About2'

export default function Home() {
  return (
    <Layout keywords="hackslash, nit, patna">
      <About1 />
      <About2 />
    </Layout>
  )
}
