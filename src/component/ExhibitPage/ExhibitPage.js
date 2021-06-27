import React from 'react';
import './ExhibitPage.css';
import gogh from './imgs/gogh.png'
import mona from './imgs/mona.png'
import degas from './imgs/degas.png'
import egypt from './imgs/egypt.png'
import sculpt from './imgs/sculpt.png'
import mask from './imgs/mask.png'

function ExhibitPage() {
    return (

        <div className='container'>
            <h1>NOW VIEWING</h1>
            <di className="images">
                <div>
                    <p className='imgLabel'>Van Gogh Exhibit</p>
                    <img className='' src={gogh} alt="painting of Van Gogh" />
                    <p className='viewBtn'>View Exhibit</p>
                </div>
                <div>
                    <p className='imgLabel'>DaVinci Exhibit</p>
                    <img className='' src={mona} alt="painting of Mona Lisa" />
                    <p className='viewBtn'>View Exhibit</p>
                </div>
                <div>
                    <p className='imgLabel'>Degas Exhibit</p>
                    <img className='' src={degas} alt="painting of a woman and man in restaurant" />
                    <p className='viewBtn'>View Exhibit</p>
                </div>
                <div>
                    <p className='imgLabel'>Egyptian Exhibit</p>
                    <img className='' src={egypt} alt="Egyptian art of a man shooting a bow" />
                    <p className='viewBtn'>View Exhibit</p>
                </div>
                <div>
                    <p className='imgLabel'>Grecian Sculpture Exhibit</p>
                    <img className='' src={sculpt} alt="mid-section of a sculptor of a woman" />
                    <p className='viewBtn'>View Exhibit</p>
                </div>
                <div>
                    <p className='imgLabel'>Bronze Age Exhibit</p>
                    <img className='' src={mask} alt="golden mask of Agamemnon" />
                    <p className='viewBtn'>View Exhibit</p>
                </div>
                <div className='space'></div>
            </di>
        </div>

    );
}

export default ExhibitPage;