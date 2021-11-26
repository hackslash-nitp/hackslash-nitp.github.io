import Layout from "@/components/Layout"
//use "@/components/Layout" instead of "../components/Layout" everywhere
import styles from "@/styles/home.module.css"
import Homepage from "@/components/Home/Home1"
export default function Home() {
  return (
    <Layout keywords="hackslash, nit, patna">
      <Homepage />
    </Layout>
  )
}
