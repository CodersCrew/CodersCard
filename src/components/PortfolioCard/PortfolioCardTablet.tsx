import React from 'react';
import { Smartphone } from 'react-feather';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { transformImage } from '@/utils/image';

import type { PortfolioCardVariantProps } from './PortfolioCard.types';

const PROJECT_IMAGE_WIDTH = 240;
const PROJECT_IMAGE_HEIGHT = 135;

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    boxShadow: theme.shadows[4],
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  media: {
    minWidth: PROJECT_IMAGE_WIDTH,
    minHeight: PROJECT_IMAGE_HEIGHT,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    padding: theme.spacing(2.5, 3),
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
    padding: theme.spacing(0.5, 1.5, 0.5, 1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 16,
  },
}));

export const PortfolioCardTablet = ({
  title,
  label,
  description,
  image,
  onClick,
  className = '',
  ...props
}: PortfolioCardVariantProps) => {
  const classes = useStyles();

  const projectImage = transformImage(image, { width: PROJECT_IMAGE_WIDTH, height: PROJECT_IMAGE_HEIGHT });

  return (
    <Card {...props} onClick={onClick} className={`${classes.card} ${className}`}>
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.media} image={projectImage} title={title}>
          <Typography className={classes.label} variant="subtitle2">
            <Smartphone className={classes.icon} />
            <span>{label}</span>
          </Typography>
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
