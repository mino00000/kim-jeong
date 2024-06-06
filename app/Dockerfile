# mino00 사용자 계정에서 nodejs_test:1.0 이미지를 기반(node:14)으로 새로운 이미지를 생성
FROM mino00/nodejs_test:1.0

# Dockerfile 작성자 정보
MAINTAINER Wimes <qhkfk1@m365.dongyang.ac.kr>

# 이미지에 대한 추가 정보
LABEL purpose="node.js for web development" \
      version="1.4" \
      description="Web development using node.js"

# 컨테이너에서 작업할 디렉토리를 /app으로 설정
WORKDIR /app

# package.json 파일을 컨테이너의 /app 디렉토리로 복사
COPY ./app/package.json /app/

# npm install 명령어를 실행하여 패키지를 설치
RUN npm install

# 소스 코드 및 기타 데이터를 /app 디렉토리로 복사
COPY ./app /app

# 컨테이너의 3000 포트를 외부에 노출하도록 설정
EXPOSE 3000

# 컨테이너가 시작될 때 기본으로 실행할 명령어 설정 (Node.js 서버 실행)
CMD ["npm", "start"]
