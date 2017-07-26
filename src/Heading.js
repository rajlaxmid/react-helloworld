
import React from 'react';

 const  Heading =(props) => {
 	const { title, id, author, date } =  props.heading;
 	return(<div>{title} {id}</div>)
 };

export default Heading;


