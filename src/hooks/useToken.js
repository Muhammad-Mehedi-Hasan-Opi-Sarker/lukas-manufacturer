import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email };
        if (currentUser) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('userData', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken',accessToken);
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token];
}
export default useToken;