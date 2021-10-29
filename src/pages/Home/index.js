import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { Button, IconButton } from '@material-ui/core';
import {ArrowBack, Check} from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { SegmentContext } from '../../contexts/SegmentContext';

import './homeStyles.css';
import {colors} from '../../global/colors';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    backButton: {
        width: '250px',
    },
    finishButton: {
        width: '400px',
        background: colors.blue
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    
  }));
  

const Home = () => {
    const [open, setOpen] = React.useState(false);

    const { state } = useContext(SegmentContext); 
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <div className="container">
            <section className="header">
                <h1 className="title">Segmento da Empresa</h1>
                <p className="subtitle"> Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo.</p>
            </section>

            <section className="content">
                <p className="selectLabel">Segmento Selecionados:</p>
                <div className="service">
                    <h2 className="serviceSelected">{state.segment.descricao}</h2>
                    <IconButton>
                        <Link to="/searchSegments"><EditIcon color="primary"/></Link>
                    </IconButton>
                </div>
            </section>

            <section className="footer">
                <Button
                    variant="contained"
                    color="default"
                    className={`${classes.backButton} ${classes.button}`}
                    startIcon={<ArrowBack />}
                >
                    Voltar
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.finishButton} ${classes.button}`}
                    startIcon={<Check />}
                    onClick={handleOpen}
                >
                    Finalizar cadastro
                </Button>
            </section>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Cadastro finalizado</h2>
                    <p id="transition-modal-description">O segmento selecionado foi: <b>{state.segment.descricao}</b></p>
                    <p id="transition-modal-description">O id segmento selecionado: <b>{state.segment.id}</b></p>
                </div>
                </Fade>
            </Modal>
        </div>
    );
};

export { Home };