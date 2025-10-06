import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

type useAuthStore = {
    email: string;
    name: string;
    objectId: string;
    isLoggedIn: boolean;
    setAuthStore: ({_email, _name, _objectId}: {_email: string, _name: string, _objectId: string}) => void;
    clearAuthStore: () => void;
    checkSession: () => Promise<boolean>;
};

const useAuthStore = create<useAuthStore>()(persist((set, get) => ({
    email: '',
    name: '',
    objectId: '',
    isLoggedIn: false,
    setAuthStore: ({_email, _name, _objectId}) => set(() => ({ 
        email: _email, 
        name: _name, 
        objectId: _objectId,
        isLoggedIn: true 
    })),
    clearAuthStore: () => set(() => ({ 
        email: '', 
        name: '', 
        objectId: '',
        isLoggedIn: false 
    })),
    checkSession: async () => {
        try {
            // If we already have a session in the store, verify it first
            const currentState = get();
            if (currentState.isLoggedIn && currentState.objectId) {
                try {
                    // Try to verify the current session
                    const verifyResponse = await fetch('/api/auth/session-login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ objectId: currentState.objectId }),
                    });
                    const verifyData = await verifyResponse.json();
                    if (verifyData.isLoggedIn && verifyData.user) {
                        return true;
                    }
                } catch (verifyError) {
                    console.error('Session verification failed:', verifyError);
                }
            }

            // If verification failed or no session exists, try to get current session
            const response = await fetch('/api/auth/session-login');
            const data = await response.json();
            
            if (data.isLoggedIn && data.user) {
                set(() => ({
                    email: data.user.email,
                    name: data.user.name || data.user.email.split('@')[0],
                    objectId: data.user.objectId,
                    isLoggedIn: true
                }));
                return true;
            }
            
            // If no session is found, clear the store
            set(() => ({
                email: '',
                name: '',
                objectId: '',
                isLoggedIn: false
            }));
            return false;
        } catch (error) {
            console.error('Session check failed:', error);
            // Clear the store on error
            set(() => ({
                email: '',
                name: '',
                objectId: '',
                isLoggedIn: false
            }));
            return false;
        }
    }
}), {
    name: 'user-storage',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
      email: state.email,
      name: state.name,
      objectId: state.objectId,
      isLoggedIn: state.isLoggedIn
    }),
}));

export default useAuthStore;