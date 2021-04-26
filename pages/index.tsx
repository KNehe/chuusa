import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Header from '../components/Header/header'
import Info from '../components/Info/Info'
import Form from '../components/Form/form'
import Message from '../components/Message/Message'
import axios from 'axios'
import { GetStaticProps} from 'next'
import {FC, ReactElement} from 'react'
import { HomeProps } from '../types/props'

const Home: FC<HomeProps> = ({API_END_POINT}) : ReactElement => {

  const [base64String, setBase64String] = useState('')

  const [success, setSuccess] = useState(false)

  const [failure,setFailure] = useState(false)

  const [isProcessing, setIsProcessing] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')

  const [filename,setFileName] = useState('')

  const onInputChangedHandler = async (event: any) =>{
    
    const file = event?.target?.files[0]
    
    if(!file) return

    await fileConversionHandler(file)    
  }
  
  const dropHandler = async (event: any) =>{

    event.preventDefault()
    
    if(!event?.dataTransfer?.files) return

    const file = event.dataTransfer.files[0]

    await fileConversionHandler(file)
    
  }

  const dragOverHandler = async (event: any) =>{
    event.preventDefault();
  }

  const fileConversionHandler = async (file:any) =>{
    setErrorMessage('')
    setSuccess(false)
    setFailure(false)

  try{
    
    setIsProcessing(true)
    
    const data = new FormData()

    data.append('file',file)
    
    const oldFileName: string = file?.name

    const newFileName: string = oldFileName.substr(0, oldFileName.lastIndexOf(".")) + ".pdf"
  
    setFileName(newFileName)

    axios.post(API_END_POINT,data).then(res=>{
      
      setBase64String(res?.data?.data?.base64File)

      setIsProcessing(false)
  
      setSuccess(true)

    }).catch(error =>{
      setIsProcessing(false)
  
      setFailure(true)

      setErrorMessage(error?.response?.data?.message || 'An error occurred !')
    })

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
             base64String={base64String}
             errorMessage={errorMessage}
             fileName={filename}
           />
         
        </section> 

        <section className={styles.right}>
          <img src="collecting.svg" alt=""/>                 
        </section>     
      </main>
    
    </div>
  )
}

export default Home

export const getStaticProps :GetStaticProps = async () =>{

  return{
     props:{
          API_END_POINT:process.env.API_END_POINT
     }
  }
}

