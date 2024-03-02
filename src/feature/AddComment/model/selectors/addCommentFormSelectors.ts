import { IStateSchema } from 'app/providers/StoreProvider';

export const getCommentFormText = (state: IStateSchema) => state.addNewCommentForm?.text ?? '';
export const getCommentFormError = (state: IStateSchema) => state.addNewCommentForm?.error || undefined;
