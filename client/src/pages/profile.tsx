import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export function Profile() {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    if(isLoading) {
        return <div>Loading...</div>
    }

    const Audience = import.meta.env.VITE_AUTH0_ISSUER_BASE_URL

    console.log(Audience)
    async function getToken () {
        
        const token = await getAccessTokenSilently({
            audience: Audience,
            scope: 'read:current_user'
        });
        console.log(token);
        
    }

    useEffect(() => {
        getToken();
    },[])

    return (
        isAuthenticated ? (
            <div>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
        ) : <div>Sem permissão</div>
    )
}