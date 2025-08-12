package com.acme.swaggerdoc.config;

public class SwaggerConfig {
    
    private String apiTitle;
    private String apiDescription;
    private String apiVersion;
    private String basePackage;
    
    public String getApiTitle() {
        return apiTitle;
    }
    
    public void setApiTitle(String apiTitle) {
        this.apiTitle = apiTitle;
    }
    
    public String getApiDescription() {
        return apiDescription;
    }
    
    public void setApiDescription(String apiDescription) {
        this.apiDescription = apiDescription;
    }
    
    public String getApiVersion() {
        return apiVersion;
    }
    
    public void setApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
    }
    
    public String getBasePackage() {
        return basePackage;
    }
    
    public void setBasePackage(String basePackage) {
        this.basePackage = basePackage;
    }
}
