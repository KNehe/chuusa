import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Header from './components/Header/header'
import Info from './components/Info/Info'
import Form from './components/Form/form'
import Message from './components/message/message'

export default function Home() {
  
  
  const CONVERTAPI_SECRET = ''

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
           
           <Header styles={styles}/>
           
           <Info styles={styles}/> 

           <Form
              styles={styles}
              dropHandler={dropHandler}
              dragOverHandler={dragOverHandler}
              isProcessing={isProcessing}
              onInputChangedHandler={onInputChangedHandler}
           />

           <Message
             styles={styles}
             failure={failure}
             success={success}
             downloadUrl={downloadUrl}
             errorMessage={errorMessage}
           />
         
        </section> 

        <section className={styles.right}>
          <img src="collecting.svg" alt=""/>                 
        </section>     
      </main>
    
    </div>
  )
}
