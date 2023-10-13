import Header1 from "../headers/Header1";
import Hero1 from "@/components/hero/Hero1";



export default function MainLayout(props){
    return (
        <div className="fixed-nav" >
            <main>
            <Header1 title="Main Layout" description="This is the main layout" />
            <Hero1/>
                {props.children}
            </main>
            <footer>Footer</footer>
        </div>
    )
}