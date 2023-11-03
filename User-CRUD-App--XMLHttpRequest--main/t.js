const data = {
    items: [
      { id: 3, name: "Item C" },
      { id: 1, name: "Item A" },
      { id: 2, name: "Item B" },
    ],
  };

  let a=data.items.sort((a, b) =>{return a.id - b.id});

  console.log(a);