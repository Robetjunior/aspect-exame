// examesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExameState {
  lista: any[];
  carregado: boolean;
}

const initialState: ExameState = {
  lista: [],
  carregado: false,
};

const examesSlice = createSlice({
  name: 'exames',
  initialState,
  reducers: {
    setExames: (state, action: PayloadAction<any[]>) => {
      state.lista = action.payload;
      state.carregado = true; 
    },
  },
});

export const { setExames } = examesSlice.actions;
export default examesSlice.reducer;
