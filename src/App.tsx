import React, { useState, useEffect } from "react";

interface ClickDataFormat {
  timestamp: number;
  x: number;
  y: number;
}

interface ScrollDataFormat {
  timestamp: number;
  y: number;
}

const App: React.FC = () => {
  const [scrollData, setScrollData] = useState<ScrollDataFormat[]>([]);
  const [clickData, setClickData] = useState<ClickDataFormat[]>([]);

  let scrollTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      setScrollData((prevData) => [...prevData, { timestamp: Math.floor(Date.now() / 1000), y: window.scrollY }]);
    }, 1000);
  };

  const handleClick = (event: MouseEvent) => {
    setClickData((prevData) => [
      ...prevData,
      {
        timestamp: Math.floor(Date.now() / 1000),
        x: event.clientX,
        y: event.clientY,
      },
    ]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div className="text-center">
      <p className="text-5xl p-10"> Telemetry Data</p>
      <p className="text-2xl"> Scroll Data </p>
      <p>
        <ul className="p-1">
          {scrollData.map((record, index) => (
            <li key={index}>
              {index + 1}. Scrolled to {record.y}px at {record.timestamp}.
            </li>
          ))}
        </ul>
      </p>
      <br></br>
      <p className="text-center text-2xl"> Click Data </p>
      <p>
        <ul className="p-1">
          {clickData.map((record, index) => (
            <li key={index}>
              Click {index + 1} at ({record.x}, {record.y})px at {record.timestamp}
            </li>
          ))}
        </ul>
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="text-2xl"> Scroll Data </p>
      <p>
        <ul className="p-1">
          {scrollData.map((record, index) => (
            <li key={index}>
              {index + 1}. Scrolled to {record.y}px at {record.timestamp}.
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default App;
