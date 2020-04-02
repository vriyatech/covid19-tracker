import React from 'react'

export const Municipality_select = ({Municipality, fun}) => (
  <React.Fragment>
    <input list="browsers" name="location" onChange={fun} placeholder='Please select your Municipality.' />
            <datalist id="browsers" name="location" onChange={fun}>
                   
            {Municipality.map( (data,i) =>
              <option value={data} key={i} name="location" >{data}</option>
                    
            )}
            </datalist>
            

  </React.Fragment>
);

