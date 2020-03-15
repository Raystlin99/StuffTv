import React from 'react';

// Options 1 - function returns function
const hocWithLine = (InnerComponent, counter) =>
  () => <React.Fragment>
    <InnerComponent counter={counter}></InnerComponent>
    <hr />
  </React.Fragment>;

// Options 2 - function returns class
// const hocWithLine2 = (InnerComponent, counter) => {
//   return class HocWithLine extends Component {
//     render() {
//       return <div>
//         <InnerComponent counter={counter}></InnerComponent>
//         <hr />
//       </div>;
//     }
//   }
// }

export default hocWithLine;
