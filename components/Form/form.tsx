import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import {FC, ReactElement} from 'react'
import { FormProps } from '../../types/props'

const Form: FC<FormProps> = ({styles,
            dropHandler,
            dragOverHandler,
            isProcessing,
            onInputChangedHandler}) : ReactElement =>{
    return (
        <article 
            className={styles.input} 
            onDrop={dropHandler}
            onDragOver={dragOverHandler}>
            {isProcessing?
            <ProgressIndicator/>:
            <>
              <p>Drop a file here or </p>
              <label htmlFor="fileInput" className={styles.input_label} data-testid="browse_file_label">Browse file</label>
              <input 
                type='file'
                id="fileInput" 
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                multiple={false}
                onChange={onInputChangedHandler}/> 
              </>
             }             
          </article>

    )
}

export default Form