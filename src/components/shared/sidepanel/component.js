import React, { useState } from 'react';
import { Drawer, SwipeableDrawer } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SideBar from './sidepanel';

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

		drawerSmall: {
			width: '12%',
			[theme.breakpoints.down('md')]: {
				width: '5%',
			},
			[theme.breakpoints.up('sm')]: {
				display: 'none',
			},
		},
		drawerPaperSmall: {
			'&&': {
				width: '12%',
				backgroundColor: theme.palette.background.default,
				[theme.breakpoints.down('md')]: {
					width: '8%',
				},
			},

			[theme.breakpoints.up('sm')]: {
				display: 'none',
			},
		},
	};
});

const SideMenu = (props) => {
	const { classes } = useStyles();
	const pageActuelle = props.page;
	const [open, setOpen] = useState(false);
	<>
		<Drawer
			x={{
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
			<SideBar page={pageActuelle} />
		</Drawer>
		<SwipeableDrawer
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			anchor='left'
			classes={{
				paper: classes.drawerPaperSmall,
				root: classes.drawerRootSmall,
			}}
		>
			<SideBar page={pageActuelle} />
		</SwipeableDrawer>
	</>;
};

export default SideMenu;
