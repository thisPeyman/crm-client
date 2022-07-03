import { createFeature, createReducer } from '@ngrx/store';

interface State {
  user: {
    username: string;
    email: string;
  };
}

const initialState: State = {
  user: { email: '', username: '' },
};

export const AuthFeature = createFeature({
  name: 'auth',
  reducer: createReducer(initialState),
});
