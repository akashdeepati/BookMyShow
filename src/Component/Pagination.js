import React from 'react';
import '../App.css';

const Pagination = ({data,PageMethod}) => {
    const pages = [];
    for (let i=1; i<Math.ceil(data.length/4)+1;i++){
        pages.push(i)
    }

    return (
        <div>
            <center>
                {
                    pages.map((pages) => (<div className= "pagebutton" onClick={()=>PageMethod(pages)}>{pages}
                        
                    </div>)

                    )
                }
            </center>
            <center>

            </center>
        </div>
    )
}
export default Pagination;