import { createSignal, createEffect, onCleanup } from 'solid-js';

const Counter = (props) => {
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  console.log('Count');
  return (
    <>
      <div>{props.a()}</div>
      <div>{count()}</div>
    </>
  );
};

export default Counter;
