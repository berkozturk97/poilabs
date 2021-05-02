import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from './campaignsDetail.module.css';

function CampaignDetail({shop}) {
    return (
        <Card className={styles.container}>
          <CardActionArea>
            <CardMedia
              className={styles.cardImage}
              image={shop.logo}
              title="Contemplative Reptile"
            />
            <CardContent>
              <h2 className={styles.campaignHeader}>
                {shop.name} - {shop.campaignTitle}
              </h2>
              <Typography className={styles.campaginDescription} variant="body2" color="textSecondary" component="p">
                {shop.campaignDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default CampaignDetail;