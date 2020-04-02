import React from 'react'

export const Municipality_select = ({Municipality, fun}) => (
            <select data-live-search="true" data-none-results-text="found no results" title="Please select your location:" className=" selectpicker" id="provience" name="location" onChange={fun}>
                   
            {Municipality.map( (data,i) =>
              <option value={data} key={i} data-tokens={data} name="location" >{data}</option>
                    
            )}
            </select>
            


);
