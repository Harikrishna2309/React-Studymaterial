export function Appplication(){
    const userName="john show";
    return(
        <Layout userName={userName}>
            main content
        </Layout>
    );
}
function Layout({children,userName}){
    return(
        <div>
            <Header userName={userName}/>
            <main>
                {children}
            </main>
        </div>
    )
}
function Header({userName}){
    return(
        <header>
            <UserInfo userName={userName}/>
        </header>
    );
}
function UserInfo({userName}){
    return <span>{userName}</span>
}