import { create } from 'zustand';

interface LoginStore {
  name: string;
  lastName: string;
  phone_number: string;
  formData: {
    agent_code: string;
    city_code: string;
    county: string;
    insurance_branch: { id: string; name: string } | null;
    phone: string;
    province: number;
    name?: string;
    address: string;
    agency_type: "real" | "legal";
  };
  setName: (value: string) => void;
  setLastName: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setAllFormData: (data: any) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  name: '',
  lastName: '',
  phone_number: '',
  formData: {
    agent_code: '',
    city_code: '',
    county: '',
    insurance_branch: null,
    phone: '',
    province: 0,
    name: '',
    address: '',
    agency_type: 'real'
  },
  setName: (value) => set({ name: value }),
  setLastName: (value) => set({ lastName: value }),
  setPhoneNumber: (value) => set({ phone_number: value }),
  setAllFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data },
  })),
})); 