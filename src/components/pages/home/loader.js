import React from 'react';
import { CardContent, Grid, CircularProgress, Box } from '@mui/material';
import CustomCard from '../../shared/styledComponents/card/card';
import { makeStyles } from 'tss-react/mui';
import Logo from 'components/shared/logo/logo';

const useStyles = makeStyles()((theme) => {
	return {
		root: {
			body: {
				backgroundColor: theme.palette.background.default,
			},
		},
		card: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '25%',
			marginLeft: '48%',
			marginTop: '15%',
		},
		titleCard: {
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		gridItemProcessList: {
			textAlign: 'center',
		},
		title: {
			marginLeft: 10,
			fontSize: 30,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		TitleHeader: {
			position: 'absolute',
			top: '2%',
			left: '20%',
			display: 'flex',
			alignItems: 'center',
		},
		logo: {
			verticalAlign: 'middle',
		},
	};
});

const Loader = () => {
	const { classes } = useStyles();
	return (
		<>
			<Box className={classes.TitleHeader}>
				<Logo className={classes.logo} />
				<span className={classes.title}>Tableau de bord</span>
			</Box>
			<CustomCard className={classes.card}>
				<CardContent>
					<Grid
						container
						spacing={5}
						justifyContent='center'
						alignItems='center'
					>
						<Grid item xs={12} className={classes.gridItemProcessList}>
							<CircularProgress sx={{ marginTop: 2 }} />
						</Grid>
						<Grid item xs={12} className={classes.gridItemProcessList}>
							<span className={classes.titleCard}>Chargement des données</span>
						</Grid>
					</Grid>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default Loader;
