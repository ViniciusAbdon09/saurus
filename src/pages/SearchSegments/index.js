import React, {useState, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Api } from '../../api';
import { SegmentItem } from '../../components/SegmentItem';
import {ArrowBack} from '@material-ui/icons';

import './searchStyles.css';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    backButton: {
        width: '250px',
    },
    finishButton: {
        width: '400px',
    }
}));

const SearchSegments = () => {
    const [searchValue, setSearchValue] = useState('');
    const [segmentsData, setSegmentsData] = useState();

    const history = useHistory();

    const classes = useStyles();

    function handleChange(event){
        setSearchValue(event.target.value);
    }

    function handleBack(){
        history.goBack();
    }

    const loadSegments = useCallback(async () => {
       const segments =  await Api.getSegments(searchValue);
       setSegmentsData(segments);
    }, [searchValue])

    useEffect( () => {
        loadSegments();
    }, [loadSegments, searchValue]);

    return (
        <div className="container">
            <section className="header">
                <h1 className="title">Segmento da Empresa</h1>
                <p className="subtitle">Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de sua empresa.</p>
            </section>

            <section className="content">
                <div className="services">
                    <input 
                        className="inputSearch" 
                        type="search" value={searchValue} 
                        placeholder="Ex: Restaurante"
                        onChange={(event) => handleChange(event)}/>

                    {searchValue && (
                        <div>
                            {segmentsData.map(item => (
                                <SegmentItem key={item.id} data={item} />
                            ))}
                        </div>
                    )}

                    {!searchValue && (
                        <div>
                            <p className="alert">Informe acima o segmento para continuar.</p>
                        </div>
                    )}
                    
                </div>
            </section>

            <section className="footer">
                <Button
                    variant="contained"
                    color="default"
                    className={`${classes.backButton} ${classes.button}`}
                    startIcon={<ArrowBack />}
                    onClick={handleBack}
                >
                    Voltar
                </Button>
            </section>

        </div>
    );
};

export { SearchSegments };