import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { generateID } from '../helpers/idGenerator';
import useForm from '../hooks/useForm';

const NewItem = React.memo(({ setProductos }) => {

    const defaultInputs = {
        name: '',
        count: 1,
        price: 0
    };

    const [inputValue, handleFormChange, handleResetForm] = useForm(defaultInputs);
    const { name, count, price } = inputValue;


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.name && inputValue.count < 1 && inputValue.price < 1) return;

        let id = generateID();
        setProductos(p => [{ ...inputValue, id: id }, ...p]);
        handleResetForm();
        document.querySelector('#name').select();
    }

    const handleReset = (e) => {
        e.preventDefault();
        handleResetForm();
    }


    return (
        <>

            <Card>
                <CardContent>
                    <Box
                        component="form"
                        autoComplete="off"
                    >
                        <Grid container>
                            <Typography variant="h5" component="h2" mb={3}>
                                Nuevo Producto
                            </Typography>

                            <TextField
                                required
                                id="name"
                                name='name'
                                label="Nombre"
                                value={name}
                                fullWidth={true}
                                autoFocus={true}
                                placeholder="Ingrese nombre del producto"
                                onChange={handleFormChange}
                            />
                            <Grid container direction="row" spacing={1} pt={3} pb={3}>
                                <Grid item xs={4}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Cantidad"
                                        type='number'
                                        fullWidth={true}
                                        className="form-control"
                                        name='count'
                                        placeholder="Ingrese cantidad del producto"
                                        value={count}
                                        onChange={handleFormChange}
                                        InputProps={{ inputProps: { min: 0 } }}
                                        />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Precio"
                                        type='number'
                                        fullWidth={true}
                                        className="form-control" 
                                        name='price' 
                                        placeholder="Ingrese precio del producto" 
                                        value={price}
                                        onChange={handleFormChange} 
                                        InputProps={{ inputProps: { min: 0 } }}
                                        />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box textAlign='center'>
                            <Button variant='contained' onClick={handleSubmit}>
                                Guardar
                            </Button>
                            <Button variant='contained' color='error' onClick={handleReset}>
                                Limpiar
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

        </>
    )
})


export default NewItem;