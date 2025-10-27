import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";

import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default function Product({ prod }) {
  const navigate = useNavigate();

  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    rate,
    count
  } = prod;

  return (
    // <Card
    //   sx={{
    //     maxWidth: 300,
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItem: "center"
    //   }}
    // >
    //   <CardHeader title={title} subheader={price} />
    //   <Box
    //     sx={{
    //       height: 200,
    //       width: 300,
    //       margin: "auto"
    //     }}
    //   >
    //     <CardMedia
    //       component="img"
    //       image={image}
    //       alt={title}
    //       sx={{
    //         height: "100%",
    //         maxWidth: "100%",
    //         width: "auto",
    //         objectFit: "contain"
    //       }}
    //     />
    //   </Box>
    //   <CardContent>
    //     {/* <Typography variant="body2" color="text.secondary">
    //       {description}
    //     </Typography> */}
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton aria-label="add to favorites">
    //       <FavoriteIcon />
    //     </IconButton>
    //   </CardActions>
    // </Card>

    <Container>
      <Circle />
      <Image src={image} />
      <Info>
        <Icon>
          <AddShoppingCartIcon />
        </Icon>
        <Icon onClick={() => navigate(`/product/${id}`)}>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
}
