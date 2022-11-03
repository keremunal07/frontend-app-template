export const useDebounce = (func: never, delay = 400) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, delay);
  };
};
