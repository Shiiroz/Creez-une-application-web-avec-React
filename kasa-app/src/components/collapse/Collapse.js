import classes from './collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={classes.collapse} >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={ toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <span key={index}>{item}</span>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}