import React from 'react'
import arrow from '../../../public/images/arrow.png'

function Collapse() {
  return (
    <div className="collapse" >
    <h3 className='collapse_titre' onClick={() => setToggle(!toggle)} >
        {title}
        <img 
            className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
            src={arrow} 
            alt="show content" 
        />
    </h3>
    <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content) ? content.map((item, index) => {
            return (
                <p key={index}>{item}</p>
            )
        }) : content
        }
    </div> 
</div>
  )
}

export default Collapse