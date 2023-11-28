import "./header.css"

export function Header(){
    return (
        <header className="header">
            <div className="container">

            <div>
            <a href="/">FLASH CARDS</a>
            </div>
            <div>
                <a href="/">
                Decks
                </a>
            </div>
            <div>
                <a href="/login">
                Login
                </a>
            </div>
            </div>
        </header>
    )
}