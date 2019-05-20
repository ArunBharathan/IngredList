import React from "react";


const modalstyle={
	position:'fixed',
	top:0,
	bottom:0,
	left:0,
	right:0,
	backgroundColor:'rgba(0,0,0,0.4)',
	padding:50

}
const constent={
	backgroundColor:'#fff',
	borderRadius:4,
	Width:500,
	Height:700,
	margin:'0 auto',
	padding:30,
	position:'relative'
}
export default class Modal extends React.Component {

	onClose= (e)=>{
		this.props.onClose && this.props.onClose(e);
	}
	render(){
		if (!this.props.show){
			return null;
		}
		return (
			<div style={modalstyle}>
			<div style={constent}>
			<h1>{this.props.tittle}</h1>
			{this.props.children}
			<div><button onClick={(e)=>{this.onClose(e)}}>close</button></div>
			</div>
			</div>
			);
	}

}