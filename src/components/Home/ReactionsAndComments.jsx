import React, { useState } from 'react'
import Reactions from './Reactions'
import Comments from './Comments'

const ReactionsAndComments = ({props}) => {
    const [show, setShow]= useState(false);
  return (
    <div>
        <Reactions props={props} show={{show, setShow}}/>
             {
                show &&
              <Comments props={props} />
             }
        
    </div>
  )
}

export default ReactionsAndComments