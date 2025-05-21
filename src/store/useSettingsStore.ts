import { create } from "zustand";

type FormData = {
  name: string;
  email: string;
  password: string;
};

interface SettingsStore {
  savedData: FormData | null;
  setSavedData: (data: FormData) => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  savedData: null,
  setSavedData: (data) => set({ savedData: data }),
}));