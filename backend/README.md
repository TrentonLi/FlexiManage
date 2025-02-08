<!--
 * @Author: 赵恩来
 * @Date: 2025-02-08 09:28:44
 * @LastEditors: 赵恩来
 * @LastEditTime: 2025-02-08 09:34:04
 * @Description:
-->

### 后端

|—— backend/# Java Spring Boot 后端
| |—— src/
| | |—— main/
| | | |—— java/com/example/app/ # Java 代码 (Controller, Service, Repository)
| | | |—— resources/
| | | | |—— application.properties # Spring Boot 配置
| | | | |—— static #这里放前端打包后的静态文件（Vite 生成的 dist）
| | | | |—— templates #仅用于 Thymeleaf 模板（如果需要）
| |—— pom.xml #Maven 依赖管理
| |—— build.gradle #如果你使用 Gradle
| |—— Dockerfile #可选：用于部署
