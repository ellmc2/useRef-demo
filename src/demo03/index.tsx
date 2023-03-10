/*
 * @Author: ellmc2 jellmc2@qq.com
 * @Date: 2023-03-10 15:40:50
 * @LastEditors: ellmc2 jellmc2@qq.com
 * @LastEditTime: 2023-03-10 16:02:37
 * @FilePath: /useRef-demo/src/demo03/index.tsx
 * @Description: 可以让我们在父组件中调用子组件方法。
 */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";

type Props = {};

export interface ExportEvent {
  hello: Function;
}

const Child: ForwardRefRenderFunction<unknown, Props> = (props, ref) => {
  useImperativeHandle(ref, (): ExportEvent => {
    return {
      hello: () => {
        alert("hello");
      },
    };
  });
  return <div>Child</div>;
};

const FChild = forwardRef(Child);

export default function Demo3() {
  const childRef = useRef<ExportEvent>(null);

  return (
    <div>
      <FChild ref={childRef} />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          childRef.current && childRef.current.hello();
        }}
      >
        say hello
      </div>
    </div>
  );
}
