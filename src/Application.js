import React from 'react';
import Gallery from './Gallery';
import Heading from './Heading'; 
import Article from './Article'; 
import Content from './Content';

class Application extends React.Component {
   
   constructor(props){
   		super(props);

   		this.state = { heading: {title: "this is my page title", id: 1, author: "rajeev", date:"12/12/2017"} }
   		this.chageHeading = this.chageHeading.bind(this);
   }
   chageHeading(){
   	  this.setState({heading: {title: "this is my rajlaxmi", id: 2, author: "rajlaxmi", date:"12/12/2017"}  })
   }
   

   componentWillMount(){
   	 console.log('componentWillMount called');
   }

   componentDidMount(){
   	 console.log('componentDidMount called');
   }
   
   shouldComponentUpdate(nextProps, nextState){
   	 console.log('shouldComponentUpdate called', nextProps, nextState);
   	 return true;
   }
    

   render() {
   	console.log('render method called');
   	var title= "this is my page title";
      return (
      	<div>
		         <div className="header"> 
		            header {this.props.name}
		         </div>
		         
		         <div className="sidebar">sidebar</div>
		         
		         <Content>
		         
					 <Gallery/>
			         <Heading heading={this.state.heading} />
			         <button onClick={this.chageHeading}>change Heading</button>
			         <Article/>
		         </Content>
        </div> 

      );
   }
}

Application.defaultProps = {
	 name: 'new heading' 	
}

export default Application;