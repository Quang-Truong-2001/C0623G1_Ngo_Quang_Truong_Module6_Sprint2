package com.example.backend.dto.order;


public class CustomOrderSuccess {
    private String pathName;
    private String flag;

    public CustomOrderSuccess(String pathName, String flag) {
        this.pathName = pathName;
        this.flag = flag;
    }

    public String getPathName() {
        return pathName;
    }

    public void setPathName(String pathName) {
        this.pathName = pathName;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }
}
