import {EnvironmentCloud} from '../types/env.types';
import {Store} from './store';

export class EnvStore extends Store<EnvironmentCloud | undefined> {
  private static instance: EnvStore;

  private env: EnvironmentCloud | undefined;

  private constructor() {
    super();
  }

  static getInstance() {
    if (!EnvStore.instance) {
      EnvStore.instance = new EnvStore();
    }
    return EnvStore.instance;
  }

  set(env: EnvironmentCloud | undefined) {
    this.env = env;

    this.populate(env);
  }

  get(): EnvironmentCloud | undefined {
    return this.env;
  }

  cloud(): boolean {
    return this.env !== undefined;
  }

  override subscribe(callback: (data: EnvironmentCloud | undefined) => void): () => void {
    const unsubscribe: () => void = super.subscribe(callback);

    callback(this.env);

    return unsubscribe;
  }
}