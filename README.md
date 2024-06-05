# 개발환경 통일 프로젝트

> 개발팀에 동일하고 원활한 개발 테스트 환경 제공을 위한 프로젝트

## 목차
> 1. [프로젝트 소개](#프로젝트-소개)
> 2. [프로젝트 시나리오](#프로젝트-시나리오)
> 3. [역할분담](#역할분담)
> 4. [프로젝트 주요 기능](#프로젝트-주요-기능)
> 5. [필수 조건](#필수-조건)
> 6. [설치](#설치)
> 7. [사용법](#사용법)
> 8. [디렉토리 구조](#디렉토리-구조)
> 9. [기여](#기여)
> 10. [라이센스](#라이센스)
> 11. [문의](#문의)

## 프로젝트 소개
> 동일하고 원활한 개발 및 테스트 환경을 제공하기 위한 프로젝트입니다. 이 프로젝트는 Docker를 활용하여 개발팀에 일관된 환경을 제공합니다.

## 프로젝트 시나리오
> A회사의 인프라팀으로서, 개발팀의 요청 사항에 따라 동일하고 원활한 개발 및 테스트 환경을 제공하는 임무를 맡고 있습니다. 이를 위해 Docker를 활용하여 이미지 파일을 만들고, Docker Hub에 배포하여 개발팀이 일관된 환경에서 개발을 진행할 수 있도록 지원합니다.

## 역할분담
> - 팀원1(정민호): Node.js 컨테이너 설정 및 다중 서비스 컨테이너 설정, `docker-compose.yml` 파일 작성
> - 팀원2(김준우): MySQL 컨테이너 설정 및 다중 서비스 컨테이너 `README.md` 파일 작성, 최종 완성본 배포

## 프로젝트 주요 기능
> 다중 서비스 컨테이너 설정을 통한 웹서버에서의 데이터베이스 연동

## 필수 조건
> - Ubuntu 18.04 이상 권장
> - Docker
> - Docker Compose
> - Docker Hub

## 설치
> git clone https://github.com/mino00000/kim-jeong.git

# 디렉토리로 이동합니다
> cd ~/kim-jeong

# 사용법
> # Docker Compose로 컨테이너를 실행합니다
> docker-compose up -d

> # Node.js 또는 MySQL 컨테이너가 제대로 열리지 않는다면
> docker-compose down
> docker-compose up -d

# 디렉토리 구조
> ├── db
> │   ├── Dockerfile
> │   └── company.sql
> ├── docker-compose.yaml
> └── app
>     ├── Dockerfile
>     ├── app.js
>     ├── edit.html
>     ├── insert.html
>     ├── list.html
>     └── package.json

    

