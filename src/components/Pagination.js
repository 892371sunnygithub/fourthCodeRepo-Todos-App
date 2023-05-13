import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Pagination = (props) => {

const { data, Previos, Next,currentPage } = props
const pageCount = Math.ceil(props.tabledata.length / props.rowsPerPage);
const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

return (
  <div className="dummy_table">
  <Skeleton  count={5}/>
   { 
    currentPage>1?
    <button onClick={() => Previos()} className="btn btn-secondary btn-sm">Prev</button>:""
   }
    {pageNumbers.map(number => (
      <button key={number} onClick={() => data(number)} className="btn btn-info btn-sm ms-1 me-1">
        {number}
      </button>
    ))}
    <button onClick={() => Next(pageNumbers)} className="btn btn-secondary btn-sm">Next </button>
  </div>
);
};


export default Pagination;












