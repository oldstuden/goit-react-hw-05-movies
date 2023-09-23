import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid gray;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 96px;
  height: 48px;
  border: 0;

  background-color: silver;

  cursor: pointer;
  outline: none;
`;

export const SearchFormBtnLabel = styled.span``;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
