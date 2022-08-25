import React from 'react';

import { makeStyles } from 'tss-react/mui';
import {
	Button,
	Card,
	Typography,
	Grid,
	Stack,
	CardContent,
} from '@mui/material';
import { FiPause, FiActivity, FiCodesandbox } from 'react-icons/fi';

const useStyles = makeStyles()((theme) => {
	return {
		infoName: {
			fontWeight: 'bold',
		},
		infoValue: {},
	};
});

const ProtocolInfo = (props) => {
	const classes = useStyles();

	return (
		<>
			<Stack direction='row' alignItems='flex-start'>
				<Card
					sx={{
						boxShadow: 0,
						textAlign: 'center',
						backgroundColor: 'secondary.pressed',
						borderRadius: 7,
						m: 1,
						width: '90%',
					}}
				>
					<CardContent className={classes.cardContent}>
						<Stack
							direction='row'
							alignItems='flex-start'
							spacing={{ xl: 10, md: 6, lg: 5, xs: 0.5, sm: 1.5 }}
						>
							<Stack spacing={1}>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content Content Content Content Content Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
							</Stack>
							<Stack spacing={1}>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Title:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Content
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										Autre info:
									</Typography>
									<Typography
										color='primary'
										variant='body2'
										sx={{ marginLeft: 1 }}
									>
										Autres informations potentiellement utiles potentiellement
										longues à afficher
									</Typography>
								</Grid>
								<Grid item container xs={12} direction='row'>
									<Typography
										color='primary'
										variant='h6'
										className={classes.infoName}
									>
										....
									</Typography>
								</Grid>
							</Stack>
						</Stack>
					</CardContent>
				</Card>
				<Stack spacing={1.5} sx={{ padding: '0.2rem 2.8rem', minwidth: '15%' }}>
					<Typography
						color='primary'
						variant='h6'
						sx={{ marginTop: 1 }}
						className={classes.infoName}
					>
						Plus d'informations:
					</Typography>
					<Button
						variant='outlined'
						color='primary'
						startIcon={<FiCodesandbox />}
						sx={{ padding: '0.5rem 0.7rem' }}
					>
						More Info #1
					</Button>
					<Button
						variant='contained'
						color='secondary'
						startIcon={<FiActivity />}
						sx={{ padding: '0.5rem 0.7rem', color: 'white' }}
					>
						More Info #2
					</Button>
				</Stack>
			</Stack>
		</>
	);
};

export default ProtocolInfo;
