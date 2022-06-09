import React from 'react';

//import Display from './bpmnDisplay';
import { makeStyles } from 'tss-react/mui';
import { GlobalStyles } from 'tss-react';
import { Grid, CardContent } from '@mui/material';
import SelectProcess from './selectProcess';
import CustomCard from 'components/shared/stylesComponents/card';
import Logo from 'components/shared/logo';

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
			width: '30%',
			marginLeft: '45%',
			marginTop: '10%',
			padding: 10,
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
		},
		logo: {
			verticalAlign: 'middle',
		},

		titleCard: {
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
	};
});

const ProcessSelect = () => {
	const { classes } = useStyles();
	// TODO : add remplacer par les processus disponibles
	return (
		<>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: '#F9FAFC',
					},
				}}
			/>
			<Grid container justify='center'>
				<div className={classes.TitleHeader}>
					<Logo className={classes.logo} />
					<span className={classes.title}>Workflows</span>
				</div>
				<CustomCard className={classes.card}>
					<CardContent>
						<span className={classes.titleCard}>
							Selectionner un protocole:
						</span>
						<SelectProcess sx={{ margin: 10 }} />
					</CardContent>
				</CustomCard>
			</Grid>
		</>
	);
};
export default ProcessSelect;
