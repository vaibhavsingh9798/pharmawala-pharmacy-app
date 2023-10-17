
const dummy_medicines = [
    {
      id: 1,
      name: "Medicine A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 10.99
    },
    {
      id: 2,
      name: "Medicine B",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 8.49
    },
    {
      id: 3,
      name: "Medicine C",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: 12.25
    },
    {
      id: 4,
      name: "Medicine D",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      price: 14.99
    },
    {
      id: 5,
      name: "Medicine E",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      price: 9.75
    },
    {
      id: 6,
      name: "Medicine F",
      description: "Deserunt mollit anim id est laborum.",
      price: 7.99
    },
    {
      id: 7,
      name: "Medicine G",
      description: "Nisi ut aliquip ex ea commodo consequat.",
      price: 11.50
    },
    {
      id: 8,
      name: "Medicine H",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 15.75
    },
    {
      id: 9,
      name: "Medicine I",
      description: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 6.99
    },
    {
      id: 10,
      name: "Medicine J",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 13.49
    },
  ];
  

const AvailableMedicine = () =>{
     let medicines = dummy_medicines.map((medicine) => <li key={medicine.id}>{medicine.name}</li>)
    return(
        <>
        {medicines}
        </>
    )
}

export default AvailableMedicine;