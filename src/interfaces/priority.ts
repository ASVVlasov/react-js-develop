import { EExpression } from './expression';

export type Priority = {
    [key in EExpression]: number;
};
