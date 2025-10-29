const ApiSection = async () => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/items", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  };

  const items = (await fetchData()).items;

  return (
    <div>
      <h1 className="font-light"> API section</h1>
      {items.map((item: { id: number; name: string; price: number }) => (
        <div key={item.id} className="border p-4 m-2">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p>{item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiSection;
