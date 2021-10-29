import React,{ useContext } from "react";
import { SegmentContext } from "../../contexts/SegmentContext";
import { useHistory } from 'react-router-dom';

import './styles.css'

const SegmentItem = ({data}) => {
    const { dispatch } = useContext(SegmentContext);
    const history = useHistory();

    const handleSelect = () => {
        dispatch({
            type: 'setSegment',
            payload: {
                segment: {
                    id: data.id,
                    descricao: data.descricao
                },
            },
        });

        history.push("/");
    }

    return (
        <div>
            <p className="itemCard" onClick={handleSelect}>{data.descricao}</p>
        </div>
    );
};

export {SegmentItem};