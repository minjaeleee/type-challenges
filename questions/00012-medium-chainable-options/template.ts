type Chainable<R = {}> = {
  option<K extends string, V>(
    key: K extends keyof R ? never : K, // 중복 키 제거
    value: V
  ): Chainable<R & Record<K, V>>
  // 최종 객체 생성
  get(): R
}
