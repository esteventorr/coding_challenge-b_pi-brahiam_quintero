import { create } from "zustand";
import { getAllPokemons as getAllPokemonsConn } from "../data/dataConnector";

const usePokemonsStore = create((set) => ({
  allPokemons: [],
  getAllPokemons: async () => set({ allPokemons: await getAllPokemonsConn() }),
}));

const useAppStateStore = create((set) => ({
  // Edit Mode
  editBoxShow: true,
  editBoxToggle: () =>
    set((state) => ({
      editBoxShow: !state.editBoxShow,
    })),
  editBoxMode: "new",
  editBoxModeSwitch: () =>
    set((state) => ({
      editBoxMode: state.editBoxMode === "new" ? "edit" : "new",
    })),
  editBoxValues: {
    id: -1,
    nombre: "",
    imagen: "",
    ataque: 50,
    defensa: 50,
  },
  editBoxLoadValuesUpdate: (changes) =>
    set((state) => ({
      editBoxValues: { ...state.editBoxValues, ...changes },
    })),
  editBoxClear: () =>
    set((state) => ({
      ...state,
      editBoxValues: {
        id: -1,
        nombre: "",
        imagen: "",
        ataque: 50,
        defensa: 50,
      },
    })),
  editBoxLoadPokemon: ({ id, nombre, imagen, ataque, defensa }) =>
    set(() => ({
      editBoxValues: {
        id: id,
        nombre: nombre,
        imagen: imagen,
        ataque: ataque,
        defensa: defensa,
      },
    })),

  // Filter Mode
  filterModeEnabled: false,
  setFilterModeEnabled: (value) => set({ filterModeEnabled: value }),
  filterModeTarget: "",
  setFilterModeTarget: (value) => set({ filterModeTarget: value }),
  filterModeMatch: [],
  setFilterModeMatch: (list) => set({ filterModeMatch: list }),
}));

export { useAppStateStore, usePokemonsStore };
