export type DragondPosition = {
  posX: number;
  posY: number;
};

export type DragondData = DragondPosition & {
    isOpen: boolean;
    content: string;
}