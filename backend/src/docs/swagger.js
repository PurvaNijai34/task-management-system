import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API",
      version: "1.0.0",
      description:
        "REST API for Task Management System with JWT Authentication and Role-Based Access Control",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },

  apis: [
    "./src/routes/*.js",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;