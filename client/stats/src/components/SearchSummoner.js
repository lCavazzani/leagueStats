import React from "react";
import styled from "styled-components";
import Select from 'react-select'

const Padding = styled.div`
  padding: 28px;
`;

const Input = styled.input`
  padding: 10px;
`;
const Button = styled.button`
  height: 50px;
  width: 100px;
`;

const servers = [
  { value: 'na1', label: 'NA' },
  { value: 'br1', label: 'BR' },
  { value: 'eun1', label: 'EUN' },
  { value: 'jp1', label: 'JP' },
  { value: 'kr1', label: 'KR' },
  { value: 'la1', label: 'LA1' },
  { value: 'la2', label: 'LA2' },
  { value: 'oc1', label: 'OC' },
  { value: 'tr1', label: 'TR' },
  { value: 'ru', label: 'RU' }
]

const SearchCustomer = ({ name, searchSummoner, handleChange, handleSelectChange, server }) => {
  return (
    <Padding>
    <Input onChange={handleChange} value={name} />
    <Select options={servers} styles={{width: 100}} value={server} onChange={handleSelectChange}/>
    <Button onClick={() => searchSummoner(name, server)} disabled={name && server ? false : true}> Search </Button>
  </Padding>
  );
};

export default SearchCustomer;
