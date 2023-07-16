export interface Tab {
    heading: string;
    content: React.Element[] | React.Element;
}

export interface TabGroup {
    tabs: Tab[];
}

export interface KeyMeasure {
    id: string;
    name: string;
}

export interface Objective {
    id: string;
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