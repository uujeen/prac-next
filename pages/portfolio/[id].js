import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  //해당 페이지를 출력하기 위한 컴포넌트 파일 경로
  console.log(router.pathname);

  // URL에 부호화된 구체적인 값에 엑세스 할 수 있다.
  // 만약 이 프로퍼티에 지정된 게 데이터베이스 객체 ID라면
  // router.query.projectId라는 ID를 통해
  // 백엔드 서버에 데이터 조각을 페칭하도록
  // 요청을 보낼 수 있죠

  console.log(router.query);
  return (
    <div>
      <h1>THe Portfolio Project Page</h1>
    </div>
  );
}
export default PortfolioProjectPage;
