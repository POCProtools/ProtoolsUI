import React from 'react';
import { Grid, Link, Drawer } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { FiHome, FiList, FiBarChart2, FiCpu, FiEdit } from 'react-icons/fi';

import Logo from '../logo/logo';

const useStyles = makeStyles()((theme) => {
	return {
		drawer: {
			width: '12%',
		},
		drawerPaper: {
			'&&': {
				width: '12%',
				backgroundColor: theme.palette.background.default,
			},
		},
		logo: {
			padding: 20,
			marginLeft: 20,
		},
		titleSidebar: {
			display: 'inline-block',
			marginLeft: 10,
			fontSize: 24,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},

		textSidebar: {
			display: 'inline-block',
			marginLeft: 10,
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		textSidebarMain: {
			display: 'inline-block',
			marginLeft: 10,
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.secondary.main,
		},
		iconMain: {
			marginLeft: 20,
			color: theme.palette.secondary.main,
		},
		icon: {
			marginLeft: 20,
			color: theme.palette.primary.main,
		},
		loginButton: {
			fontSize: '14px',
			marginTop: 10,
			marginLeft: 20,
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
			fontWeight: 'bold',
			borderRadius: 15,
			borderWidth: 2,
			'&:hover': {
				borderWidth: 2,
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
					sx={{ marginTop: 3, marginBottom: 5, marginLeft: 2 }}
				>
					<Logo
						// @ts-ignore
						className={classes.logo}
					/>
					<span className={classes.titleSidebar}>
						Protools <br />
						Dashboard
					</span>
				</Grid>

				<Grid container direction='column' spacing={3} sx={{ marginLeft: 2 }}>
					<Link href='/' underline='none'>
						<Grid sx={{ marginTop: 2 }}>
							<FiHome
								className={
									pageActuelle === 'home' ? classes.iconMain : classes.icon
								}
							/>
							<span
								className={
									pageActuelle === 'home'
										? classes.textSidebarMain
										: classes.textSidebar
								}
							>
								Home
							</span>
						</Grid>
					</Link>

					<Link href='/process' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiList
								className={
									pageActuelle === 'process' ? classes.iconMain : classes.icon
								}
							/>
							<span
								className={
									pageActuelle === 'process'
										? classes.textSidebarMain
										: classes.textSidebar
								}
							>
								Workflows
							</span>
						</Grid>
					</Link>
					<Link href='/logs' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiBarChart2
								className={
									pageActuelle === 'logs' ? classes.iconMain : classes.icon
								}
							/>
							<span
								className={
									pageActuelle === 'logs'
										? classes.textSidebarMain
										: classes.textSidebar
								}
							>
								Logs
							</span>
						</Grid>
					</Link>
					<Link href='/admin' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiCpu
								className={
									pageActuelle === 'admin' ? classes.iconMain : classes.icon
								}
							/>
							<span
								className={
									pageActuelle === 'admin'
										? classes.textSidebarMain
										: classes.textSidebar
								}
							>
								Admin
							</span>
						</Grid>
					</Link>
					<Link href='/design' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiEdit
								className={
									pageActuelle === 'design' ? classes.iconMain : classes.icon
								}
							/>
							<span
								className={
									pageActuelle === 'design'
										? classes.textSidebarMain
										: classes.textSidebar
								}
							>
								Design
							</span>
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
