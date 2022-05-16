
import { useEffect } from "react";
import { useMeQuery } from "../graphql/generated/graphql";


export function Profile() {
    
    const { data, loading, error } = useMeQuery();

    return (
        <div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
    )
}