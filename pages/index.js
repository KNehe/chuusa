import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'

export default function Home() {
  
  
  const CONVERTAPI_SECRET = '9HB8gZv2uCtAmTlN'

  const [downloadUrl, setDownloadUrl] = useState('')

  const [success, setSuccess] = useState(false)

  const [failure,setFailure] = useState(false)

  const [isProcessing, setIsProcessing] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')

  const onInputChangedHandler = async event =>{
    
    const file = event?.target?.files[0]
    
    if(!file) return

    await fileConversionHandler(file)    
  }
  
  const dropHandler = async event =>{

    event.preventDefault()
    
    if(!event?.dataTransfer?.files) return

    const file = event.dataTransfer.files[0]

    await fileConversionHandler(file)
    
  }

  const dragOverHandler = async event =>{
    event.preventDefault();
  }

  const fileConversionHandler = async (file) =>{
    setErrorMessage('')
    setSuccess(false)
    setFailure('')

  try{
    
    setIsProcessing(true)

    const array =  file.name.split('.')
    const extension = array[array.length-1]

    let convertApi = ConvertApi.auth({secret: CONVERTAPI_SECRET})
    
    let params = convertApi.createParams()
    params.add('file', file)
    let result = await convertApi.convert(extension, 'pdf', params)

    let url = result.files[0].Url

    setDownloadUrl(url)

    setIsProcessing(false)

    setSuccess(true)

  }catch(error){
    setIsProcessing(false)
    setErrorMessage(error.message)
    setFailure(true)
  }
}

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Chuusa</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/convertapi-js/lib/convertapi.js"></script>
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

          <article 
            className={styles.input} 
            onDrop={dropHandler}
            onDragOver={dragOverHandler}>
            {isProcessing? "processing":
            <>
              <p>Drop a file here or </p>
              <label htmlFor="fileInput" className={styles.input_label}>Browse file</label>
              <input 
                type='file'
                id="fileInput" 
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                multiple={false}
                onChange={onInputChangedHandler}/> 
              </>
             }             
          </article>

          <article className={styles.message}>
            {failure? <p className={styles.error}>{errorMessage}</p>: ''}
            {success? <p className={styles.success}>Process successfull
             <a href={downloadUrl} download>Download</a>
             </p>: ''}
          </article>
        </section> 

        <section className={styles.right}>
          <img src="collecting.svg" alt=""/>                 
        </section>     
      </main>
    
    </div>
  )
}
