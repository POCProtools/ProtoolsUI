import React from 'react';
import { Grid, Link, Drawer, Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { FiHome, FiList, FiBarChart2, FiCpu, FiEdit } from 'react-icons/fi';

import Logo from '../logo/logo';

const useStyles = makeStyles()((theme) => {
	return {
		drawer: {
			width: '12%',
			[theme.breakpoints.down('md')]: {
				width: '5%',
			},
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
		drawerPaper: {
			'&&': {
				width: '12%',
				backgroundColor: theme.palette.background.default,
				[theme.breakpoints.down('md')]: {
					width: '8%',
				},
			},

			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
		boxBreakpoint: {
			[theme.breakpoints.down('md')]: {
				display: 'none',
			},
		},
		logo: {
			padding: 20,
		},
		titleSidebar: {
			display: 'inline-block',
			marginLeft: 10,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},

		textSidebar: {
			display: 'inline-block',
			marginLeft: 10,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		textSidebarMain: {
			display: 'inline-block',
			marginLeft: 10,
			fontWeight: 'bold',
			color: theme.palette.secondary.main,
		},
		iconMain: {
			marginLeft: 20,
			color: theme.palette.secondary.main,
			[theme.breakpoints.down('md')]: {
				fontSize: 19,
			},
		},
		icon: {
			marginLeft: 20,
			color: theme.palette.primary.main,
			[theme.breakpoints.down('md')]: {
				fontSize: 19,
			},
		},
	};
});

const SideBar = (props) => {
	const { classes } = useStyles();
	//TODO : Gestion state page actuelle
	const pageActuelle = props.page;
	return (
		<>
			<Drawer
				sx={{
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: '12%',
						boxSizing: 'border-box',
					},
				}}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
			>
				<Grid
					container
					spacing={2}
					sx={{
						marginTop: 3,
						marginBottom: 5,
						marginLeft: { sm: '28%', md: '12%' },
					}}
				>
					<Logo className={classes.logo} />
					<Box className={classes.boxBreakpoint}>
						<Typography variant='h6' className={classes.titleSidebar}>
							Protools <br />
							Dashboard
						</Typography>
					</Box>
				</Grid>

				<Grid
					container
					direction='column'
					justifyContent='flex-start'
					alignContent='flex-start'
					spacing={3}
					sx={{ marginLeft: { sm: '25%', md: '8%' } }}
				>
					<Link href='/' underline='none'>
						<Grid
							container
							direction='row'
							spacing={1}
							sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
						>
							<FiHome
								className={
									pageActuelle === 'home' ? classes.iconMain : classes.icon
								}
							/>
							<Box className={classes.boxBreakpoint}>
								<Typography
									variant='subtitle1'
									className={
										pageActuelle === 'home'
											? classes.textSidebarMain
											: classes.textSidebar
									}
								>
									Home
								</Typography>
							</Box>
						</Grid>
					</Link>

					<Link href='/process' underline='none'>
						<Grid
							container
							direction='row'
							spacing={1}
							sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
						>
							<FiList
								className={
									pageActuelle === 'process' ? classes.iconMain : classes.icon
								}
							/>
							<Box className={classes.boxBreakpoint}>
								<Typography
									variant='subtitle1'
									className={
										pageActuelle === 'process'
											? classes.textSidebarMain
											: classes.textSidebar
									}
								>
									Workflows
								</Typography>
							</Box>
						</Grid>
					</Link>
					<Link href='/logs' underline='none'>
						<Grid
							container
							direction='row'
							spacing={1}
							sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
						>
							<FiBarChart2
								className={
									pageActuelle === 'logs' ? classes.iconMain : classes.icon
								}
							/>
							<Box className={classes.boxBreakpoint}>
								<Typography
									variant='subtitle1'
									className={
										pageActuelle === 'logs'
											? classes.textSidebarMain
											: classes.textSidebar
									}
								>
									Logs
								</Typography>
							</Box>
						</Grid>
					</Link>
					<Link href='/admin' underline='none'>
						<Grid
							container
							direction='row'
							spacing={1}
							sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
						>
							<FiCpu
								className={
									pageActuelle === 'admin' ? classes.iconMain : classes.icon
								}
							/>
							<Box className={classes.boxBreakpoint}>
								<Typography
									variant='subtitle1'
									className={
										pageActuelle === 'admin'
											? classes.textSidebarMain
											: classes.textSidebar
									}
								>
									Admin
								</Typography>
							</Box>
						</Grid>
					</Link>
					<Link href='/design' underline='none'>
						<Grid
							container
							direction='row'
							spacing={1}
							sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
						>
							<FiEdit
								className={
									pageActuelle === 'design' ? classes.iconMain : classes.icon
								}
							/>
							<Box className={classes.boxBreakpoint}>
								<Typography
									variant='subtitle1'
									className={
										pageActuelle === 'design'
											? classes.textSidebarMain
											: classes.textSidebar
									}
								>
									Design
								</Typography>
							</Box>
						</Grid>
					</Link>
					{/* <Grid spacing={1} sx={{ marginTop: 2 }}>
						<Button
							variant='outlined'
							href='/login'
							className={classes.loginButton}
						>
							Connexion
						</Button>
					</Grid> */}
				</Grid>
			</Drawer>
		</>
	);
};

export default SideBar;
