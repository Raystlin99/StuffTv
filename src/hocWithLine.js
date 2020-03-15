import React from 'react';

const hocWithLine = (InnerComponent, counter) =>
  () => <React.Fragment>
    <InnerComponent counter={counter}></InnerComponent>
    <hr />
  </React.Fragment>;

// const hocWithLine = (InnerComponent, counter) => {
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
