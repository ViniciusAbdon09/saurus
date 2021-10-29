import React, {useState, useEffect, useCallback, useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SearchSegments } from '../pages/SearchSegments';

import { SegmentContext } from '../contexts/SegmentContext';
import { Api } from '../api';

const Navigation = () => {

    const [defaultSearch] = useState('Serviços de Beleza');

    const { dispatch } = useContext(SegmentContext); 
   
    const loadSegments = useCallback(async (defaultSearch) => {
        const segments =  await Api.getSegments(defaultSearch);
       
        dispatch({
            type: 'setSegment',
            payload: {
                segment: {
                    id: segments[0].id,
                    descricao: segments[0].descricao
                },
            },
        });

    }, [dispatch]);
 
    useEffect(() => {
        loadSegments(defaultSearch);
    }, [loadSegments, defaultSearch]);
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/searchSegments" exact component={SearchSegments} />
            </Switch>
        </BrowserRouter>
    );
};

export { Navigation };