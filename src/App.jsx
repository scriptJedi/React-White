import {useEffect, useRef, useState} from "react";

// import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cookie from "./components/Cookie.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import AdminPanel from "./blocks/AdminPanel.jsx";

// import blocks
import Hero from "./blocks/Hero";
import Testimonials from "./blocks/Testimonials";
import About from "./blocks/About";
import Info from "./blocks/Info.jsx";
import Core from "./blocks/Core.jsx";
import About2 from "./blocks/About2.jsx";
import Dynamic from "./blocks/Dynamic.jsx";
import Cta from "./blocks/Cta.jsx";
import About1 from "./blocks/About1.jsx";
import Solutions from "./blocks/Solutions.jsx";

// import styles
import "./assets/styles/App.css";

function shuffleUniqueBlocks(blocks, companyName, scrollToForm, backgroundColor) {
    const shuffledBlocks = blocks.slice();
    shuffledBlocks.sort(() => Math.random() - 0.4);

    return shuffledBlocks.slice(0, 4).map((block) => {
        const BlockComponent = block.blockComponent;
        return (
            <BlockComponent
                key={block.key}
                id={block.id}
                companyName={companyName}
                scrollToForm={scrollToForm}
                backgroundColor={backgroundColor}
            />
        );
    });
}


const App = () => {
    const [companyName, setCompanyName] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [menuItems, setMenuItems] = useState([]);
    const [shuffledBlocks, setShuffledBlocks] = useState([]);
    const formRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = localStorage.getItem('adminData');
                if (savedData) {
                    const data = JSON.parse(savedData);
                    setCompanyName(data.companyName);
                    setBackgroundColor(data.backgroundColor);
                    document.documentElement.style.setProperty('--accentColor', data.backgroundColor);
                    console.log('Data loaded successfully from local storage');
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const blocks = shuffleUniqueBlocks(blockComponents, companyName, scrollToForm, backgroundColor);
        setShuffledBlocks(blocks);
        setMenuItems(blocks.map((block) => block.key));
    }, [companyName, backgroundColor]);

    const blockComponents = [
        {
            blockComponent: Solutions,
            key: "solutions",
            id: "solutions"
        },
        {
            blockComponent: Cta,
            key: "cta",
            id: "cta"
        },
        {
            blockComponent: About,
            key: "popular",
            id: "popular"
        },
        {
            blockComponent: About1,
            key: "about",
            id: "about"
        },
        {
            blockComponent: About2,
            key: "us",
            id: "us"
        },
        {
            blockComponent: Core,
            key: "features",
            id: "features"
        },
        {
            blockComponent: Dynamic,
            key: "dynamic",
            id: "dynamic"
        },
        {
            blockComponent: Info,
            key: "info",
            id: "info"
        },
    ];

    const scrollToForm = () => {
        formRef.current.scrollIntoView({behavior: "smooth", block: "center"});
    };

    return (
        <div className="wrapper">
            <AdminPanel shuffledBlocks={shuffledBlocks}/>
            <Header scrollToForm={scrollToForm} companyName={companyName} menuItems={menuItems}/>
            <main className="page">
                <Hero key={"hero"} backgroundColor={backgroundColor}/>
                {shuffledBlocks}
                <Testimonials companyName={companyName} backgroundColor={backgroundColor} id="testimonials"/>
                <RegistrationForm ref={formRef}/>
            </main>
            <Cookie/>
            <Footer companyName={companyName}/>
        </div>
    );
};

export default App;
