// 1. T에 K가 key 값이 존재할 경우 readonly인 케이스 생성
// 2. & 연산자로, readonly가 붙은 케이스 붙지 않은 케이스 결합
// 3. T에 K가 key 값이 존재하지 않은 경우, 그대로 키-밸류 생성

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P] ;
}
