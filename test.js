const test = [
    {
      id: 1,
      type: "div",
      child: [
        { id: 6, type: "h1" },
        { id: 7, type: "span" },
        { id: 8, type: "p" },
      ],
    },
    { id: 2, type: "div" },
    { id: 3, type: "div" },
    { id: 4, type: "h1", child: [] },
    {
      id: 5,
      type: "h2",
      child: [
        { id: 9, type: "h1" },
        { id: 6, type: "div", child: [{ id: 11, type: "h1" }] },
      ],
    },
  ];
  
  function getElementById(array, id){
      array.map((item)=>{
          if (item.id === id) {
            console.log(item.type);
          }
      
          if (Array.isArray(item.child)) {
            result = getElementById(item.child, id);
          }
      }
          
      )
  }
  getElementById(test,6);