import { JSX, Show } from "solid-js";

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 1;

const Tooltip = (props: { text: string; children: JSX.Element }) => {
  const width = (props.text.length - 1).toString();
  return (
    <div class="group/tooltip relative flex items-center">
      {props.children}
      <Show when={!isTouchDevice}>
        <span
          style={`transform: translate(-50%, 2rem); min-width: ${width}ch`}
          class={`left-50% bg-light-100 pointer-events-none absolute z-10 hidden select-none whitespace-nowrap rounded border border-neutral-500 p-1 text-center font-sans text-xs text-slate-900 group-hover/tooltip:inline dark:bg-neutral-800 dark:text-slate-100`}
        >
          {props.text}
        </span>
      </Show>
    </div>
  );
};

export default Tooltip;
