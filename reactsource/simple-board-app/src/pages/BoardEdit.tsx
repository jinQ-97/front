import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { putBoard } from "../apis/boardApi";
import BoardForm from "../components/BoardForm";
import useBoard from "../hooks/useBoard";
import type { BoardUpdate } from "../types/board";

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 주소줄에 ? 뒤의 값 가져오기
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;

  const { board, loading } = useBoard(id);

  const onSubmit = async (board: BoardUpdate) => {
    try {
      if (!id) return;
      const result = await putBoard(id, board);
      console.log(result);

      // 페이지 이동 => 상세조회
      navigate({ pathname: `/boards/${id}`, search: `page=${currentPage}&size=${size}` });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  if (!board) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }
  return (
    <div>
      {/* Form */}
      <BoardForm onSubmit={onSubmit} board={board} />
    </div>
  );
};

export default BoardEdit;
