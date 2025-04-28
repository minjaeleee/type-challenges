// Promise로 감싸져 있는 타입일 때는 재귀적으로 순회하며 내부 타입 리턴, 아닐 때는 타입 리턴

type MyAwaited<T> = T extends { then: (onfulfilled: (arg: infer U) => any) => any } 
  ? MyAwaited<U>
  : T extends Promise<infer U> 
    ? MyAwaited<U> 
    : T;
