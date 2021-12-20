// import React, { useState, useEffect } from 'react'
// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log({count});
//   }, [count]);

//   return (
//     <div>
//       count:{count}
//       <br />
//       <button onClick={() => setCount(count + 1)}>Increment count</button>
//     </div>
//   );
// }
// export default App;


// import React, { useState, useEffect } from 'react'
// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   useEffect(() => {
//     console.log("count2 changed!");
//   }, [count2]);

//   return (
//     <div>
//       {count1} {count2} {count3}
//       <br />
//       <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
//       <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
//       <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
//     </div>
//   );
// }
// export default App;