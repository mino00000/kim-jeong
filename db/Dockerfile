# fleoxn 사용자 계정에서 mysql_test:1.0 이미지를 기반(mysql:5.7)으로 새로운 이미지를 생성
FROM fleoxn/mysql_test:1.0

# Dockerfile 작성자 정보
MAINTAINER Wimes <qhkfk1@m365.dongyang.ac.kr>

# 이미지에 대한 추가 정보
LABEL purpose="MySQL database setup for company data" \
      version="5.7" \
      description="MySQL database container with preloaded company data"

# MySQL 기본 포트 3306을 외부에 노출하도록 설정
EXPOSE 3306

# 호스트의 company.sql 파일을 컨테이너의 /docker-entrypoint-initdb.d/ 디렉토리로 복사
# 이 디렉토리는 MySQL 컨테이너 초기화 시 자동으로 실행되는 스크립트들을 위한 디렉토리입니다
COPY ./company.sql /docker-entrypoint-initdb.d/

# 컨테이너가 시작될 때 MySQL 서버를 실행하도록 설정
CMD ["mysqld"]
