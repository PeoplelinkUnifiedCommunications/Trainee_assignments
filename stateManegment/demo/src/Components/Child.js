// import React from 'react'

// export default function Child({parentToChild}) {
//     return (
//         <div>
//             {parentToChild}
//         </div>
//     )
// }


import React from 'react'

export default function Child({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <div>
            <button onClick={() => childToParent(data)}>Click Child</button>
        </div>
    )
}
