# Multer 미들웨어 테스트

- Guard에서 `multipart/form-data` 로 넘긴 파일과 그 밖의 데이터에 접근하고 싶은 경우
- 기존 FileInterceptor를 이용하면 Nest.js Life-cycle 특성상 Guard가 Interceptor 보다 먼저 실행되기 때문에, req.files, req.body에 접근할 수 없음.
- Middleware가 Life-cycle의 가장 앞에 있기 때문에 multer를 수동으로 middleware로 적용하면 Guard에서 multer가 파싱한 데이터에 접근이 가능함
