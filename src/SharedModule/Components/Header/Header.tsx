export default function Header({ title, description, imgHader, name }: any) {
  return (
    <>
      <div className="header-content   rounded-3 text-white  py-2 my-2 align-content-center">
        <div className=" container-fluid">
          <div className="row align-items-center px-4 ">
            <div className="col-sm-10">
              <h3>
                {title}
                <span>{name}</span>
              </h3>
              <p>{description}</p>
            </div>
            <div className="col-sm-2 py-3 animate__animated animate__shakeY">
              <img className="w-100 " src={imgHader} alt="image  Header" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
