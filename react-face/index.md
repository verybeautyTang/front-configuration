## react fiber
1、对于react原理的了解
2、对新技术的敏感以及求知欲

react fiber的作用： 为了使react在渲染过程中可以被中断，可以将控制权交还给浏览器,可以让位给优先级更高的任务。

对于计算量比较大的js和dom计算 不会特别卡顿 而是一帧一帧的有规律的执行任务

问题：
1. generator有类似的功能，为什么不直接使用？

* generator如果使用的话，要把所有的代码都包装成 generator * 的形式，非常麻烦，工作量非常大
* generator内部本身就有状态 很难在恢复执行的时候


2. 如何判断当前环境是否有高优先级代码呢？

 首先js环境是没有办法去判断是否有高优先级的，只有约定一个合理的执行时间

 当超过了执行时间，如果任务并没有执行完成，那么就要中断执行任务，将控制权还给浏览器

 时间： 每秒60帧 1帧 = 1000 / 60f = 16ms

使用api： requestIdleCallback
 使浏览器在**有空**的时候执行回掉，回掉会传入参数，表示浏览器有多少时间供我们执行任务。



 3. 浏览器很忙怎么办？

 requestIdleCallback有一个timeout参数，如果超过这个timeout后还没执行 那么会在下一帧强制执行回掉


 4. 浏览器兼容？

  requestIdleCallback的兼容性很差，通过messageChannel模拟实现了 requestIdleCallback的功能


5. timeout超时后一定要被执行吗？

不是的 react里面有5个优先级的等级 

* Immediate 最高优先级 这个优先级应该被马上执行不能被中断
* UserBlocking 一般是用户交互的结果 需要理解得到反馈
* Normal 不需要用户立即就感受到的变化 比如网络请求
* Low 任务可以延后 但是一定要执行
* Idle 可以被无限的延后

## 平时用过高阶组件吗？什么是高阶组件？ 高阶组件能用来干什么？

高阶组件：简称HOC 
1. 是一个函数
2. 入参：原来的react组件
3. 返回值： 新的react组件
4. 是一个纯函数，不应该有任何副作用【一般情况下哈，因为高阶组件存在副作用的话，追根溯源不方便】


```js
  function helloWorld() {
    const name = sessionStorage.getItem('name');
    console.log(`hello beautiful world, my name is ${name}`);
  }
    function byeWorld() {
    const name = sessionStorage.getItem('name');
    console.log(`good bye world, my name is ${name}`);
  }
```

```js
   function helloWorld(name) {
    console.log(`hello beautiful world, my name is ${name}`);
  }
    function byeWorld(name) {
    console.log(`good bye world, my name is ${name}`);
  }
  function getName() {
    const tempFunction = () => {
      const name = sessionStorage.getItem('name');
      getName()
    }
    return tempFunction;
  }

  const getHelloName = getName(helloWorld);
   const getByeName = getName(byeWorld)

```

### 怎么写一个高阶组件？

1. 普通方式

2. 装饰器的形式

3. 多个高阶组件的组合

### 高阶组件能用来干什么？技术层面上？

1. 属性代理
2. 继承/劫持

