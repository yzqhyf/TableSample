import React, { useState, useEffect, Fragment } from "react";
import { useResize } from "./Resize";

const Clock = props => {
  const [date, setDate] = useState(new Date());
  const { width, height } = useResize();

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Fragment>
      Current Time: {date.toLocaleTimeString()}, {width}, {height}
    </Fragment>
  );
};

export default Clock;
