'use client';

const AnotherPageComponent = () => {

  const onClick = () => {
    alert(123)
  };


  return (
    <div className="bg-blue-100 text-black p-10">
      AnotherPageComponent, use client
      <button onClick={() => onClick()}
              className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click
      </button>

      <p>styled-jsx!</p>
      <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
};

export default AnotherPageComponent;
