const Message = ({
    styles,
    failure,
    success,
    downloadUrl,
    errorMessage
}) =>{
    return (
        <article className={styles.message}>
        {failure? <p className={styles.error}>{errorMessage}</p>: ''}
        {success? <p className={styles.success}>Process successfull
         <a href={downloadUrl} download>Download</a>
         </p>: ''}
      </article>
    )
}

export default Message;