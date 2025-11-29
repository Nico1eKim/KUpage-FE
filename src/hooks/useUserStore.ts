import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { teamMatchingAuthExtractor } from '../utils/authorization';

interface UserStore {
  auths: string[];
  isLoggedIn: boolean;
  setauths: (auths: string[]) => void;
  setIsLoggedIn: (status: boolean) => void;
  logout: () => void;
  teamMatchingAuth: () => string;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      auths: [],
      isLoggedIn: !!localStorage.getItem('accessToken'),
      setauths: (auths: string[]) => set({ auths }),
      setIsLoggedIn: (status: boolean) => set({ isLoggedIn: status }),
      logout: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        set({ auths: [], isLoggedIn: false });
      },
      teamMatchingAuth: () => teamMatchingAuthExtractor(get().auths),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
