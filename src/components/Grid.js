import React, { Component } from 'react';
import './grid.css';
import Modal from "./Modal";

export default class Grid extends React.Component {

state={
	show:false
}

showMe = () => {
	this.setState({
		...this.state,
		show:!this.state.show
	});
}

	render()
	{
		return (
			<div>
			<div className="grid_elem" >
			<h2>{this.props.item}</h2>

			
			<a className="bttn_cls" onClick={this.showMe}>show more</a>
				
			</div>
			<Modal onClose={this.showMe} show={this.state.show} tittle={this.props.item}>{this.props.listd} </Modal>
			</div>
			);
	}
}
// <ol>{this.props.listd}</ol>