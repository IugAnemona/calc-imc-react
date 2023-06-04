function Btn(props) {
  return (
    <button
      className='m-4 group inline-block rounded bg-focus border-none text-slate-100 text-base p-2 w-28 transition-all duration-500 hover:opacity-100 hover:right-0 '
      type='submit'
    >
      <span className="cursor-pointer inline-block relative duration-500 after:content-['»'] after:absolute after:opacity-0 after:top-0 after:-right-4 after:duration-500  group-hover:pr-4 group-hover:after:opacity-100 group-hover:after:right-0 ">
        Calcular
      </span>
    </button>
  );
}

export default Btn;
