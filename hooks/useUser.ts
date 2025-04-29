
import { useUser as useSupabaseUser, useSessionContext } from '@supabase/auth-helpers-react';

export const useUser = () => {

    const { isLoading, session, error } = useSessionContext();
    const { user } = useSupabaseUser();
    
    return { user, isLoading, session, error };
};