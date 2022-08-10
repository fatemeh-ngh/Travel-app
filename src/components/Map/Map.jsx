import React from 'react';
import googleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab';

//Icons
import LocationOutlinedIcon from '@material-ui/icons/LocationOutlined'

//Hook
import useStyles from './style'

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')

    const coordinates = { lat: 0, lng: 0 }

    return (
        <div className={classes.mapContainer}>
            <googleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                option={''}
                onChang={''}
                onChildClick={''}
            >

            </googleMapReact>
        </div>
    );
};

export default Map;