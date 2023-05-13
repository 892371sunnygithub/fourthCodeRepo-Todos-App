import React from 'react'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import '../styles/global.scss';
const Layout = ({children}) => {
  return (
    <div className='layout_wrapper'> 
       <header><Navbar/> </header>
       <main>
        <div className="main_section container-fluid">
            <div className="row">
                <div className="col-md-2 d-none d-md-block p-0">
                    <aside className='aside_wrrapper'>
                        <Sidebar/>
                    </aside>
                </div>
                <div className="col-md-10 p-0">
                    {children}
                </div>
            </div>
        </div>
       </main>
       <footer><Footer /> </footer>
     </div>
  );
}

export default Layout