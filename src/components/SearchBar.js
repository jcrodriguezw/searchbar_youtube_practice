import React from 'react'

class SearchBar extends React.Component {
	constructor() {
		super();

		this.state = {
			term:''
		}
	}

	onhandleChange(term) {
		this.setState({
			term
		});
		this.props.onSearchTerm(term)
	}

	render() {
		return(
			<form>
				<input value={this.state.term} onChange={e => this.onhandleChange(e.target.value)}/>
				
			</form>
			)
	} 
}
export default SearchBar;