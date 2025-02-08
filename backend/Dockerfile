# 使用 Node 官方 LTS 镜像
FROM node:16

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目所有文件
COPY . .

# 如果是前端项目，可先进行构建，例如：
# RUN cd frontend && npm install && npm run build
# 然后将构建后的文件复制到后端的静态资源目录中

# 暴露端口（例如 8080）
EXPOSE 8080

# 启动应用（假设启动命令为 npm run start）
CMD ["npm", "run", "start"]