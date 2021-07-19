# React-Native
React-Native 开发项目模板

# 解决安卓启动页报错要设置canOverrideExistingModule=true
设置目录node_modules/react-native-splash-screen/SplashScreenModule.java
@Override    
public boolean canOverrideExistingModule() { 
    return true; 
}
