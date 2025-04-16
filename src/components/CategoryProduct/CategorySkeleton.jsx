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
              width: 100%;
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
