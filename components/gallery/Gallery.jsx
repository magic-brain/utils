import "./gallery.css";
import React, { useState } from "react";
import { Grid, Dialog, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CloseIcon from "@mui/icons-material/Close";

const images = [
  "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1727112658582-fdb2e08878d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1727204750403-861c059330d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1727175401105-5b4a6b455645?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="gallery_wrapper">
      <p className="title">Gallerie</p>
      <div className="serviceDivider" style={{ marginBottom: "3rem" }}></div>
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <img
              src={src}
              alt={`image-${index}`}
              style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
              onClick={() => handleOpen(index)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: { backgroundColor: "transparent", boxShadow: "none" },
        }}
        BackdropProps={{
          style: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <IconButton
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#fff",
            zIndex: 1,
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          initialSlide={activeIndex}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="img_gal"
              style={{
                userSelect: "none",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="img_gal"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  userSelect: "none",
                  borderRadius: "8px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Dialog>
    </div>
  );
};
