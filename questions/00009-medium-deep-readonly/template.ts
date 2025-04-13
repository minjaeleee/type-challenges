// 1. case1 - 함수
// 2. case2 - 배열
// 3. case3 - 객체
// 4. case4- 기타

type DeepReadonly<T> =
  T extends (...args: any[]) => any
    ? T
    : T extends any[]
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : T
