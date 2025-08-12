package com.acme.swaggerdoc.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SwaggerAPIServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String pathInfo = request.getPathInfo();
        
        if ("/swagger.json".equals(pathInfo)) {
            generateSwaggerSpec(request, response);
        } else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }
    
    private void generateSwaggerSpec(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + 
                        request.getContextPath();
        
        String swaggerSpec = "{\n" +
            "  \"openapi\": \"3.0.0\",\n" +
            "  \"info\": {\n" +
            "    \"title\": \"SAP Commerce Cloud OCC API\",\n" +
            "    \"description\": \"Omni Commerce Connect (OCC) REST API for SAP Commerce Cloud\",\n" +
            "    \"version\": \"1.0.0\",\n" +
            "    \"contact\": {\n" +
            "      \"name\": \"SAP Commerce Cloud Support\"\n" +
            "    }\n" +
            "  },\n" +
            "  \"servers\": [\n" +
            "    {\n" +
            "      \"url\": \"" + baseUrl + "/occ\",\n" +
            "      \"description\": \"OCC API Base URL\"\n" +
            "    }\n" +
            "  ],\n" +
            "  \"paths\": {\n" +
            "    \"/v2/electronics/users/{userId}/carts\": {\n" +
            "      \"get\": {\n" +
            "        \"summary\": \"Get user carts\",\n" +
            "        \"description\": \"Retrieve all carts for a specific user\",\n" +
            "        \"parameters\": [\n" +
            "          {\n" +
            "            \"name\": \"userId\",\n" +
            "            \"in\": \"path\",\n" +
            "            \"required\": true,\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          },\n" +
            "          {\n" +
            "            \"name\": \"fields\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          }\n" +
            "        ],\n" +
            "        \"responses\": {\n" +
            "          \"200\": {\n" +
            "            \"description\": \"Successful response\",\n" +
            "            \"content\": {\n" +
            "              \"application/json\": {\n" +
            "                \"schema\": {\n" +
            "                  \"type\": \"object\"\n" +
            "                }\n" +
            "              }\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    },\n" +
            "    \"/v2/electronics/products\": {\n" +
            "      \"get\": {\n" +
            "        \"summary\": \"Search products\",\n" +
            "        \"description\": \"Search and retrieve products\",\n" +
            "        \"parameters\": [\n" +
            "          {\n" +
            "            \"name\": \"query\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          },\n" +
            "          {\n" +
            "            \"name\": \"pageSize\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"integer\",\n" +
            "              \"default\": 20\n" +
            "            }\n" +
            "          },\n" +
            "          {\n" +
            "            \"name\": \"currentPage\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"integer\",\n" +
            "              \"default\": 0\n" +
            "            }\n" +
            "          },\n" +
            "          {\n" +
            "            \"name\": \"fields\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          }\n" +
            "        ],\n" +
            "        \"responses\": {\n" +
            "          \"200\": {\n" +
            "            \"description\": \"Successful response\",\n" +
            "            \"content\": {\n" +
            "              \"application/json\": {\n" +
            "                \"schema\": {\n" +
            "                  \"type\": \"object\"\n" +
            "                }\n" +
            "              }\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    },\n" +
            "    \"/v2/electronics/products/{productCode}\": {\n" +
            "      \"get\": {\n" +
            "        \"summary\": \"Get product details\",\n" +
            "        \"description\": \"Retrieve detailed information about a specific product\",\n" +
            "        \"parameters\": [\n" +
            "          {\n" +
            "            \"name\": \"productCode\",\n" +
            "            \"in\": \"path\",\n" +
            "            \"required\": true,\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          },\n" +
            "          {\n" +
            "            \"name\": \"fields\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          }\n" +
            "        ],\n" +
            "        \"responses\": {\n" +
            "          \"200\": {\n" +
            "            \"description\": \"Successful response\",\n" +
            "            \"content\": {\n" +
            "              \"application/json\": {\n" +
            "                \"schema\": {\n" +
            "                  \"type\": \"object\"\n" +
            "                }\n" +
            "              }\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    },\n" +
            "    \"/v2/electronics/users/{userId}/orders\": {\n" +
            "      \"get\": {\n" +
            "        \"summary\": \"Get user orders\",\n" +
            "        \"description\": \"Retrieve all orders for a specific user\",\n" +
            "        \"parameters\": [\n" +
            "          {\n" +
            "            \"name\": \"userId\",\n" +
            "            \"in\": \"path\",\n" +
            "            \"required\": true,\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          },\n" +
            "          {\n" +
            "            \"name\": \"fields\",\n" +
            "            \"in\": \"query\",\n" +
            "            \"schema\": {\n" +
            "              \"type\": \"string\"\n" +
            "            }\n" +
            "          }\n" +
            "        ],\n" +
            "        \"responses\": {\n" +
            "          \"200\": {\n" +
            "            \"description\": \"Successful response\",\n" +
            "            \"content\": {\n" +
            "              \"application/json\": {\n" +
            "                \"schema\": {\n" +
            "                  \"type\": \"object\"\n" +
            "                }\n" +
            "              }\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  \"components\": {\n" +
            "    \"securitySchemes\": {\n" +
            "      \"OAuth2\": {\n" +
            "        \"type\": \"oauth2\",\n" +
            "        \"flows\": {\n" +
            "          \"clientCredentials\": {\n" +
            "            \"tokenUrl\": \"" + baseUrl + "/authorizationserver/oauth/token\",\n" +
            "            \"scopes\": {}\n" +
            "          }\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  \"security\": [\n" +
            "    {\n" +
            "      \"OAuth2\": []\n" +
            "    }\n" +
            "  ]\n" +
            "}";
        
        out.println(swaggerSpec);
    }
}
