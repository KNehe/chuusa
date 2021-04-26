import styles from './../../styles/ProgressIndicator.module.scss'
import { FC, ReactElement} from 'react'

const ProgressIndicator: FC = (): ReactElement =>{
    return <div className={styles.ProgressIndicator} data-testid="progress_indicator"></div>
}

export default ProgressIndicator;