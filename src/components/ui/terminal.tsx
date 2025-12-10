import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TerminalProps {
  content: string;
}

const Terminal = ({ content }: TerminalProps) => {
  const [displayedText, setDisplayedText] = useState('');
  
  // Reset displayed text when content changes (e.g. language switch)
  useEffect(() => {
    setDisplayedText('');
  }, [content]);

  useEffect(() => {
    if (displayedText.length < content.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(content.slice(0, displayedText.length + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [content, displayedText]);

  return (
    <StyledWrapper>
      <div className="container">
        <div className="container_terminal" />
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user">visitor@mert.dev: ~</p>
        </div>
        <div className="terminal_body">
          <div className="terminal_promt">
            <span className="terminal_user">visitor@mert.dev:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_content">{displayedText}</span>
            <span className="terminal_cursor" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  
  .container {
    width: 100%;
    /* Remove fixed height to allow growing with text */
    min-height: 150px; 
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(#504b45 0%, #3c3b37 100%);
    flex-shrink: 0;
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
    box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
  }

  .btn-color {
    background: #ee411a;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
  }

  .user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
  }

  .terminal_body {
    background: rgba(20, 20, 20, 0.95);
    flex-grow: 1;
    padding: 15px;
    font-size: 14px;
    font-family: 'JetBrains Mono', monospace;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-wrap: break-word;
    border: 1px solid #3c3b37;
    border-top: none;
    /* Fixed height to prevent layout thrashing during typing */
    min-height: 120px; 
    display: flex; /* alignment */
    align-items: flex-start;
  }

  .terminal_promt {
    display: inline-block;
    color: #dcdcdc;
    width: 100%;
  }

  .terminal_promt span {
    margin-right: 4px;
  }
  
  .terminal_content {
    color: #e0e0e0;
    margin-left: 5px;
    white-space: pre-wrap;
    line-height: 1.5;
  }

  .terminal_user {
    color: #7eda28;
    font-weight: bold;
  }

  .terminal_location {
    color: #4878c0;
    font-weight: bold;
  }

  .terminal_bling {
    color: #dddddd;
  }

  .terminal_cursor {
    display: inline-block;
    height: 14px;
    width: 8px;
    background: #ffffff;
    vertical-align: middle;
    margin-left: 2px;
    animation: curbl 1s steps(2, start) infinite; /* Standard blinking cursor */
  }

  @keyframes curbl {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }`;

export default Terminal;
