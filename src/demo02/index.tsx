/*
 * @Author: ellmc2 jellmc2@qq.com
 * @Date: 2023-03-10 15:32:34
 * @LastEditors: ellmc2 jellmc2@qq.com
 * @LastEditTime: 2023-03-10 15:40:37
 * @FilePath: /useRef-demo/src/demo02/index.tsx
 * @Description: 可以保证在组件生命周期中获取到的值是原子性的；
 */
import React, { useRef } from "react";

type Props = {};

const Alert = (props: Props) => {
  const count = useRef(0);

  const onClick = () => {
    setTimeout(() => {
      alert(count.current);
    }, 3000);
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>Show the count: {count.current}</div>
      <button onClick={onClick}>alert the count</button>
      <button onClick={() => (count.current += 1)}>add the count</button>
    </div>
  );
};

export default Alert;
