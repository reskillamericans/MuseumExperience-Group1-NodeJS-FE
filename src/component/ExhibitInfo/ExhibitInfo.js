import React from 'react';
import './ExhibitInfo.css';
import img5 from './imgs/image 5.png'
import img10 from './imgs/image 10.png'
import img11 from './imgs/image 11.png'
import img12 from './imgs/image 12.png'
import img15 from './imgs/image 15.png'

function ExhibitInfo() {
    return (

        <div className='container'>
            {/* placeholder for drop-down menu component */}
            <div className='dropDown'>Exhibit Overview<i class="fas fa-chevron-down"></i></div>
            <h1>EDGAR DEGAS</h1>
            <img className='topImg' src={img5} alt="woman and man in restaurant" />

            <a className='curatorBtn' target="_blank" rel="noreferrer" href="#">Ask the Curator<i class="far fa-paper-plane fa-lg"></i></a>
            <a className='curatorBtn2' target="blank" rel="noreferrer" href="#"><i class="far fa-comment fa-lg"></i></a>

            <div className="smImgs">
                <img className='bottomImg family' src={img10} alt="mother, father, and two daughters formally dressed in a livingroom" />
                <img className='bottomImg dancer' src={img11} alt="dancer in a white dress holding a yellow fan" />
                <img className='bottomImg flowers' src={img12} alt="woman leaning on a table next to pot of colorful flowers" />
            </div>
            <div className='info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse non augue sit amet turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique et turpis sit amet ultrices. Vestibulum eu laoreet massa. Duis eget faucibus nulla. </p>
                <img className='video' src={img15} alt="" />
                <p className='dropInfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse non augue sit amet turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique et turpis sit amet ultrices. </p>
            </div>

            <a className='register' target="blank" rel="noreferrer" href="#">Register to Get Updates on This Exhibit</a>


        </div>

    );
}

export default ExhibitInfo;