export interface Tab {
    heading: string;
    content: React.Element[] | React.Element;
}

export interface TabGroup {
    tabs: Tab[];
}