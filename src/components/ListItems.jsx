import React, { useState } from 'react'
import { currencyFormat } from '../helpers/currencyHelper';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

import {
    Box,
    Button,
    Card,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';


import AlertDialog from './AlertDialog';

const ListItems = React.memo(({ productos, setProductos, handleExcel, handleCleanData }) => {


    const [openDialogDelete, setOpenDialogDelete] = useState(false)
    const [openDialogDeleteAllData, setOpenDialogDeleteAllData] = useState(false)
    const [idProduct, setIdProduct] = useState("")


    const handleAcceptDialogDelete = () => {
        const newProductos = productos.filter(p => p.id !== idProduct);
        setProductos([...newProductos]);
        setOpenDialogDelete(false);
    }

    const handleCancelDialogDelete = () => {
        setOpenDialogDelete(false);

    }

    const deleteProducto = (id) => {
        setIdProduct(id)
        setOpenDialogDelete(true);
    }

    const handleAcceptDialogAllData = () => {
        handleCleanData();
        setOpenDialogDeleteAllData(false);
    }

    const handleCancelDialogDeleteAllData = () => {
        setOpenDialogDeleteAllData(false);

    }

    const deleteAllData = () => {
        console.log('pase por aca');
        setOpenDialogDeleteAllData(true);
    }

    return (

        <Card >
            <CardHeader
                title="Productos"
                action={
                    <Box>
                        <Button
                            color="error"
                            startIcon={<DeleteIcon fontSize="small" />}
                            size="small"
                            variant="text"
                            onClick={deleteAllData}
                        >
                            Borrar
                        </Button>
                        <Button
                            color="success"
                            startIcon={<DownloadIcon fontSize="small" />}
                            size="small"
                            variant="text"
                            onClick={handleExcel}
                        >
                            Excel
                        </Button>
                    </Box>}

            />
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Nombre
                            </TableCell>
                            <TableCell>
                                Detalle
                            </TableCell>
                            <TableCell>
                                Total
                            </TableCell>
                            <TableCell>
                                Borrar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map((p) => (
                            <TableRow
                                hover
                                key={p.id}
                            >
                                <TableCell>
                                    {p.name}
                                </TableCell>
                                <TableCell>
                                    {p.count} * {p.price}
                                </TableCell>
                                <TableCell>
                                    {currencyFormat(parseInt(p.price * p.count))}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        color="error"
                                        startIcon={<DeleteIcon fontSize="small" />}
                                        size="small"
                                        variant="text"
                                        onClick={() => { deleteProducto(p.id) }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <AlertDialog
                open={openDialogDelete}
                titleText={'Eliminar producto'}
                bodyText={'¿Seguro de eliminar producto?'}
                handleAccept={() => handleAcceptDialogDelete(idProduct)}
                handleCancel={handleCancelDialogDelete}
            />
            <AlertDialog
                open={openDialogDeleteAllData}
                titleText={'Eliminar todos producto'}
                bodyText={'¿Seguro de eliminar toda la información de los productos?'}
                handleAccept={handleAcceptDialogAllData}
                handleCancel={handleCancelDialogDeleteAllData}
            />
        </Card>
    )
})

export default ListItems;