# useRef Demo

## 一、`useRef` 的使用场景

1. 帮助我们获取到 `DOM` 元素或者组件实例；
2. 可以保证在组件生命周期中获取到的值是原子性的；
3. 可以让我们在父组件中调用子组件方法。

### 1.1 `useRef` 使用的注意事项

1. 不要把 `ref` 当作依赖项；
2. 如果想 `DOM` 渲染后执行一些事情，请使用 `useCallback`；

## 参考：

1. [10 分钟让你掌握 useRef，还一个 80%都被用错的注意事项！](https://www.bilibili.com/video/BV13T411e7AW)
