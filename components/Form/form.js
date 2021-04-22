import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'

const Form = ({styles,
            dropHandler,
            dragOverHandler,
            isProcessing,
            onInputChangedHandler}) =>{
    return (
        <article 
            className={styles.input} 
            onDrop={dropHandler}
            onDragOver={dragOverHandler}>
            {isProcessing?
            <ProgressIndicator/>:
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

    )
}

export default Form