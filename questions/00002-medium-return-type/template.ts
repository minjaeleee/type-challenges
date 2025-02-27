// 1. 제네릭 T는 함수이다.
// 2. T의 리턴 값을 반환한다.
type MyReturnType<T extends ((...args: any) => any)> = T extends (...args: any) => infer R ? R : never
