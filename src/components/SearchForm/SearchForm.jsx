import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

const INITIAL_STATE = {
  query: '',
};

export class SearchForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onChange = e => {
    const { value: query } = e.target;

    this.setState({ query });
  };

  onSubmit = e => {
    e.preventDefault();

    const { query } = this.state;

    this.props.onSubmit(query);

    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { query } = this.state;

    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>

        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          onChange={this.onChange}
          value={query}
        />
      </SearchFormStyled>
    );
  }
}
