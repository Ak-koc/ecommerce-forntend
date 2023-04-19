//Core
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';

//Action
import { getByIdRequest } from '../../redux/actions/getRequestByIdAction'
//MUI && Comp
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
//Image && Icon
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteRequest } from '../../redux/actions/deleteRequestAction';
import { postRequest } from '../../redux/actions/postRequestAction';


function BasketList(props) {

  const dispatch = useDispatch()
  const data = useSelector(state => state.cartList?.data)
  const deleteSuccess = useSelector(state => state.cartRemoveItem.success)
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    dispatch(postRequest("cart/checkout", id))

    setOpen(true)
  } ;
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(getByIdRequest("cart/get", id))
  }, [deleteSuccess])
 

  const removeCart = ( item) => {
    dispatch(deleteRequest(`cart/remove`, item?.cartId, item?.productId))
  }


  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {data?.cartProductDtoList?.map((e, index) => {
      return (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                // image={`../../assets/images/product/${e.productId}.jpg`}
                image={`/product/${e?.productId}.jpg`}
                alt="green iguana" />
              <CardContent>

              <Typography variant="body2" color="text.secondary">
                  Quantity
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {e?.salesQuantity}
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions className='card-product-bottom'>
     
              <Button size="small" style={{color: '#eb3434'}}>
                <DeleteIcon onClick={() => removeCart(e)} />
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
  <Button size="small" color="primary" style={{cursor: 'pointer'}}  onClick={handleOpen}>
      <span style={{border: '1px solid blue', padding:'10px', borderRadius: '20px'}}> Checkout</span>
      </Button>

      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Success
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Your order is preparing...
          </Typography>
        </Box>
      </Modal>
    </div>
    </React.Fragment>
  );
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default BasketList