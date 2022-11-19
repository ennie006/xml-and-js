const Friends = [
    { id: 0, name: "Hobbs Macdonald;" },
    { id: 0, name: "Hart Guthrie" },
    { id: 1, name: "kasy Gomez" },
    { id: 1, name: "Nelda Sykes" },
    { id: 0, name: "Sullivan Preston" },
    { id: 1, name: "Mc James" },
    { id: 0, name: "Shaw walls" },
    { id: 0, name: "Reyna Wilkins" },
    { id: 1, name: "Deann Christensen"},
    { id: 0, name: "Boyer Riley"},
    { id: 0, name: "Steele Coleman"},
    { id: 1, name: "Darcy Dixon"},
    { id: 0, name:  "George Snider"},
    { id: 0, name: "Irene Rivers"},
    { id: 1, name: "Dora Hart"},
    
  ];
  
  console.log(`Source:`);
  console.log(friends);
  
  console.log(`-----------`);
  console.log(`forEach`);
  console.log(`-----------`);

  const friendsIds_1 = [];
  Friends.forEach((friendsIds_1) => {
    FriendsIds_1.push(Friends.id);
  });
  
  console.log(friendssIds_1);
  
  console.log(`-----------`);
  console.log(`map`);
  console.log(`-----------`);
  
  const friendsIds_2 = friends.map((friends) => {
    return friends.id;
  });
  
  console.log(officersIds_2);
  
  // const friendsId_3 = friends.map((friends) => friends.id);
  
  // console.log(friendsIds_3);
  
  // const friends_4 = friends.map(({ id }) => id);
  
  // console.log(friends_4);
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.map((number) => {
    return number % 2 === 0;
  });
  