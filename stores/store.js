import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/* export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export const useBearStore = create(
  persist(
    (set, get) => ({
      count: 0,
      //addABear: () => set({ bears: get().bears + 1 }),
      inc: () => set({ count: get().count + 1 }),
      dec: () => set({ count: get().count - 1 }),
    }),
    {
      name: "count-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
); */
export const usePupilStore = create(
  persist(
    (set) => ({
      pupil: "",

      addPupil: (text) =>
        set(() => ({
          pupil: text,
        })),
    }),
    {
      name: "pupil-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
