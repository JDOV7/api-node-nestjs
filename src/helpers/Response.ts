export class ResponseGeneric<T> {
  constructor(
    public readonly result: boolean,
    public readonly message: string,
    public readonly data: T,
  ) {}
}
