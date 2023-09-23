import React, { useState } from 'react';
import './style.css';

function App() {
  // State for tooltip styling
  const [tooltipStyles, setTooltipStyles] = useState({
    fontSize: '',
    padding: '',
    textColor: '',
    bgColor: '',
    cornerRadius: '',
    tooltipWidth: '',
    arrowWidth: '',
    arrowHeight: '',
  });

  // State for selected button ID
  const [selectedButton, setSelectedButton] = useState(null);

  // Update tooltip styles
  const updateTooltipStyles = (property, value) => {
    setTooltipStyles({
      ...tooltipStyles,
      [property]: value,
    });
  };

  // Handle button click
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="container">
      <div className="targele">
        <h1>Target element</h1>
        {selectedButton && (
          <button className="tarbtn" id={`button${selectedButton}`}>
            button {selectedButton}
          </button>
        )}
        <div className="dropdn">
          <a href="#">button 1</a>
          <a href="#">button 2</a>
          <a href="#">button 4</a>
          <a href="#">button 5</a>
        </div>
      </div>
      <div className="tooltiptext">
        <h2>Tooltip text</h2>
        <input
          type="text"
          placeholder="input"
          id="ttt"
          value={tooltipStyles.fontSize}
          onChange={(e) => updateTooltipStyles('fontSize', e.target.value)}
        />
      </div>
      <div className="ttype">
        <h2>Text size</h2>
        <input
          type="number"
          placeholder="input"
          id="ts"
          value={tooltipStyles.fontSize}
          onChange={(e) => updateTooltipStyles('fontSize', e.target.value)}
        />
      </div>
      <div className="padc">
        <h2>Padding</h2>
        <input
          type="number"
          placeholder="input"
          id="pad"
          value={tooltipStyles.padding}
          onChange={(e) => updateTooltipStyles('padding', e.target.value)}
        />
      </div>
      <div className="txtcol">
        <h2>Text color</h2>
        <input
          type="color"
          value={tooltipStyles.textColor}
          onChange={(e) => updateTooltipStyles('textColor', e.target.value)}
        />
      </div>
      <div className="bgcol">
        <h2>Background color</h2>
        <input
          type="color"
          value={tooltipStyles.bgColor}
          onChange={(e) => updateTooltipStyles('bgColor', e.target.value)}
        />
      </div>
      <div className="sline">
        <h2>Corner radius</h2>
        <input
          type="number"
          id="crn"
          value={tooltipStyles.cornerRadius}
          onChange={(e) => updateTooltipStyles('cornerRadius', e.target.value)}
        />
      </div>
      <div className="slineo">
        <h2>Tooltip width</h2>
        <input
          type="number"
          id="twn"
          value={tooltipStyles.tooltipWidth}
          onChange={(e) => updateTooltipStyles('tooltipWidth', e.target.value)}
        />
      </div>
      <div className="kline">
        <h2>Arrow width</h2>
        <input
          type="number"
          id="awn"
          value={tooltipStyles.arrowWidth}
          onChange={(e) => updateTooltipStyles('arrowWidth', e.target.value)}
        />
      </div>
      <div className="last">
        <h2>Arrow height</h2>
        <input
          type="number"
          id="ahn"
          value={tooltipStyles.arrowHeight}
          onChange={(e) => updateTooltipStyles('arrowHeight', e.target.value)}
        />
      </div>
      <div className="phone">
        <div className="btns">
          {[1, 2, 3, 4, 5].map((buttonId) => (
            <button
              key={buttonId}
              id={`button${buttonId}`}
              onClick={() => handleButtonClick(buttonId)}
            >
              button {buttonId}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
