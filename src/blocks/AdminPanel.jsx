import {useState} from 'react';
import '../assets/styles/AdminPanel.css';

const AdminPanel = ({ shuffledBlocks }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const handleGenerate = async () => {
        try {
            const response = await fetch('http://localhost:3000/adminData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName,
                    backgroundColor,
                }),
            });

            if (response.ok) {
                console.log('Data saved successfully');
            } else {
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDownload = async () => {
        try {
            const response = await fetch('http://localhost:3000/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName,
                    backgroundColor,
                    blocks: shuffledBlocks,
                }),
            });

            if (response.ok) {
                const {downloadPath} = await response.json();
                const link = document.createElement('a');
                link.href = downloadPath;
                link.setAttribute('download', 'landing.zip');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error('Failed to download project');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleColorChange = (e) => {
        setBackgroundColor(e.target.value);
    };

    const handleTextChange = (e) => {
        setCompanyName(e.target.value);
    };

    return (
        <>
            <div className='toggle-button-container'>
                <button className="toggle-button" onClick={togglePanel}>
                  <span className="svgContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="800px" width="800px" version="1.1"
                         id="Layer_1"
                         viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path
                                    d="M498.723,89.435H183.171V76.958c0-18.3-14.888-33.188-33.188-33.188h-51.5c-18.3,0-33.188,14.888-33.188,33.188v12.477    H13.275C5.943,89.435,0,95.38,0,102.711c0,7.331,5.943,13.275,13.275,13.275h52.018v12.473c0,18.3,14.888,33.188,33.188,33.188    h51.501c18.3,0,33.188-14.888,33.188-33.188v-12.473h315.553c7.332,0,13.275-5.945,13.275-13.275    C511.999,95.38,506.055,89.435,498.723,89.435z M156.621,128.459c0,3.66-2.978,6.638-6.638,6.638H98.482    c-3.66,0-6.638-2.978-6.638-6.638V76.958c0-3.66,2.978-6.638,6.638-6.638h51.501c3.66,0,6.638,2.978,6.638,6.638V128.459z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M498.725,237.295h-52.019v-12.481c0-18.3-14.888-33.188-33.188-33.188h-51.501c-18.3,0-33.188,14.888-33.188,33.188    v12.481H13.275C5.943,237.295,0,243.239,0,250.57c0,7.331,5.943,13.275,13.275,13.275h315.553v12.469    c0,18.3,14.888,33.188,33.188,33.188h51.501c18.3,0,33.188-14.888,33.188-33.188v-12.469h52.019    c7.332,0,13.275-5.945,13.275-13.275C512,243.239,506.057,237.295,498.725,237.295z M420.155,276.315    c0,3.66-2.978,6.638-6.638,6.638h-51.501c-3.66,0-6.638-2.978-6.638-6.638v-51.501c0-3.66,2.978-6.638,6.638-6.638h51.501    c3.66,0,6.638,2.978,6.638,6.638V276.315z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M498.725,396.014H276.432v-12.473c0-18.3-14.888-33.188-33.188-33.188h-51.501c-18.3,0-33.188,14.888-33.188,33.188    v12.473H13.275C5.943,396.014,0,401.959,0,409.289c0,7.331,5.943,13.275,13.275,13.275h145.279v12.477    c0,18.3,14.888,33.188,33.188,33.188h51.501c18.3,0,33.188-14.888,33.188-33.188v-12.477h222.293    c7.332,0,13.275-5.945,13.275-13.275C512,401.957,506.057,396.014,498.725,396.014z M249.881,435.042    c0,3.66-2.978,6.638-6.638,6.638h-51.501c-3.66,0-6.638-2.978-6.638-6.638v-51.501c0-3.66,2.978-6.638,6.638-6.638h51.501    c3.66,0,6.638,2.978,6.638,6.638V435.042z"/>
                            </g>
                        </g>
                    </svg>
                  </span>
                    <span className="BG"></span>
                </button>
            </div>
            <div className={`admin-panel ${isOpen ? 'show' : ''}`}>
                <input type="text" placeholder="Company Name" value={companyName} onChange={handleTextChange}/>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <input type="color" value={backgroundColor} onChange={handleColorChange}/>
                    <input type="text" placeholder="Enter or select color" value={backgroundColor}
                           onChange={handleColorChange}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <button className="admin-button" onClick={handleGenerate}>Generate</button>
                    <button className="admin-button" onClick={handleDownload}>Download</button>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
