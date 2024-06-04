# Kim & Jeong 김앤정 프로젝트

## 프로젝트 목적
> 개발팀에 동일하고 원활한 개발 테스트 환경 제공을 위한 프로젝트

## 프로젝트 시나리오
> A회사의 인프라팀으로서, 개발팀의 요청 사항에 따라 동일하고 원활한 개발 및 테스트 환경을 제공하는 임무를 맡고 있다. 이를 위해 Docker를 활용하여 이미지 파일을 만들고, Docker Hub에 배포하여 개발팀이 일관된 환경에서 개발을 진행할 수 있도록 지원한다.

## 디렉토리 구조
>     ├── db
    │   ├── Dockerfile
    │   └── company.sql
    ├── docker-compose.yaml
    └── app
        ├── Dockerfile
        ├── app.js
        ├── edit.html
        ├── insert.html
        ├── list.html
        └── package.json
