import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/page'
import Header from '@/components/header/page'
import TheBigIdea from '@/components/thebigidea/page'
import Rules from '@/components/rules/page'
import Judging from '@/components/judging/page'
import FAQs from '@/components/FAQs/page'
import Privacy from '@/components/privacy/page'
import Timeline from '@/components/timeline/page'
import Prizes from '@/components/prizes/page'
import Sponsors from '@/components/sponsors/page'
import Footer from '@/components/footer/page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <TheBigIdea />
      <Rules />
      <Judging />
      <FAQs />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  )
}
