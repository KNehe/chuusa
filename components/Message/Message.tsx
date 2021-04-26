import { FC, ReactElement} from 'react'
import { MessageProps } from '../../types/props';

const Message: FC<MessageProps>= ({
    styles,
    failure,
    success,
    base64String,
    errorMessage,
    fileName
}): ReactElement =>{
    
    const link = `data:application/pdf;base64,${base64String}`

    return (
        <article className={styles.message}>
        {failure? <p className={styles.error}>{errorMessage}</p>: ''}
        {success? <p className={styles.success}>Process successful
         
         <a href={link} download={fileName}>Download</a>
         </p>: ''}
      </article>
    )
}

export default Message;