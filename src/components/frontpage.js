import './frontpage.css'

const Fpage = ({display}) => {
  return (
    <div className='fpage'>
      <div className='fname name-big'>Adarsh</div>
      <div className='sname name-big'>Singh{ display ? '_' : null}</div>
      <p className='introtext'>Some small text that is barely readable</p>
    </div>
  );
}

export default Fpage;
