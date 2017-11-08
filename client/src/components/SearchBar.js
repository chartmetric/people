import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Search, Grid, Header } from 'semantic-ui-react';

const SEARCH_LIMIT = 10;

class SearchBar extends Component {
  handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  handleSearchChange = (e, { value }) => {
    const {
      fetchUsers,
    } = this.props;
    fetchUsers(value, SEARCH_LIMIT);
  }
  transformResults = data =>
    data.map(entry => ({
      title: entry.name,
      description: entry.job,
      image: entry.avatar,
    }))

  render() {
    const {
      data,
      isFetching,
    } = this.props;
    return (
      <Search
        style={{
          align: 'center'
        }}
        fluid
        size='big'
        loading={isFetching}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={this.transformResults(data)}
      />
    )
  }
}

const mapStateToProps = state => {
  const {
    users: {
      all: {
        data,
        isFetching,
      },
    }
  } = state;
  return {
    data,
    isFetching,
  };
};


export default connect(mapStateToProps, actions)(SearchBar);
