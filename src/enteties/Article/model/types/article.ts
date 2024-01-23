export enum EArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface IArticleBlockBase {
    id: string;
    type: EArticleBlockType;
}

export interface IActicleCodeBlock extends IArticleBlockBase {
    type: EArticleBlockType.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase{
    type: EArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: EArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type TArticleBlock = IActicleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum EArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface IArticle {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createAt: string,
    type: string[],
    blocks: TArticleBlock[],
}
