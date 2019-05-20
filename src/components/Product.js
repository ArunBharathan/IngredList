import React, { Component } from 'react';
import data from "./test.json";
import Grid from './Grid';
import './grid.css';

export default class Product extends React.Component {

	constructor(){

		super();
		/*this.state=data;
		
		console.log(this.state);*/
	}
	render(){
		
		let id=0;
		let lst=data.map(dt =>{id++;
		return (
				
				<Grid item={dt.name} listd={dt.ingr.map(k=>{return(<li>{k}</li>);})} />


				);
		});
		return (
			<div className="grid">
			
			{console.log(lst)}
			{lst}
			
			</div>
				);
	}
}