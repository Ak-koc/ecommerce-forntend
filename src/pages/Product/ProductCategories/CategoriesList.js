import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { getRequest } from '../../../redux/actions/getRequestAction';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CategoriesList() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.categoryList?.data)

  useEffect(() => {
    dispatch(getRequest("category/list"))

  }, [])

  const navigate = useNavigate();

  function selectedCategory(categoryId) {
    navigate(`/product/${categoryId}`);
  }

  return (
    <Box sx={{ width: '100%' }} className="categories-wrapper">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.map((e, index) => (
          <Grid key={index} item xs={3} onClick={() => selectedCategory(e?.categoryId)} >
            <ul  className='category-wrapper'>
                <li className='category-item'>
                  {e?.categoryName}
                </li>
            </ul>
          </Grid>
        ))
        } 
      </Grid>
    </Box>
  );
}


export default CategoriesList