import { FC, ReactElement } from 'react'
import { HeaderProps } from '../../types/props';

const Header: FC<HeaderProps> = ({styles}) : ReactElement =>{
 return (
    <header className={styles.header}>
        <img src="undraw_Filing_system_re_56h6.svg" alt="logo"/>
        <h1>Chuusa</h1>
  </header>
 )
}

export default Header;