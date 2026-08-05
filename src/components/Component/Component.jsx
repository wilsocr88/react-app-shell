import { useState, useEffect } from "react";
import { getItems } from "./getItems";

export default function Component() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(response => {
            console.log("Items fetched:", response.data);
            if (response.status === 200) {
                setItems(response.data);
            } else {
                console.error("Failed to fetch items:", response.status);
            }
        });
    }, []);

    return (
        <div>
            <h1>Component</h1>
            {items.length > 0 ? (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No items found</p>
            )}
        </div>
    );
}
