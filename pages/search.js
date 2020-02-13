import React, { Component } from 'react'
import Router from 'next/router'
import { FiArrowLeft } from "react-icons/fi";


class Search extends Component {


	render() {


		return (

			<section id="review">
				
				<div id="head">
					<button className="go-back" onClick={() => Router.back()}>
						<FiArrowLeft />
					</button>
				</div>
				
			
				search

			</section>
		);
	}
}

export default Search;
