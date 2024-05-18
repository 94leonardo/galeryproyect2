import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from './Img1'
import Img2 from './Img2'
import Img3 from './Img3'
import Img4 from './Img4'
import Img5 from './Img5'
import Img6 from './Img6'
import Img7 from './Img7'
import Img8 from './Img8'
import Img9 from './Img9'
import Img10 from './Img10'


const Navegation = () => {
    return (
        <div>
            <Link to="/img1">
                <figure>
                    <Img1 />
                    <img src={Img1} alt="" />
                    <figcaption>img1</figcaption>
                </figure>
            </Link>
            < Link to="/img2">
                <figure>
                    <Img2 />
                    <img src={Img2} alt="" />
                    <figcaption>img2</figcaption>
                </figure>
            </Link>
            <Link to="/img3">
                <figure>
                    <Img3 />
                    <img src={Img3} alt="" />
                    <figcaption>img3</figcaption>
                </figure>
            </Link>
            <Link to="/img4">
                <figure>
                    <Img4></Img4>
                    <img src={Img4} alt="" />
                    <figcaption>img4</figcaption>
                </figure>
            </Link>
            <Link to="/img5">
                <figure>
                    <Img5></Img5>
                    <img src={Img5} alt="" />
                    <figcaption>img5</figcaption>
                </figure>
            </Link>
            <Link to="/img6">
                <figure>
                    <Img6></Img6>
                    <img src={Img6} alt="" />
                    <figcaption>img6</figcaption>
                </figure>
            </Link>
            <Link to="/img7">
                <figure>
                    <Img7></Img7>
                    <img src={Img7} alt="" />
                    <figcaption>img7</figcaption>
                </figure>
            </Link>
            <Link to="/img8">
                <figure>
                    <Img8></Img8>
                    <img src={Img8} alt="" />
                    <figcaption>img8</figcaption>
                </figure>
            </Link>
            <Link to="/img9">
                <figure>
                    <Img9></Img9>
                    <img src={Img9} alt="" />
                    <figcaption>img9</figcaption>
                </figure>
            </Link>
            <Link to="/img10">
                <figure>
                    <Img10></Img10>
                    <img src={Img10} alt="" />
                    <figcaption>img10</figcaption>
                </figure>
            </Link>

        </div>
    )
}

export default Navegation