import { createStore } from 'zustand/vanilla';
import { renderTable } from '../modules/renderTable';
import { getItemFromLocalForage, setItemFromLocalForage } from '../services/localForage';

// Создаем store
export const cargoStore = createStore(set => ({
  cargoList: [],
  loadCargos: async () => {
    const savedCargos = await getItemFromLocalForage('cargoList');
    set({ cargoList: savedCargos || [] });
    renderTable();
  },
  addCargo: newCargo => {
    set(state => {
      const updatedList = [...state.cargoList, newCargo];
      setItemFromLocalForage('cargoList', updatedList);
      return { cargoList: updatedList };
    });
  },
  updateCargoStatus: async (cargo, newStatus) => {
    set(state => {
      const updatedCargoList = state.cargoList.map(item => {
        return item.id === cargo.id ? { ...item, status: newStatus } : item;
      });

      setItemFromLocalForage('cargoList', updatedCargoList);
      return { cargoList: updatedCargoList };
    });
  },
}));
