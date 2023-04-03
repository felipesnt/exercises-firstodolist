const List = () => {
    const items = [{
        id: 1,
        name: "Felipe",
    },
    {
        id: 2,
        name: "Cassio",
    },
    {
        id: 3,
        name: "Tiago",
    },
    ];

    return (
    <div>
        {items.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        ))}
    </div>
    )
};

export default List;