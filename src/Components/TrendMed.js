import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";

import "../Styles/TrendMed.css";
export default function TrendMed() {
  const data = [
    {
      id: 14,
      offPrice: "10% OFF",
      images:
        "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      title: "Wine Beauty Trio Complex Cleanser",
      old_mrp: "170",
      new_mrp: 163,
      quantity: 1,
      Discount: 10,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 15,
      offPrice: "10% OFF",
      images:
        "https://th.bing.com/th?id=OIP.rkrsuJM78EClJS0V9CCiBgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      title: "Utronin Drops",
      old_mrp: "175",
      new_mrp: 166,
      quantity: 1,
      Discount: 10,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 16,
      offPrice: "10% OFF",
      images:
        "https://th.bing.com/th?id=OIP.N7phy6XqEWVCEF6xjAjr_wAAAA&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      title: "Colin Oral Drop",
      old_mrp: "175",
      new_mrp: 166,
      quantity: 1,
      Discount: 10,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 17,
      offPrice: "10% OFF",
      images:
        "https://th.bing.com/th?id=OIP.N7phy6XqEWVCEF6xjAjr_wAAAA&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      title: "Colin Oral Drop",
      old_mrp: "175",
      new_mrp: 166,
      quantity: 1,
      Discount: 10,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 18,
      offPrice: "10% OFF",
      images:
        "https://th.bing.com/th?id=OIP.0jTnbLsrhqN6HiEKBQOAigHaHx&w=243&h=256&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      title: "Thyroidinumn Tablet 3X",
      old_mrp: 131,
      new_mrp: 118,
      quantity: 1,
      Discount: 10,
      ml: [20, 30, 100, 1000],
    },
    {
      id: 19,
      offPrice: "10% OFF",
      images:
        "https://th.bing.com/th?id=OIP.N7phy6XqEWVCEF6xjAjr_wAAAA&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      title: "Colin Oral Drop",
      old_mrp: "175",
      new_mrp: 166,
      quantity: 1,
      Discount: 10,
      ml: [20, 30, 100, 1000],
    },
  ];

  console.log(data);
  const { dispatch } = useContext(CartContext);

  return (
    <div
      style={{
        padding: "10px",
        rowGap: "50px",
        display: "flex",
        flexDirection: "column",
      }}
      className="about-nav"
    >
      <div style={{ alignSelf: "center" }}>
        <h3 className="about-title mt-3">
          <span>Trending Medicines</span>
        </h3>
      </div>

      <div
        style={{
          display: "flex",

          flexDirection: "row",
          justifyContent: "space-around",
          overflowY: "scroll",
        }}
      >
        {data.map((d) => {
          return (
            <>
              <div className="col-md-2 col-sm-3 col-sm-12 py-3">
                <Card
                  sx={{
                    width: 305,
                    border: "1px solid wheat",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowX: "scroll",
                    // border: "1px solid black",

                    height: "394px",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 210,
                      width: 230,
                      transition: "0.2s linear",
                      backgroundPosition: "contain",
                    }}
                    image={d.images}
                    title="green iguana"
                    className="card-nav"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {d.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <del>${d.old_mrp}</del>
                      <ins>${d.new_mrp}</ins>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button
                      size="small"
                      className="btn btn-light border border-1"
                      onClick={() => dispatch({ type: "ADD", d: d })}
                    >
                      ADD TO CART
                    </button>{" "}
                    <button className="btn btn-light   border border-1 w-25">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                  </CardActions>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
