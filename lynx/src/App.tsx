import { atom, useAtom } from "jotai";
import { Button } from "./components/Button.jsx";

const counter = atom(0);

export function App() {
  const [count, setCount] = useAtom(counter);

  return (
    <view class="flex flex-col gap-3 size-full justify-center items-center">
      <text class="size-18 border-1 border-slate-4 p-4 rd-md bg-slate-2">
        {count}
      </text>
      <Button bindtap={() => setCount((c) => c + 1)}>Increment</Button>
    </view>
  );
}
