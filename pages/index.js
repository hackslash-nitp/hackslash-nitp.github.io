import Layout from "@/components/Layout"
//use "@/components/Layout" instead of "../components/Layout" everywhere
import Homepage1 from "@/components/Home/Home1"
import Homepage2 from "@/components/Home/Home2"
import Homepage3 from "@/components/Home/Home3"
import Homepage4 from "@/components/Home/Home4"
import ContactUs from "@/components/Home/ContactUs"
export default function Home() {
  return (
    <Layout keywords="hackslash, nit, patna">
      <Homepage1 id="Home1" />
      <Homepage2 id="Home2" />
      <Homepage3 id="Home3" />
      {/* <Homepage4 id="Home4" /> */}
      <ContactUs id="contact" />
    </Layout>
  )
}
