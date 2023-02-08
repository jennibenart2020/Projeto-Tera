import React from "react";
import SidebarList from "../molecules/SidebarList";

export default function AppSidebar(props) {
    const [users, setUsers] = React.useState([]);
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    React.useEffect(() => {
        fetch(`https://63d862df74f386d4efd7be6c.mockapi.io/users/`)
            .then((response) => response.json())
            .then((data) => {
                const filteredUsers = data.filter(
                    (user) => user.id !== props.userId // removendo a pessoa que está logada
                );
                setUsers(shuffle(filteredUsers).slice(0, 10)); // limitando para 10 resultados apenas
            });
    }, []);
    return (
        <div className="card">
            <div className="cardListProximos">
                {users.map((user) => (
                    <SidebarList
                        key={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        userid={user.id}
                    />
                ))}
            </div>
        </div>
    );
}
