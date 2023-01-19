export class BaseProvider {
  private _provider: string;

  constructor(provider: string) {
    this.provider = provider;
  }

  protected get provider() {
    return this._provider;
  }

  protected set provider(value: string) {
    this._provider = value;
  }
}
