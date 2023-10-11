import Header1 from "../headers/Header1";



export default function MainLayout(props){
    return (
        <div className="main-layout">
            <Header1 title="Main Layout" description="This is the main layout" />
            <div className="main-layout__content">
                {props.children}
            </div>
            <footer>Footer</footer>
        </div>
    )
}