import React from 'react';


class Content extends React.Component {
   render() {
      return (
         <div className="content">
            <h4>this is my component</h4>
            {this.props.children}
         </div>
      );
   }
}

export default Content;