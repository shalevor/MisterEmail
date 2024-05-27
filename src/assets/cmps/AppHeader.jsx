import { Link } from "react-router-dom";


export function AppHeader() {

    return (
        <header className="app-header">
            <section className="container">
                {/* <img src='.\src\assets\imgs\trace.svg'></img> */}
                <h1>Log111</h1>

                <nav>
                    <Link to='/' >Home</Link>   
                    <Link to='/about' >About</Link>
                    <Link to='/emails' >Emails</Link> 
                </nav>

            </section>
        </header>
    )
}