export type DDPosition = {
  posX: number;
  posY: number;
};

export type DDData = DDPosition & {
    isOpen: boolean;
    content: string;
}