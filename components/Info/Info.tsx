import {FC, ReactElement} from 'react'
import { InfoProps } from '../../types/props';

const Info: FC<InfoProps> = ({styles}): ReactElement =>{

    return (
        <article className={styles.info}>
            <h2>Convert your word documents to pdf</h2>
            <p>Pay $0</p>
        </article>
    )
}

export default Info;