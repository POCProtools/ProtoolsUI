import React from 'react';
import { makeStyles } from 'tss-react/mui';

import { AppBar, Toolbar, Grid, Link, Box, Typography } from '@mui/material';
import { FiMoon, FiBook } from 'react-icons/fi';

const useStyles = makeStyles()((theme) => {
	return {
		appBar: {
			position: 'relative',
			boxShadow: 'none',
			elevation: 0,
		},
		gridContainer: {
			display: 'flex',
			alignItems: 'center',
		},

		textHeader: {
			flex: 1,

			fontWeight: 'normal',
			//margin: 5,
			color: theme.palette.primary.main,
		},
		iconsHeader: {
			flex: 1,
			color: theme.palette.primary.main,
		},
	};
});

const Header = () => {
	const { classes } = useStyles();
	return (
		<AppBar
			position='static'
			className={classes.appBar}
			color='transparent'
			elevation={0}
		>
			<Toolbar>
				<Grid
					container
					spacing={7}
					alignItems='baseline'
					justifyContent='flex-end'
					// sx={{ flexDirection: { sm: 'column', md: 'row' } }}
				>
					<Grid item xs={1}>
						<Box className={classes.gridContainer}>
							<FiMoon className={classes.iconsHeader} />
							<Typography variant='caption' className={classes.textHeader}>
								DarkMode
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.25}>
						<Link to='/documentation' underline='none'>
							<Box className={classes.gridContainer}>
								<FiBook className={classes.iconsHeader} />
								<Typography variant='caption' className={classes.textHeader}>
									Documentation
								</Typography>
							</Box>
						</Link>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
