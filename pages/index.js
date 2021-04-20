import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Chuusa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.left}>
          <header className={styles.header}>
            <img src="undraw_Filing_system_re_56h6.svg" alt="logo"/>
            <h1>Chuusa</h1>
          </header>

          <article className={styles.info}>
            <h2>Convert your word documents to pdf</h2>
            <p>Pay $0</p>
          </article>

          <article className={styles.input}>
            <p>Drop a file here or </p>
            <label htmlFor="fileInput" className={styles.input_label}>Browse file</label>
            <input 
              type='file'
              id="fileInput" 
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              multiple={false}/>              
          </article>

          <article className={styles.message}>
            <p className={styles.error}>Error message</p>
            <p className={styles.success}>Sucess message
             <a href="#" download>Download</a>
             </p>
          </article>
        </section> 

        <section className={styles.right}>
          <img src="collecting.svg" alt=""/>                 
        </section>     
      </main>
    
    </div>
  )
}
