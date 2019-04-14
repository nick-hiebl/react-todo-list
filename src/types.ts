export interface ItemCreatorProps {
    create: CreateItem;
};

export interface TodoListProps {
    items: TodoItem[],
    update: UpdateItem,
};

export interface TodoItem {
    task: string;
    hasCompleted: boolean;
};

export type CreateItem = (item: TodoItem) => void;
export type UpdateItem = (item: TodoItem, status: boolean) => void;