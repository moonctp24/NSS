const Header = () => {
  return (
    <>
      <div className="w-[1570px] h-[100px] flex">
        <div className="flex-1 w-[350px] h-[100px] grid place-items-center text-left">대시보드</div>
        <div className="flex-2 w-[70px] h-[70px] right-[0px] grid place-items-center text-xl text-center border border-yellow-50 rounded-full 	bg-red-100	">계정</div>
      </div>
      <hr className="w-[1570px] border-gray-400 border" />
    </>
  );
};

export default Header;
