//Core
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
//Action
import { getByIdRequest } from '../../redux/actions/getRequestByIdAction'
import {getRequest} from '../../redux/actions/getRequestAction'
import {postByIdRequest} from '../../redux/actions/postByIdRequestAction'
//MUI && Comp
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
//Image && Icon
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function ProductList(props) {

  const dispatch = useDispatch()
  const data = useSelector(state => state.productList?.data)
  const cartId = useSelector(state => state.getCardId?.data?.cartId)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRequest("cart/get/0"))
  }, [])

  useEffect(() => {
    dispatch(getByIdRequest("product/list", id))
  }, [id])


  const addToCard = ( productId) => {
    dispatch(postByIdRequest(`cart/add`,cartId, productId))
  }

  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {data?.map((e, index) => {
      return (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 350 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                // image={`../../assets/images/product/${e.productId}.jpg`}
                image={`/product/${e?.productId}.jpg`}
                alt="green iguana" />
              <CardContent>
                <Link to={`/product/detail/${e?.productId}`}>
                <Typography gutterBottom variant="h5" component="div" >
                  {e?.productName}
                </Typography>
                </Link>
                
                <Typography variant="body2" color="text.secondary">
                  {e?.categoryName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='card-product-bottom'>
              <Button size="small" color="primary">
                  <ShoppingBasketIcon onClick={() => addToCard(e?.productId)} />
              </Button>
              <Typography gutterBottom variant="h5" component="div">
                {e?.salesPrice}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      );
    })}
  </Grid>
      
    </React.Fragment>
  );
}

export default ProductList