type Unshift<T extends any[], U> = T extends [...infer R] ? [U, ...R] : never
