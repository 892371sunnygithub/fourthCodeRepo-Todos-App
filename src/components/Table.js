import { useState } from "react";
import Pagination from "./Pagination";

const Table = () => {

    const tableData = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 4, name: 'Bob Johnson', age: 40 },
        { id: 5, name: ' maxwel', age: 40 },
        { id: 6, name: ' Johnson', age: 40 },
        { id: 7, name: 'crish', age: 40 },
        { id: 8, name: ' prakash', age: 40 },
        { id: 9, name: ' rampal', age: 40 },
        { id: 10, name: 'jay', age: 40 },
        { id: 11, name: 'jayveru', age: 40 },
        { id: 12, name: 'Seldon', age: 50 },
        { id: 13, name: 'Ram', age: 40 },
        { id: 14, name: 'vijay', age: 40 },
      ];
      
      const columns = [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        { key: 'age', title: 'Age' }
      ];
      

    const rowsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentData = tableData.slice(startIndex, endIndex);
    
     const getdata=(data)=>{
       setCurrentPage(data);
     }

     const Previos=()=>{
      
      if(currentPage===1){
        setCurrentPage((prev)=>prev)

      } else{
      
       setCurrentPage((prev)=> prev-1)
      }
    }
    

    const Next=(number)=>{
        
         if(currentPage<number.length){
           setCurrentPage((prev)=> prev+1)
         }
            }

    return (
      <div>
        <Pagination tabledata={tableData} rowsPerPage={rowsPerPage}
        
        Next={Next} Previos={Previos} data={getdata}
        currentPage={currentPage}
        />
        <table className="table table-bordered">
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map(row => (
              <tr key={row.id}>
                {columns.map(column => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };



  export default Table