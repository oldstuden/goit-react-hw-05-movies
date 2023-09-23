import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  Wrapper,
} from './SearchBar.styled';

export default function SearchBar() {
  const [, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  const changeFilter = evt => {
    setValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ movie: value });
    setValue('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>
            <BsSearch size="25" />
          </SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          onChange={changeFilter}
          value={value}
          type="text"
          name="movie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </SearchForm>
    </Wrapper>
  );
}
