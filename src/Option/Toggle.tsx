import React, { FunctionComponent as FC } from "react"
import styles from './Toggle.module.css'


const Toggle : React.FC<{color: string
                        id: number
                        text:string
                        isSelected: boolean
                        handleChange: (e:any) => void                        
                        }> = ({color,id,text,isSelected,handleChange}) => {    
    
    return(
        <div className={styles.div}>            
            <label className={styles.switch}>   
                <input type="checkbox" name={''+id} checked={isSelected} onChange={handleChange} />     
                <span className={styles.slider + ' '+color+ ' ' + styles.round}></span> 
                <label className={styles.name} htmlFor="fast">{text}</label>          
            </label>
        </div>
    )
}

export default Toggle