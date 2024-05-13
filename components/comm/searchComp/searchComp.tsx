import { useState } from "react";

const SearchComp = (props: any) => {
  const [searchWord, setSearchWord] = useState(""); // 검색할 단어

  /**
   * 검색하기 버튼 클릭 시 호출한 컴포넌트에 검색할 단어 전달
   */
  const searchItemBtnHandler = () => {
    props.searchItemBtnHandler(searchWord);
  };

  return (
    <>
      <div className="w-full">
        <div className="srch_area">
          <div className="frm_srch">
            <input
              type="text"
              id="itemSrch"
              // ref={itemSrch}
              className="ipt"
              placeholder="검색"
              value={searchWord}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter") {
                  searchItemBtnHandler();
                }
              }}
            />
            <button type="submit" className="btn_ico_srch" onClick={searchItemBtnHandler}>
              <span className="hidden" onClick={searchItemBtnHandler}>
                검색하기
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComp;
