/*
 * @Author: ellmc2 jellmc2@qq.com
 * @Date: 2023-03-10 16:06:08
 * @LastEditors: ellmc2 jellmc2@qq.com
 * @LastEditTime: 2023-03-10 16:19:51
 * @FilePath: /useRef-demo/src/demo04/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useCallback, useRef } from "react";

type Props = {};

const index = (props: Props) => {
  const input = useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  const inputRef = useCallback((node: HTMLDivElement) => {
    if (node != null) {
      const h = node.getBoundingClientRect().height;
      setHeight(() => {
        console.log("...");
        return h;
      });
    }
  }, []);
  return (
    <>
      <div id="inp" ref={inputRef} style={{ width: 10, height: 10 }}></div>
      <div>{height}</div>
    </>
  );
};

export default index;
