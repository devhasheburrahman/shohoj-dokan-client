// // // import React from "react";
// // // import { Card, Col, Row } from "react-bootstrap";

// // // const CategorySkeleton = () => {
// // //   return (
// // //     <div className="text-center py-10">
// // //       <h2 className="text-2xl font-semibold mb-5">Browse By Category!</h2>
// // //       <div className="container">
// // //         {/* Bootstrap grid with responsive columns */}
// // //         <Row xs={1} sm={2} md={3} lg={4} className="g-3">
// // //           {[...Array(8)].map((_, index) => (
// // //             <Col key={index}>
// // //               <Card className="animate-pulse">
// // //                 {/* Skeleton for Image with Inline CSS */}
// // //                 <div
// // //                   style={{
// // //                     height: "150px",
// // //                     backgroundColor: "gray",
// // //                     borderRadius: "8px",
// // //                     marginBottom: "16px",
// // //                     animation: "pulseAnimation 1.5s infinite ease-in-out",
// // //                   }}
// // //                 ></div>

// // //                 {/* Skeleton for Category Name with Inline CSS */}
// // //                 <div
// // //                   style={{
// // //                     height: "1rem",
// // //                     width: "30%",
// // //                     backgroundColor: "#4A4A4A",
// // //                     borderRadius: "8px",
// // //                     marginLeft: "auto",
// // //                     marginRight: "auto",
// // //                     animation: "pulseAnimation 1.5s infinite ease-in-out",
// // //                   }}
// // //                 ></div>
// // //               </Card>
// // //             </Col>
// // //           ))}
// // //         </Row>
// // //       </div>

// // //       {/* Adding the inline keyframe animation */}
// // //       <style>
// // //         {`
// // //           @keyframes pulseAnimation {
// // //             0% {
// // //               opacity: 0.3;
// // //               transform: scale(0.98);
// // //             }
// // //             50% {
// // //               opacity: 0.6;
// // //               transform: scale(1);
// // //             }
// // //             100% {
// // //               opacity: 0.3;
// // //               transform: scale(0.98);
// // //             }
// // //           }
// // //         `}
// // //       </style>
// // //     </div>
// // //   );
// // // };

// // // export default CategorySkeleton;

// // import React from "react";
// // import { Card, Col, Row } from "react-bootstrap";

// // const CategorySkeleton = () => {
// //   return (
// //     <div className="text-center py-10">
// //       <h2 className="text-2xl font-semibold mb-5">Browse By Category!</h2>
// //       <div className="container">
// //         {/* Bootstrap grid with responsive columns */}
// //         <Row xs={1} sm={2} md={3} lg={4} className="g-3">
// //           {[...Array(8)].map((_, index) => (
// //             <Col key={index}>
// //               <Card className="animate-pulse">
// //                 {/* Skeleton for Image */}
// //                 <div
// //                   style={{
// //                     height: "150px",
// //                     opacity: "40",
// //                     backgroundColor: "gray",
// //                     borderRadius: "8px",
// //                     marginBottom: "16px",
// //                     animation: "pulseLeftToRight 1.5s infinite ease-in-out",
// //                   }}
// //                 ></div>

// //                 {/* Skeleton for Category Name */}
// //                 <div
// //                   style={{
// //                     height: "1rem",
// //                     width: "80%",
// //                     backgroundColor: "#4A4A4A",
// //                     borderRadius: "8px",
// //                     marginLeft: "auto",
// //                     opacity: "40",
// //                     marginRight: "auto",
// //                     animation: "pulseLeftToRight 1.5s infinite ease-in-out",
// //                   }}
// //                 ></div>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </div>

// //       {/* Adding the inline keyframe animation for left-to-right pulse */}
// //       <style>
// //         {`
// //           @keyframes pulseLeftToRight {
// //             0% {
// //               width: 0%;
// //             }
// //             50% {
// //               width: 80%;
// //             }
// //             100% {
// //               width: 0%;
// //             }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default CategorySkeleton;

// import React from "react";
// import { Card, Col, Row } from "react-bootstrap";

// const CategorySkeleton = () => {
//   return (
//     <div className="text-center py-10">
//       <h2 className="text-2xl font-semibold mb-5">Browse By Category!</h2>
//       <div className="container">
//         {/* Bootstrap grid with responsive columns */}
//         <Row xs={1} sm={2} md={3} lg={6} className="g-3">
//           {[...Array(8)].map((_, index) => (
//             <Col key={index}>
//               <Card className="animate-pulse">
//                 {/* Skeleton for Image */}
//                 <div
//                   style={{
//                     height: "150px",
//                     backgroundColor: "gray",
//                     borderRadius: "8px",
//                     marginBottom: "16px",
//                     animation:
//                       "pulseLeftToRightRightToLeft 2s infinite ease-in-out",
//                   }}
//                 ></div>

//                 {/* Skeleton for Category Name */}
//                 <div
//                   style={{
//                     height: "1rem",
//                     width: "40%",
//                     backgroundColor: "#4A4A4A",
//                     borderRadius: "8px",
//                     marginLeft: "auto",
//                     marginRight: "auto",
//                     animation:
//                       "pulseLeftToRightRightToLeft 2s infinite ease-in-out",
//                   }}
//                 ></div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>

//       {/* Adding the inline keyframe animation for left-to-right and right-to-left pulse */}
//       <style>
//         {`
//           @keyframes pulseLeftToRightRightToLeft {
//             0% {
//               width: 0%;
//               transform: translateX(0);
//             }
//             50% {
//               width: 80%;
//               transform: translateX(0);
//             }
//             100% {
//               width: 0%;
//               transform: translateX(0);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CategorySkeleton;

import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CategorySkeleton = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-5">Browse By Category!</h2>
      <div className="container">
        {/* Bootstrap grid with responsive columns */}
        <Row xs={1} sm={2} md={4} lg={6} className="g-3">
          {[...Array(8)].map((_, index) => (
            <Col key={index}>
              <Card className="animate-pulse">
                {/* Skeleton for Image */}
                <div
                  style={{
                    height: "100px",
                    backgroundColor: "#F6F6F8",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    animation: "pulseLeftToRight 2s infinite ease-in-out",
                  }}
                ></div>

                {/* Skeleton for Category Name */}
                <div
                  style={{
                    height: "1rem",
                    width: "40%",
                    backgroundColor: "#F6F6F8",
                    borderRadius: "8px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    animation: "pulseLeftToRight 2s infinite ease-in-out",
                  }}
                ></div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Adding the inline keyframe animation for left-to-right and back to left-to-right */}
      <style>
        {`
          @keyframes pulseLeftToRight {
            0% {
              width: 0%;
              transform: translateX(0);
            }
            50% {
              width: 90%;
              transform: translateX(0);
            }
            100% {
              width: 0%;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CategorySkeleton;
