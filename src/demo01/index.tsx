/*
 * @Author: ellmc2 jellmc2@qq.com
 * @Date: 2023-03-10 11:07:27
 * @LastEditors: ellmc2 jellmc2@qq.com
 * @LastEditTime: 2023-03-10 15:32:18
 * @FilePath: /useRef-demo/src/demo01/index.tsx
 * @Description: 帮助我们获取到 `DOM` 元素或者组件实例；
 */

import { MouseEventHandler, useCallback, useRef } from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const input = useRef<HTMLDivElement>(null);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const clientX = event.clientX;
      const clientY = event.clientY;

      // 原生JS写法
      // const inp = document.getElementById("inp") as HTMLElement;
      // inp.innerHTML = `the clientX : ${clientX}, clientY : ${clientY}`;

      // useRef写法
      const inp = input.current as HTMLDivElement;
      inp.innerHTML = `the clientX : ${clientX}, clientY : ${clientY}`;
    },
    []
  );

  return (
    <div>
      <div
        style={{ width: 200, height: 200, backgroundColor: "red" }}
        onMouseDown={onMouseDown}
      />
      <div id="inp" ref={input} />
    </div>
  );
}
