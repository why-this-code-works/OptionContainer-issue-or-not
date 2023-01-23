import { useState } from 'react';
import './App.css';
import { Select, Option } from '@coachhubio/nova-select';
import { OptionContainer } from '@coachhubio/nova-dropdown-select';
import styled from 'styled-components';

const MySelect = styled(Select)`
  ${OptionContainer} {
    background-color: red;
  }
`;

function App() {
  const [val, setVal] = useState('2');

  return (
    <div className="App">
      <MySelect value={val} onChange={setVal}>
        <Option value="1" title="1" />
        <Option value="2" title="2" />
      </MySelect>
      <p>
        Edit <code>src/App.tsx</code> to make changes.
      </p>
    </div>
  );
}

export default App;
