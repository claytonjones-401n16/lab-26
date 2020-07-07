import React, { useEffect, useContext, useState } from 'react';
import ToDoItem from './ToDoItem';
import { SettingsContext } from '../Contexts';

export default function ToDoList(props) {

  const displayData = useContext(SettingsContext);
  
  const [displayItems, setDisplayItems] = useState([]);
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ totalPages, setTotalPages ] = useState(0);
  
  useEffect(() => {
    let itemList = [];

    if (!displayData.showComplete) {
      props.list.forEach(item => {
        if (!item.complete) {
          itemList.push(item);
        }
      });
    } else {
      itemList = props.list;
    }

    let items = [];
    let incomplete = 0;

    console.log(displayData.displayCount);


    let max = (pageNumber * displayData.displayCount) + displayData.displayCount;
    console.log('max:',max);

    if (itemList.length > 0) {
      for(let i = pageNumber * displayData.displayCount; i < max; i++) {
        if (i < itemList.length) {
          items.push(<ToDoItem item={itemList[i]} key={i} setRequest={ props.setRequest }/>);
        }
      }
    }

    console.log('items length:', items.length);
    setTotalPages(Math.ceil(itemList.length / displayData.displayCount));
    console.log('totalPages:',totalPages);


    props.list.forEach( (item, i) => {
      if (!item.complete) {
        incomplete++;
      }
    });

    setDisplayItems(items);
  
    let str = `${incomplete} Incomplete Task`;
  
    if (incomplete !== 1) {
      str += 's';
    }
  
    document.title = str;
  }, [props.list, props.setRequest, displayData.displayCount, pageNumber, displayData.showComplete, totalPages]);

  return (
    <div className='list-container'>
      {pageNumber > 0 && pageNumber < totalPages && (
        <button onClick={() => {
          setPageNumber(pageNumber - 1);
        }}>Previous</button>
      )}
      {totalPages > 1 && pageNumber < totalPages - 1 && (
        <button onClick={() => {
          setPageNumber(pageNumber + 1);
        }}>Next</button>
      )}
      <h1>Your Tasks:</h1>
      <div className='list'>
        { displayItems }
      </div>
    </div>
  )
}