import { ProgressBar as Bar } from 'react-bootstrap'
import styles from '../styles/ProgressBar.module.css'

const ProgressBar = () => {
  const completion = 40
  return (
    <section className='mt-5'>
      <Bar
        className={styles.bar}
        now={completion}
        label={`${completion}%`}
        animated
        variant='danger'
      />
    </section>
  )
}

export default ProgressBar
