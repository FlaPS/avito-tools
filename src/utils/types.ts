export type UnPromisifiedObject<T> = {[k in keyof T]: UnPromisify<T[k]>}
export type UnPromisify<T> = T extends Promise<infer U> ? U : T;
