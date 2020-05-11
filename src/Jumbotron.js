import React, {useState, useEffect, useRef}from 'react';
import './Components.scss';
import TextTransition, { presets } from "react-text-transition";
 
export default function Jumbotron() {

    const [index, setIndex] = useState(0)
    // const [visibilityStates, setVisibilityStates] = useState([true, false, false])
    let TEXTS = [" a Developer.", " a Designer.", "an Engineer.","a Programmer.", "a Maker."];

    
    useInterval(()=>{
        setIndex(index+1)
    }, 5000)

    return (
        <div className="jumbotron">
            <div className="textContainer">
                <span className="dynamicTextIntro">
                    My name is Cooper Jones.
                </span>
                <span className="dynamicText">
                    {"I am "}
                    <TextTransition
                        text={TEXTS[index % TEXTS.length]}
                        noOverflow
                        inline
                    />
                </span>
                <span></span>
            </div>
        </div>
    );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}