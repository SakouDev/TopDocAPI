export interface IRepository<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t: T, id: number): Promise<boolean | number>;
}

export interface IRepositoryMail<T> {
    findByMail(t: string): Promise<T | null>;
}

export interface IRepositoryToken<T> {
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
}

export interface IRepositoryAuth<T, D> {
    login(t: T): Promise<T>;
    loginAdmin(t: T): Promise<T>;
    logout(t: T): Promise<T>;
    verifToken(t: D): Promise<D>;
}