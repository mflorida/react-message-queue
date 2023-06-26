import React, { useState } from 'react';
// import MessageGenerator from '../api';
import MessageListHeader from './MessageListHeader';
import MessageColumn from './MessageColumn';

import './MessageList.css';

// Bring in fake data to get columns rendering
import { getMockData } from '../data/getMockData';

// const messageTypes = [
//   'message',
//   'error',
//   'warning',
//   'info',
// ];

// const messageColors = {
//   error: '#f56236',
//   warning: '#fce788',
//   info: '#88fca3',
// };


// Prefer named exports
export function MessageList() {
  const [isStarted, setStarted] = useState(true)
  const [errorMsgs, setErrorMsgs] = useState(getMockData(1));
  const [warningMsgs, setWarningMsgs] = useState(getMockData(2));
  const [infoMsgs, setInfoMsgs] = useState(getMockData(3));

  const colsStyle = { width: '80%', minWidth: 900, maxWidth: 1500 };

  function clearAll(){
    setErrorMsgs(() => []);
    setWarningMsgs(() => []);
    setInfoMsgs(() => []);
  }

  return (
    <div className={'message-list'}>
      <MessageListHeader clearAll={clearAll} {...{isStarted, setStarted}} />
      <div className={'message-columns m-0-auto flex justify-between'} style={colsStyle}>
        <MessageColumn messageType={'error'} messages={errorMsgs} />
        <MessageColumn messageType={'warning'} messages={warningMsgs} />
        <MessageColumn messageType={'error'} messages={infoMsgs} />
      </div>
    </div>
  );

}