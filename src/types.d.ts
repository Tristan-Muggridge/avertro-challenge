export interface Tab {
    heading: string;
    content: React.Element[] | React.Element;
}

export interface TabGroup {
    tabs: Tab[];
}

export interface KeyMeasure {
    id: number;
    name: string;
}

export interface Objective {
    id: number;
    name: string;
    keyMeasures: KeyMeasure[];
    startDate: Date;
    endDate: Date;

    createdDate: Date;
    updatedDate: Date;
}

export interface ILocalStorage {
    get<T>(key:string): T | null;
    set<T>(key:string, value: T): void;
    delete(key:string): void;
    clear(): void;
}