import Layout from "@/components/Layout"
//use "@/components/Layout" instead of "../components/Layout" everywhere
import styles from "@/styles/home.module.css"
import Homepage1 from "@/components/Home/Home1"
import Homepage2 from "@/components/Home/Home2"
import Homepage3 from "@/components/Home/Home3"
import Homepage4 from "@/components/Home/Home4"
import Homepage5 from "@/components/Home/Home5"
export default function Home() {
  return (
    <Layout keywords="hackslash, nit, patna">
      <Homepage1 />
      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
      <Homepage5 />
    </Layout>
  )
}
