import React, { useContext } from 'react';
import { SettingsContext } from '../Contexts';


export default function Settings(props) {

  const displayData = useContext(SettingsContext);

  return (
    <div>
      <label>Display Count: </label>
      <input type="number" min="1" value={displayData.displayCount} onChange={(e) => {
        displayData.setDisplayCount(parseInt(e.target.value));
      }}/>
      <label>Show complete? </label>
      <input type="checkbox" checked={displayData.showComplete} onChange={() => {
        displayData.setShowComplete(!displayData.showComplete);
      }}/>
    </div>
  )
}