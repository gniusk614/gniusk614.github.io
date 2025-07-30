import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "@mui/material/Modal";
import {Chip} from "@mui/material";
import img_1 from "../assets/img001.jpeg";
import img_2 from "../assets/img002.jpeg";
import img_3 from "../assets/img003.jpeg";
import img_4 from "../assets/img004.jpeg";
import img_5 from "../assets/img005.jpeg";
import img_6 from "../assets/img006.jpeg";
import img_7 from "../assets/img007.jpeg";
import img_8 from "../assets/img008.jpeg";

export default function PhotoSection() {
    var items = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8,
    ];

    let [more, setMore] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [index, setIndex] = React.useState(0);


    const PhotoFull = ({startIndex}) => {
        const settings = {
            initialSlide: startIndex,
            dots: false,
            infinite: false,
            arrows: true,
        };
        return (
            <div style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Slider {...settings}>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            onClick={handleClose}
                        >
                            <img
                                src={item}
                                alt={`slide-${i}`}
                                style={{
                                    maxWidth: "100vw",
                                    maxHeight: "100vh",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };

    return (
        <div className="photo-section">
            <p>사진첩</p>
            <div style={{display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center"}}>
                {(more ? items : items.slice(0, 3)).map((item, i) => (
                    <img
                        key={i}
                        src={item}
                        alt={`thumb-${i}`}
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    />
                ))}
            </div>
            <div style={{marginTop: "10px"}}>
                <Chip
                    label={more ? "접기" : "더보기"}
                    onClick={() => setMore((prev) => !prev)}
                    variant="outlined"
                />
            </div>

            <Modal open={open} onClose={handleClose}>
                <PhotoFull startIndex={index}/>
            </Modal>
        </div>
    );
}
