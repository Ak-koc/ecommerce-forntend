//Core
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
//Action
import { getByIdRequest } from '../../redux/actions/getRequestByIdAction'
import { getRequest } from '../../redux/actions/getRequestAction'
import { postByIdRequest } from '../../redux/actions/postByIdRequestAction'
//MUI && Comp
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
//Image && Icon
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function ProductDetail(props) {

  const dispatch = useDispatch()
  const data = useSelector(state => state.productDetail?.data)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getByIdRequest("product/get", id))

  }, [])

  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }} style={{ display: 'flex', marginLeft: '1rem', marginTop: '1rem' }}>
        <Grid item xs={8} sm={8} md={8} key={data?.productId}>
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image={`/product/${data?.productId}.jpg`}
                alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.categoryName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='card-product-bottom'>
              <Typography gutterBottom variant="h5" component="div">
                {data?.salesPrice}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProductDetail