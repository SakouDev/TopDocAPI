export interface IService<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t: T, id: number): Promise<boolean | number>;
}

export interface IAuthService<T,D> {
    login(t: T): Promise<T>;
    register(t: T): Promise<T>;
    refreshToken(t: D): Promise<D>;
}