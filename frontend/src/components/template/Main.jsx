import './Main.css';
import {Header} from './Header';
import {Fragment} from 'react'

export const Main = (props) => {

    return(
    <Fragment>
        <Header {...props}/>
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
      
    </Fragment>
    )

}