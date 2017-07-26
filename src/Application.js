import React from 'react';

class Application extends React.Component {
   render() {
      return (
      	<div>
		         <div className="header"> 
		            header
		         </div>
		         
		         <div className="sidebar">sidebar</div>
		         
		         <div className="content">
					  <div className="gallery">gallery</div>
			         <div className="heading">heading</div>
			         <div className="article">article</div>
		         </div>
        </div> 

      );
   }
}



export default Application;