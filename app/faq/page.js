import Footer from '../components/footer/footer'
import styles from '../page.module.css'
import FaqDetails from './faq'



export default function Faq() {
  return (
    <main className={styles.main}>
      <FaqDetails />
      <div className='faqFooter'>
      <Footer />
    </div>
    </main>
  )
}
